"""
Shopping cart entity models
"""
from app import db
from datetime import datetime

class ShoppingCart(db.Model):
    """Shopping cart entity"""
    __tablename__ = 'shopping_carts'
    
    cart_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), unique=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    session_id = db.Column(db.String(100))
    
    # Relationships
    items = db.relationship('CartItem', backref='cart', lazy='dynamic', cascade='all, delete-orphan')
    
    def add_item(self, product, quantity=1):
        """Add item to cart or update quantity if exists"""
        existing_item = self.items.filter_by(product_id=product.product_id).first()
        
        if existing_item:
            existing_item.quantity += quantity
            return existing_item
        else:
            new_item = CartItem(
                cart_id=self.cart_id,
                product_id=product.product_id,
                quantity=quantity,
                price_at_add=product.price
            )
            db.session.add(new_item)
            return new_item
    
    def remove_item(self, cart_item_id):
        """Remove item from cart"""
        item = self.items.filter_by(cart_item_id=cart_item_id).first()
        if item:
            db.session.delete(item)
            return True
        return False
    
    def calculate_total(self):
        """Calculate total cart value"""
        return sum(item.get_subtotal() for item in self.items)
    
    def get_item_count(self):
        """Get total number of items in cart"""
        return sum(item.quantity for item in self.items)
    
    def clear(self):
        """Remove all items from cart"""
        self.items.delete()
    
    def __repr__(self):
        return f'<ShoppingCart {self.cart_id}>'


class CartItem(db.Model):
    """Individual item in shopping cart"""
    __tablename__ = 'cart_items'
    
    cart_item_id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey('shopping_carts.cart_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    price_at_add = db.Column(db.Numeric(10, 2), nullable=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    product = db.relationship('Product')
    
    def get_subtotal(self):
        """Calculate subtotal for this item"""
        return float(self.price_at_add) * self.quantity
    
    def update_quantity(self, quantity):
        """Update item quantity"""
        if quantity > 0:
            self.quantity = quantity
            return True
        return False
    
    def __repr__(self):
        return f'<CartItem {self.cart_item_id}: {self.quantity}x Product {self.product_id}>'
