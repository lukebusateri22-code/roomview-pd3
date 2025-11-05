"""
Cart Controller
Handles shopping cart operations
"""
from flask import Blueprint, render_template, request, jsonify, redirect, url_for, flash
from flask_login import login_required, current_user
from app import db
from models.cart import ShoppingCart, CartItem
from models.product import Product

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/')
@login_required
def view_cart():
    """View shopping cart"""
    cart = current_user.cart
    if not cart:
        cart = ShoppingCart(customer_id=current_user.customer_id)
        db.session.add(cart)
        db.session.commit()
    
    return render_template('cart/view.html', cart=cart)


@cart_bp.route('/add', methods=['POST'])
@login_required
def add_to_cart():
    """Add item to cart (UC-04)"""
    data = request.get_json()
    product_id = data.get('product_id')
    quantity = data.get('quantity', 1)
    
    # Validate product exists
    product = Product.query.get_or_404(product_id)
    
    # Check stock availability
    if product.stock < quantity:
        return jsonify({
            'success': False,
            'error': f'Only {product.stock} items in stock'
        }), 400
    
    # Get or create cart
    cart = current_user.cart
    if not cart:
        cart = ShoppingCart(customer_id=current_user.customer_id)
        db.session.add(cart)
        db.session.flush()
    
    # Add item to cart
    cart.add_item(product, quantity)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'cart_total': float(cart.calculate_total()),
        'item_count': cart.get_item_count()
    })


@cart_bp.route('/update/<int:cart_item_id>', methods=['POST'])
@login_required
def update_cart_item(cart_item_id):
    """Update cart item quantity"""
    data = request.get_json()
    quantity = data.get('quantity', 1)
    
    cart_item = CartItem.query.get_or_404(cart_item_id)
    
    # Verify cart belongs to current user
    if cart_item.cart.customer_id != current_user.customer_id:
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    # Check stock
    if cart_item.product.stock < quantity:
        return jsonify({
            'success': False,
            'error': f'Only {cart_item.product.stock} items in stock'
        }), 400
    
    cart_item.update_quantity(quantity)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'subtotal': cart_item.get_subtotal(),
        'cart_total': float(cart_item.cart.calculate_total())
    })


@cart_bp.route('/remove/<int:cart_item_id>', methods=['POST'])
@login_required
def remove_from_cart(cart_item_id):
    """Remove item from cart"""
    cart_item = CartItem.query.get_or_404(cart_item_id)
    
    # Verify cart belongs to current user
    if cart_item.cart.customer_id != current_user.customer_id:
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    cart = cart_item.cart
    db.session.delete(cart_item)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'cart_total': float(cart.calculate_total()),
        'item_count': cart.get_item_count()
    })


@cart_bp.route('/clear', methods=['POST'])
@login_required
def clear_cart():
    """Clear all items from cart"""
    cart = current_user.cart
    if cart:
        cart.clear()
        db.session.commit()
    
    flash('Cart cleared successfully', 'success')
    return redirect(url_for('cart.view_cart'))
