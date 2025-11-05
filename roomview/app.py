"""
RoomView Application Factory
Main Flask application initialization
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

# Initialize extensions
db = SQLAlchemy()
login_manager = LoginManager()

def create_app(config_name='default'):
    """Application factory pattern"""
    app = Flask(__name__)
    
    # Load configuration
    if config_name == 'default':
        from config import Config
        app.config.from_object(Config)
    
    # Initialize extensions with app
    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'
    
    # Register blueprints
    from controllers.product_controller import product_bp
    from controllers.cart_controller import cart_bp
    from controllers.auth_controller import auth_bp
    from controllers.admin_controller import admin_bp
    
    app.register_blueprint(product_bp)
    app.register_blueprint(cart_bp, url_prefix='/cart')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(admin_bp, url_prefix='/admin')
    
    # Home route
    @app.route('/')
    def index():
        from flask import render_template
        return render_template('index.html')
    
    return app

# Create app instance
app = create_app()
