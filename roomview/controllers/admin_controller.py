"""
Admin Controller
Handles admin operations like inventory management
"""
from flask import Blueprint, render_template, request, jsonify, redirect, url_for, flash
from flask_login import login_required, current_user
from functools import wraps
from app import db
from models.product import Product, Category, Room
from models.user import Admin
from models.order import Order

admin_bp = Blueprint('admin', __name__)

def admin_required(f):
    """Decorator to require admin access"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not isinstance(current_user._get_current_object(), Admin):
            flash('Admin access required', 'error')
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function


@admin_bp.route('/dashboard')
@login_required
@admin_required
def dashboard():
    """Admin dashboard"""
    total_products = Product.query.count()
    low_stock_products = Product.query.filter(Product.stock <= Product.low_stock_threshold).count()
    pending_orders = Order.query.filter_by(status='pending').count()
    
    return render_template('admin/dashboard.html',
                         total_products=total_products,
                         low_stock_products=low_stock_products,
                         pending_orders=pending_orders)


@admin_bp.route('/products')
@login_required
@admin_required
def manage_products():
    """List all products for management"""
    products = Product.query.all()
    return render_template('admin/products.html', products=products)


@admin_bp.route('/products/<int:product_id>/update-stock', methods=['POST'])
@login_required
@admin_required
def update_product_stock(product_id):
    """Update product stock (UC-09)"""
    product = Product.query.get_or_404(product_id)
    
    data = request.get_json()
    new_stock = data.get('stock')
    low_stock_threshold = data.get('low_stock_threshold')
    
    if new_stock is not None:
        product.stock = new_stock
    
    if low_stock_threshold is not None:
        product.low_stock_threshold = low_stock_threshold
    
    db.session.commit()
    
    return jsonify({
        'success': True,
        'product_id': product.product_id,
        'stock': product.stock,
        'is_low_stock': product.is_low_stock()
    })


@admin_bp.route('/products/add', methods=['GET', 'POST'])
@login_required
@admin_required
def add_product():
    """Add new product"""
    if request.method == 'POST':
        product = Product(
            name=request.form.get('name'),
            description=request.form.get('description'),
            price=request.form.get('price'),
            stock=request.form.get('stock', 0),
            category_id=request.form.get('category_id')
        )
        
        db.session.add(product)
        db.session.commit()
        
        flash('Product added successfully', 'success')
        return redirect(url_for('admin.manage_products'))
    
    categories = Category.query.all()
    return render_template('admin/add_product.html', categories=categories)


@admin_bp.route('/products/<int:product_id>/edit', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_product(product_id):
    """Edit existing product"""
    product = Product.query.get_or_404(product_id)
    
    if request.method == 'POST':
        product.name = request.form.get('name')
        product.description = request.form.get('description')
        product.price = request.form.get('price')
        product.stock = request.form.get('stock')
        product.category_id = request.form.get('category_id')
        
        db.session.commit()
        
        flash('Product updated successfully', 'success')
        return redirect(url_for('admin.manage_products'))
    
    categories = Category.query.all()
    return render_template('admin/edit_product.html', product=product, categories=categories)


@admin_bp.route('/low-stock-alerts')
@login_required
@admin_required
def low_stock_alerts():
    """View products with low stock (UC-11)"""
    low_stock_products = Product.query.filter(
        Product.stock <= Product.low_stock_threshold,
        Product.stock > 0
    ).all()
    
    out_of_stock_products = Product.query.filter_by(stock=0).all()
    
    return render_template('admin/low_stock.html',
                         low_stock_products=low_stock_products,
                         out_of_stock_products=out_of_stock_products)


@admin_bp.route('/orders')
@login_required
@admin_required
def manage_orders():
    """View and manage orders"""
    status_filter = request.args.get('status', 'all')
    
    if status_filter == 'all':
        orders = Order.query.order_by(Order.order_date.desc()).all()
    else:
        orders = Order.query.filter_by(status=status_filter).order_by(Order.order_date.desc()).all()
    
    return render_template('admin/orders.html', orders=orders, status_filter=status_filter)
