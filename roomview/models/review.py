"""
Review entity model
"""
from app import db
from datetime import datetime

class Review(db.Model):
    """Product review entity"""
    __tablename__ = 'reviews'
    
    review_id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'), nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  # 1-5
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    helpful_count = db.Column(db.Integer, default=0)
    
    def mark_helpful(self):
        """Increment helpful counter"""
        self.helpful_count += 1
    
    def is_valid_rating(self):
        """Validate rating is between 1-5"""
        return 1 <= self.rating <= 5
    
    def __repr__(self):
        return f'<Review {self.review_id}: {self.rating}★>'
