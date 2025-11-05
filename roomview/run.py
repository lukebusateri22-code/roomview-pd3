"""
RoomView Application Entry Point
Run this file to start the Flask development server
"""
from app import app, db

if __name__ == '__main__':
    # Create database tables if they don't exist
    with app.app_context():
        db.create_all()
        print("✓ Database tables created successfully!")
    
    print("\n" + "="*50)
    print("🏠 RoomView Application Starting...")
    print("="*50)
    print("📍 Server running at: http://localhost:5001")
    print("🛑 Press CTRL+C to stop the server")
    print("="*50 + "\n")
    
    # Run the application
    app.run(debug=True, host='0.0.0.0', port=5001)
