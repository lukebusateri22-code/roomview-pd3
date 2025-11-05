"""
Seed database with sample data for testing
Run this after creating the database
"""
from app import app, db
from models.user import Customer, Admin
from models.product import Product, Category, Room, ProductRoom
from datetime import datetime

def seed_database():
    """Populate database with sample data"""
    with app.app_context():
        # Clear existing data
        print("Clearing existing data...")
        db.drop_all()
        db.create_all()
        
        # Create rooms
        print("Creating rooms...")
        living_room = Room(name='Living Room', description='Comfortable furniture for your living space')
        bedroom = Room(name='Bedroom', description='Rest and relax in style')
        kitchen = Room(name='Kitchen', description='Cook and dine in comfort')
        bathroom = Room(name='Bathroom', description='Bathroom essentials and decor')
        
        db.session.add_all([living_room, bedroom, kitchen, bathroom])
        db.session.commit()
        
        # Create categories
        print("Creating categories...")
        furniture = Category(name='Furniture', description='Tables, chairs, and more')
        lighting = Category(name='Lighting', description='Lamps and light fixtures')
        decor = Category(name='Decor', description='Decorative items')
        storage = Category(name='Storage', description='Shelves and organizers')
        
        db.session.add_all([furniture, lighting, decor, storage])
        db.session.commit()
        
        # Create products
        print("Creating products...")
        products = [
            Product(name='Modern Sofa', description='Comfortable 3-seater sofa', price=899.99, stock=5, category=furniture),
            Product(name='Coffee Table', description='Wooden coffee table', price=249.99, stock=12, category=furniture),
            Product(name='Table Lamp', description='LED table lamp', price=49.99, stock=25, category=lighting),
            Product(name='Queen Bed Frame', description='Solid wood bed frame', price=599.99, stock=8, category=furniture),
            Product(name='Nightstand', description='2-drawer nightstand', price=129.99, stock=15, category=furniture),
            Product(name='Dining Table', description='6-person dining table', price=699.99, stock=6, category=furniture),
            Product(name='Bar Stool', description='Modern bar stool', price=89.99, stock=20, category=furniture),
            Product(name='Bathroom Vanity', description='Double sink vanity', price=799.99, stock=4, category=furniture),
            Product(name='Wall Mirror', description='Large decorative mirror', price=149.99, stock=10, category=decor),
            Product(name='Bookshelf', description='5-tier bookshelf', price=179.99, stock=18, category=storage),
        ]
        
        db.session.add_all(products)
        db.session.commit()
        
        # Associate products with rooms
        print("Associating products with rooms...")
        associations = [
            ProductRoom(product_id=products[0].product_id, room_id=living_room.room_id, display_order=1, featured=True),
            ProductRoom(product_id=products[1].product_id, room_id=living_room.room_id, display_order=2, featured=True),
            ProductRoom(product_id=products[2].product_id, room_id=living_room.room_id, display_order=3),
            ProductRoom(product_id=products[2].product_id, room_id=bedroom.room_id, display_order=3),
            ProductRoom(product_id=products[3].product_id, room_id=bedroom.room_id, display_order=1, featured=True),
            ProductRoom(product_id=products[4].product_id, room_id=bedroom.room_id, display_order=2),
            ProductRoom(product_id=products[5].product_id, room_id=kitchen.room_id, display_order=1, featured=True),
            ProductRoom(product_id=products[6].product_id, room_id=kitchen.room_id, display_order=2),
            ProductRoom(product_id=products[7].product_id, room_id=bathroom.room_id, display_order=1, featured=True),
            ProductRoom(product_id=products[8].product_id, room_id=bathroom.room_id, display_order=2),
            ProductRoom(product_id=products[9].product_id, room_id=living_room.room_id, display_order=4),
        ]
        
        db.session.add_all(associations)
        db.session.commit()
        
        # Create test users
        print("Creating test users...")
        customer = Customer(
            email='customer@test.com',
            first_name='John',
            last_name='Doe',
            shipping_address='123 Main St, City, State 12345'
        )
        customer.set_password('password123')
        
        admin = Admin(
            email='admin@test.com',
            first_name='Admin',
            last_name='User',
            admin_level=3,
            department='IT'
        )
        admin.set_password('admin123')
        
        db.session.add_all([customer, admin])
        db.session.commit()
        
        print("\n" + "="*50)
        print("✓ Database seeded successfully!")
        print("="*50)
        print("\nTest Accounts:")
        print("  Customer: customer@test.com / password123")
        print("  Admin: admin@test.com / admin123")
        print("\nRooms created: 4")
        print("Products created: 10")
        print("Categories created: 4")
        print("="*50 + "\n")

if __name__ == '__main__':
    seed_database()
