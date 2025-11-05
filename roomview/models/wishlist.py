"""
Wishlist entity models
"""
from app import db
from datetime import datetime

class Wishlist(db.Model):
    """Wishlist entity"""
    __tablename__ = 'wishlists'
    
    wishlist_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), unique=True)
    name = db.Column(db.String(100), default='My Wishlist')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    items = db.relationship('WishlistItem', backref='wishlist', lazy='dynamic', cascade='all, delete-orphan')
    
    def add_product(self, product, priority=3):
        """Add product to wishlist"""
        existing_item = self.items.filter_by(product_id=product.product_id).first()
        
        if existing_item:
            return False  # Already in wishlist
        else:
            new_item = WishlistItem(
                wishlist_id=self.wishlist_id,
                product_id=product.product_id,
                priority=priority
            )
            db.session.add(new_item)
            return True
    
    def remove_product(self, product_id):
        """Remove product from wishlist"""
        item = self.items.filter_by(product_id=product_id).first()
        if item:
            db.session.delete(item)
            return True
        return False
    
    def get_products(self):
        """Get all products in wishlist"""
        return [item.product for item in self.items.order_by(WishlistItem.priority.desc())]
    
    def __repr__(self):
        return f'<Wishlist {self.wishlist_id}: {self.name}>'


class WishlistItem(db.Model):
    """Individual item in wishlist"""
    __tablename__ = 'wishlist_items'
    
    wishlist_item_id = db.Column(db.Integer, primary_key=True)
    wishlist_id = db.Column(db.Integer, db.ForeignKey('wishlists.wishlist_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'), nullable=False)
    added_at = db.Column(db.DateTime, default=datetime.utcnow)
    priority = db.Column(db.Integer, default=3)  # 1-5, 5 being highest
    
    # Relationships
    product = db.relationship('Product')
    
    def set_priority(self, level):
        """Set priority level (1-5)"""
        if 1 <= level <= 5:
            self.priority = level
            return True
        return False
    
    def __repr__(self):
        return f'<WishlistItem {self.wishlist_item_id}: Product {self.product_id}>'
