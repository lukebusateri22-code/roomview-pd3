# RoomView Application Skeleton

This is the application skeleton for RoomView, demonstrating the three-tier architecture designed in PD3.

## Architecture

### Three-Tier Structure
1. **Presentation Layer** - Flask templates with Bootstrap-inspired CSS
2. **Business Logic Layer** - Controllers and Service classes
3. **Data Access Layer** - SQLAlchemy ORM models

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd roomview
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python run.py
   ```

5. **Access the application:**
   Open your browser and go to: `http://localhost:5000`

## Project Structure

```
roomview/
├── app.py                  # Application factory
├── config.py               # Configuration settings
├── run.py                  # Application entry point
├── requirements.txt        # Python dependencies
├── models/                 # Data models (Entity classes)
│   ├── __init__.py
│   ├── user.py            # User, Customer, Admin entities
│   ├── product.py         # Product, Category, Room entities
│   ├── cart.py            # ShoppingCart, CartItem entities
│   ├── order.py           # Order, OrderItem entities
│   ├── wishlist.py        # Wishlist, WishlistItem entities
│   └── review.py          # Review entity
├── controllers/            # Controllers (Boundary classes)
│   ├── product_controller.py
│   ├── cart_controller.py
│   ├── auth_controller.py
│   └── admin_controller.py
├── templates/              # HTML templates
│   ├── base.html
│   ├── home.html
│   ├── products/
│   ├── cart/
│   └── auth/
└── static/                 # Static files (CSS, JS, images)
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

## Features Implemented

### Customer Features
- ✅ Browse products by room (UC-02)
- ✅ Search products with filters (UC-03)
- ✅ Add items to cart (UC-04)
- ✅ View shopping cart
- ✅ User registration and login

### Admin Features
- ✅ Manage product inventory (UC-09)
- ✅ View low stock alerts (UC-11)
- ✅ Add/edit products
- ✅ View orders

## Database Schema

The application uses SQLAlchemy ORM with the following entities:
- **User** (with Customer and Admin subclasses)
- **Product** (linked to Categories and Rooms)
- **ShoppingCart** and **CartItem**
- **Order** and **OrderItem**
- **Wishlist** and **WishlistItem**
- **Review**

The database is automatically created when you run the application for the first time.

## Use Cases Demonstrated

This skeleton implements the following use cases from PD2:

1. **UC-02: Browse Products by Room** - `/products/room/<room_id>`
2. **UC-03: Search Products** - `/search`
3. **UC-04: Add to Cart** - POST `/cart/add`
4. **UC-06: Checkout** - (Skeleton structure in place)
5. **UC-09: Manage Inventory** - `/admin/products/<id>/update-stock`
6. **UC-11: Low Stock Alerts** - `/admin/low-stock-alerts`

## Design Patterns Used

- **MVC Pattern**: Separation of Models, Views (Templates), and Controllers
- **Repository Pattern**: DAO-like access through SQLAlchemy
- **Factory Pattern**: Application factory in `app.py`
- **Blueprint Pattern**: Modular route organization

## Notes for PD3 Submission

This skeleton demonstrates:
- ✅ Complete class structure matching the Class Diagram
- ✅ Controller methods implementing sequence diagrams
- ✅ Entity relationships (inheritance, associations, compositions)
- ✅ Three-tier architecture from Component Diagram
- ✅ Runnable code that creates database tables
- ✅ UI templates matching mockups

## Next Steps (PD4)

For the final implementation, you would add:
- Payment gateway integration
- Email notifications
- Advanced search with Elasticsearch
- Image upload functionality
- Order tracking system
- Admin analytics dashboard
- Comprehensive test suite

## Troubleshooting

**Port already in use:**
```bash
# Change port in run.py or kill the process using port 5000
lsof -ti:5000 | xargs kill -9
```

**Database errors:**
```bash
# Delete the database and restart
rm roomview.db
python run.py
```

**Module not found:**
```bash
# Reinstall dependencies
pip install -r requirements.txt
```

## Team Members
- Kamal - Class diagram and sequence diagrams
- Colton - State chart and component diagram
- Matthew - UI mockups and Flask skeleton setup
- Luke - Updated use cases and traceability
- Reshan - Testing skeleton and documentation review
