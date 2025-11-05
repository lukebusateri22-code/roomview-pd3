"""
Order entity models
"""
from app import db
from datetime import datetime, timedelta

class Order(db.Model):
    """Order entity"""
    __tablename__ = 'orders'
    
    order_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'), nullable=False)
    order_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='pending')  # pending, processing, shipped, delivered, cancelled
    total_amount = db.Column(db.Numeric(10, 2), nullable=False)
    shipping_address = db.Column(db.Text, nullable=False)
    billing_address = db.Column(db.Text)
    payment_method = db.Column(db.String(50))
    tracking_number = db.Column(db.String(100))
    estimated_delivery = db.Column(db.Date)
    
    # Relationships
    items = db.relationship('OrderItem', backref='order', lazy='dynamic', cascade='all, delete-orphan')
    
    def calculate_total(self):
        """Calculate order total from items"""
        return sum(item.get_subtotal() for item in self.items)
    
    def update_status(self, new_status):
        """Update order status"""
        valid_statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
        if new_status in valid_statuses:
            self.status = new_status
            return True
        return False
    
    def can_cancel(self):
        """Check if order can be cancelled"""
        return self.status in ['pending', 'processing']
    
    def cancel_order(self):
        """Cancel the order"""
        if self.can_cancel():
            self.status = 'cancelled'
            # Restore stock for cancelled items
            for item in self.items:
                item.product.stock += item.quantity
            return True
        return False
    
    def set_estimated_delivery(self, days=7):
        """Set estimated delivery date"""
        self.estimated_delivery = (datetime.utcnow() + timedelta(days=days)).date()
    
    def __repr__(self):
        return f'<Order {self.order_id}: ${self.total_amount}>'


class OrderItem(db.Model):
    """Individual item in an order"""
    __tablename__ = 'order_items'
    
    order_item_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price_at_purchase = db.Column(db.Numeric(10, 2), nullable=False)
    discount = db.Column(db.Numeric(5, 2), default=0.0)
    
    # Relationships
    product = db.relationship('Product')
    
    def get_subtotal(self):
        """Calculate subtotal for this item"""
        base_price = float(self.price_at_purchase) * self.quantity
        discount_amount = base_price * (float(self.discount) / 100)
        return base_price - discount_amount
    
    def apply_discount(self, percentage):
        """Apply discount percentage"""
        if 0 <= percentage <= 100:
            self.discount = percentage
            return True
        return False
    
    def __repr__(self):
        return f'<OrderItem {self.order_item_id}: {self.quantity}x Product {self.product_id}>'
