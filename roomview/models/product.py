"""
Product-related entity models
"""
from app import db
from datetime import datetime

# Association table for many-to-many relationship
class ProductRoom(db.Model):
    """Association entity for Product-Room relationship"""
    __tablename__ = 'product_rooms'
    
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'), primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.room_id'), primary_key=True)
    display_order = db.Column(db.Integer, default=0)
    featured = db.Column(db.Boolean, default=False)
    
    def __repr__(self):
        return f'<ProductRoom P:{self.product_id} R:{self.room_id}>'


class Product(db.Model):
    """Product entity"""
    __tablename__ = 'products'
    
    product_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False, index=True)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    stock = db.Column(db.Integer, default=0)
    image_url = db.Column(db.String(500))
    dimensions = db.Column(db.String(100))
    weight = db.Column(db.Numeric(8, 2))
    low_stock_threshold = db.Column(db.Integer, default=5)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Foreign keys
    category_id = db.Column(db.Integer, db.ForeignKey('categories.category_id'))
    
    # Relationships
    category = db.relationship('Category', backref='products')
    rooms = db.relationship('Room', secondary='product_rooms', backref='products')
    reviews = db.relationship('Review', backref='product', lazy='dynamic')
    
    def is_in_stock(self):
        """Check if product is in stock"""
        return self.stock > 0
    
    def is_low_stock(self):
        """Check if product is below low stock threshold"""
        return self.stock <= self.low_stock_threshold and self.stock > 0
    
    def update_stock(self, quantity):
        """Update stock quantity"""
        self.stock += quantity
        return self.stock >= 0
    
    def get_average_rating(self):
        """Calculate average rating from reviews"""
        if self.reviews.count() == 0:
            return 0.0
        total = sum(review.rating for review in self.reviews)
        return round(total / self.reviews.count(), 1)
    
    def __repr__(self):
        return f'<Product {self.name}>'


class Category(db.Model):
    """Product category"""
    __tablename__ = 'categories'
    
    category_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)
    parent_id = db.Column(db.Integer, db.ForeignKey('categories.category_id'))
    
    # Self-referential relationship for subcategories
    subcategories = db.relationship('Category', backref=db.backref('parent', remote_side=[category_id]))
    
    def __repr__(self):
        return f'<Category {self.name}>'


class Room(db.Model):
    """Room type for organizing products"""
    __tablename__ = 'rooms'
    
    room_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)
    image_url = db.Column(db.String(500))
    
    def __repr__(self):
        return f'<Room {self.name}>'
