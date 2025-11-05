"""
User entity models
Implements inheritance: User -> Customer, Admin
"""
from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

class User(UserMixin, db.Model):
    """Base user class"""
    __tablename__ = 'users'
    
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    phone_number = db.Column(db.String(20))
    user_type = db.Column(db.String(20))  # 'customer' or 'admin'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime)
    
    # Polymorphic identity for inheritance
    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': user_type
    }
    
    def get_id(self):
        """Required for Flask-Login"""
        return str(self.user_id)
    
    def set_password(self, password):
        """Hash and set password"""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Verify password"""
        return check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.email}>'


class Customer(User):
    """Customer-specific attributes and methods"""
    __tablename__ = 'customers'
    
    customer_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), primary_key=True)
    shipping_address = db.Column(db.Text)
    billing_address = db.Column(db.Text)
    loyalty_points = db.Column(db.Integer, default=0)
    
    # Relationships
    cart = db.relationship('ShoppingCart', backref='customer', uselist=False, cascade='all, delete-orphan')
    orders = db.relationship('Order', backref='customer', lazy='dynamic')
    wishlist = db.relationship('Wishlist', backref='customer', uselist=False, cascade='all, delete-orphan')
    reviews = db.relationship('Review', backref='customer', lazy='dynamic')
    
    __mapper_args__ = {
        'polymorphic_identity': 'customer',
    }
    
    def __repr__(self):
        return f'<Customer {self.email}>'


class Admin(User):
    """Admin-specific attributes and methods"""
    __tablename__ = 'admins'
    
    admin_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), primary_key=True)
    admin_level = db.Column(db.Integer, default=1)  # 1=basic, 2=manager, 3=super
    department = db.Column(db.String(50))
    
    __mapper_args__ = {
        'polymorphic_identity': 'admin',
    }
    
    def can_manage_products(self):
        """Check if admin can manage products"""
        return self.admin_level >= 1
    
    def can_manage_users(self):
        """Check if admin can manage users"""
        return self.admin_level >= 2
    
    def __repr__(self):
        return f'<Admin {self.email}>'
