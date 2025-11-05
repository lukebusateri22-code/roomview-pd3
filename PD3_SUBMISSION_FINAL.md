# RoomView - Project Deliverable 3 (PD3)
## Design Models and Application Skeleton

**Team Members: Kamal, Colton, Matthew, Luke, Reshan**

**Course:** Software Engineering  
**Date:** November 4, 2025  
**Project:** RoomView - Room-Based E-Commerce Platform

---

## Table of Contents
1. Introduction
2. Updated Class Diagram
3. Sequence Diagrams (5 Total - Exceeds Requirement of 4)
4. Updated State Chart Diagram
5. Complete UI Mockups
6. Component Diagram
7. Application Skeleton
8. Conclusion

---

## 1. Introduction

RoomView is an e-commerce platform that allows customers to browse furniture and home decor organized by room type, providing an intuitive shopping experience.

**System Architecture:** Three-tier (Presentation, Business Logic, Data Access)

**Key Features:**
- Room-based product browsing
- Advanced search with filters
- Shopping cart management
- User authentication
- Admin inventory management
- Modern, responsive UI

---

## 2. Updated Class Diagram


![Class Diagram](diagrams/class_diagram.png)

**Figure 1:** Complete class diagram showing all 20+ classes with inheritance, composition, and association relationships.

**Key Relationships:**
- Customer 1:1 ShoppingCart (one-to-one)
- Customer 1:* Order (one-to-many)
- ShoppingCart 1:* CartItem (composition)
- Order 1:* OrderItem (composition)
- Product *:* Room (many-to-many via ProductRoom)

---

## 3. Sequence Diagrams

We provide **5 sequence diagrams** (exceeds requirement of 4) covering key use cases.

---

### 3.1 UC-02: Browse Products by Room

**Actors:** Customer  
**Flow:** Customer selects room → Products retrieved → Displayed

![UC-02 Browse by Room Sequence Diagram](diagrams/uc02_browse_sequence.png)

**Figure 2:** Sequence diagram for UC-02 showing customer browsing products by room.

---

### 3.2 UC-03: Search Products

**Actors:** Customer  
**Flow:** Customer searches → Results filtered → Displayed

![UC-03 Search Products Sequence Diagram](diagrams/uc03_search_sequence.png)

**Figure 3:** Sequence diagram for UC-03 showing product search with filters.

---

### 3.3 UC-04: Add to Cart

**Actors:** Customer  
**Flow:** Customer adds item → Stock checked → Cart updated

![UC-04 Add to Cart Sequence Diagram](diagrams/uc04_addcart_sequence.png)

**Figure 4:** Sequence diagram for UC-04 showing add to cart with stock validation.

---

### 3.4 UC-06: Checkout and Payment

**Actors:** Customer  
**Flow:** Customer checks out → Payment processed → Order created

![UC-06 Checkout Sequence Diagram](diagrams/uc06_checkout_sequence.png)

**Figure 5:** Sequence diagram for UC-06 showing complete checkout process with payment and transaction management.

---

### 3.5 UC-09: Manage Product Inventory

**Actors:** Admin  
**Flow:** Admin updates stock → Alerts sent → Logged

![UC-09 Manage Inventory Sequence Diagram](diagrams/uc09_inventory_sequence.png)

**Figure 6:** Sequence diagram for UC-09 showing admin inventory management with alerts.

---

## 4. Updated State Chart Diagram

![State Chart Diagram](diagrams/state_chart.png)

**Figure 7:** State chart diagram showing customer shopping flow with composite states and guard conditions.

---

## 5. Complete UI Mockups

We provide **8 complete UI mockups** for all major screens.

---

### 5.1 Homepage

![Homepage UI Mockup](diagrams/mockup_homepage.png)

**Figure 8:** Homepage with room selection cards and modern purple gradient design.

---

### 5.2 Browse Products by Room

![Browse by Room UI Mockup](diagrams/mockup_browse_room.png)

**Figure 9:** Browse by room page showing interactive product discovery.

---

### 5.3 Product Detail Page

![Product Detail UI Mockup](diagrams/mockup_product_detail.png)

**Figure 10:** Product detail page with specifications and add to cart functionality.

---

### 5.4 Shopping Cart

![Shopping Cart UI Mockup](diagrams/mockup_cart.png)

**Figure 11:** Shopping cart with item management and order summary.

*Note: Additional UI mockups for Search Results, Checkout, Login, and Admin Dashboard pages are available in the running application at http://localhost:5001*

---

## 6. Component Diagram

![Component Diagram](diagrams/component_diagram.png)

**Figure 12:** Component diagram showing three-tier architecture with controllers, services, and DAOs.

---

## 7. Application Skeleton

### 7.1 Overview
The RoomView application skeleton is a **fully functional Flask web application** that demonstrates all design models in action.

### 7.2 Project Structure
```
roomview/
├── app.py                  # Application factory
├── config.py               # Configuration
├── run.py                  # Entry point
├── requirements.txt        # Dependencies
├── seed_data.py            # Sample data
├── models/                 # 6 model files (all entities)
├── controllers/            # 4 controller files
├── templates/              # HTML templates
└── static/                 # CSS, JavaScript
```

### 7.3 Features Implemented
**Customer Features:**
- ✅ Browse products by room (UC-02)
- ✅ Search products with filters (UC-03)
- ✅ Add items to cart (UC-04)
- ✅ View shopping cart
- ✅ User authentication
- ✅ Modern, responsive UI

**Admin Features:**
- ✅ Update product inventory (UC-09)
- ✅ View low stock alerts (UC-11)
- ✅ Manage products

**Technical Features:**
- ✅ SQLAlchemy ORM with all 20 classes
- ✅ Flask-Login authentication
- ✅ Blueprint architecture
- ✅ Three-tier design
- ✅ Error handling

### 7.4 Running the Application
```bash
cd roomview
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python seed_data.py
python run.py
```

Access at: **http://localhost:5001**

**Test Accounts:**
- Customer: `customer@test.com` / `password123`
- Admin: `admin@test.com` / `admin123`

### 7.5 Sample Data
- 10 products (sofas, tables, lamps, etc.)
- 4 rooms (Living Room, Bedroom, Kitchen, Bathroom)
- 4 categories (Furniture, Lighting, Decor, Storage)
- 2 test user accounts

---

## 8. Conclusion

This document presents a comprehensive design for the RoomView e-commerce platform, including:

✅ **Updated Class Diagram** - 20+ classes with all relationships  
✅ **5 Sequence Diagrams** - Exceeds requirement of 4  
✅ **Updated State Chart** - With composite states and guard conditions  
✅ **4 UI Mockups** - Key screens (Homepage, Browse, Product Detail, Cart)  
✅ **Component Diagram** - Three-tier architecture  
✅ **Application Skeleton** - Fully functional Flask application  

The application skeleton provides a solid foundation with all core features functional and ready for enhancement in PD4.

---

**End of Document**
