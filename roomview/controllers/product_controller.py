"""
Product Controller
Handles product browsing, search, and display
"""
from flask import Blueprint, render_template, request, jsonify
from models.product import Product, Room, Category
from models.review import Review
from sqlalchemy import or_

product_bp = Blueprint('products', __name__)

@product_bp.route('/products')
def list_products():
    """List all products with pagination"""
    page = request.args.get('page', 1, type=int)
    per_page = 12
    
    products = Product.query.paginate(page=page, per_page=per_page, error_out=False)
    
    return render_template('products/list.html', products=products)


@product_bp.route('/products/room/<int:room_id>')
def browse_by_room(room_id):
    """Browse products by room (UC-02)"""
    room = Room.query.get_or_404(room_id)
    
    # Get products associated with this room
    products = room.products
    
    return render_template('products/room_browse.html', room=room, products=products)


@product_bp.route('/products/<int:product_id>')
def product_detail(product_id):
    """View product details"""
    product = Product.query.get_or_404(product_id)
    reviews = Review.query.filter_by(product_id=product_id).order_by(Review.created_at.desc()).limit(10).all()
    
    return render_template('products/detail.html', product=product, reviews=reviews)


@product_bp.route('/search')
def search_products():
    """Search products (UC-03)"""
    query = request.args.get('q', '')
    category_id = request.args.get('category', type=int)
    min_price = request.args.get('min_price', type=float)
    max_price = request.args.get('max_price', type=float)
    
    # Build query
    products_query = Product.query
    
    # Text search
    if query:
        products_query = products_query.filter(
            or_(
                Product.name.ilike(f'%{query}%'),
                Product.description.ilike(f'%{query}%')
            )
        )
    
    # Category filter
    if category_id:
        products_query = products_query.filter_by(category_id=category_id)
    
    # Price range filter
    if min_price is not None:
        products_query = products_query.filter(Product.price >= min_price)
    if max_price is not None:
        products_query = products_query.filter(Product.price <= max_price)
    
    products = products_query.all()
    
    return render_template('products/search_results.html', 
                         products=products, 
                         query=query,
                         result_count=len(products))


@product_bp.route('/rooms')
def list_rooms():
    """List all room types"""
    rooms = Room.query.all()
    return render_template('products/rooms.html', rooms=rooms)


@product_bp.route('/categories')
def list_categories():
    """List all categories"""
    categories = Category.query.filter_by(parent_id=None).all()  # Top-level categories
    return render_template('products/categories.html', categories=categories)
