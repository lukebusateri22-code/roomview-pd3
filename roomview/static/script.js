// Comprehensive product data organized by room areas
const productData = {
    // Kitchen products
    cabinet: [
        { id: 'c1', name: 'Storage Containers Set', price: 29.99, category: 'cabinet', image: '📦', description: 'Clear plastic containers for organized storage' },
        { id: 'c2', name: 'Spice Rack Organizer', price: 24.99, category: 'cabinet', image: '🧂', description: 'Rotating spice rack for easy access' },
        { id: 'c3', name: 'Cabinet Door Organizer', price: 19.99, category: 'cabinet', image: '🚪', description: 'Over-door storage rack' },
    ],
    sink: [
        { id: 's1', name: 'Dish Soap Dispenser', price: 15.99, category: 'sink', image: '🧴', description: 'Automatic soap dispenser' },
        { id: 's2', name: 'Kitchen Sponge Holder', price: 12.99, category: 'sink', image: '🧽', description: 'Suction cup sponge caddy' },
        { id: 's3', name: 'Under-Sink Organizer', price: 34.99, category: 'sink', image: '🔧', description: 'Expandable under-sink storage' },
    ],
    counter: [
        { id: 'co1', name: 'Coffee Maker', price: 89.99, category: 'counter', image: '☕', description: 'Programmable coffee machine' },
        { id: 'co2', name: 'Knife Block Set', price: 79.99, category: 'counter', image: '🔪', description: 'Professional knife set with block' },
        { id: 'co3', name: 'Paper Towel Holder', price: 18.99, category: 'counter', image: '🧻', description: 'Weighted base towel holder' },
    ],
    fridge: [
        { id: 'f1', name: 'Fridge Storage Bins', price: 22.99, category: 'fridge', image: '📋', description: 'Clear refrigerator organizers' },
        { id: 'f2', name: 'Magnetic Spice Jars', price: 27.99, category: 'fridge', image: '🧲', description: 'Magnetic spice containers' },
        { id: 'f3', name: 'Egg Storage Container', price: 14.99, category: 'fridge', image: '🥚', description: 'Stackable egg holder' },
    ],
    
    // Living room products
    furniture: [
        { id: 'lf1', name: 'Throw Pillow Set', price: 39.99, category: 'furniture', image: '🛋️', description: 'Decorative accent pillows' },
        { id: 'lf2', name: 'Coffee Table Books', price: 24.99, category: 'furniture', image: '📚', description: 'Stylish coffee table books' },
        { id: 'lf3', name: 'Decorative Vase', price: 45.99, category: 'furniture', image: '🏺', description: 'Modern ceramic vase' },
    ],
    entertainment: [
        { id: 'le1', name: 'TV Remote Organizer', price: 16.99, category: 'entertainment', image: '📺', description: 'Multi-compartment remote caddy' },
        { id: 'le2', name: 'Cable Management Box', price: 28.99, category: 'entertainment', image: '📦', description: 'Hide and organize cables' },
        { id: 'le3', name: 'Sound Bar Stand', price: 54.99, category: 'entertainment', image: '🔊', description: 'Adjustable sound bar mount' },
    ],
    lighting: [
        { id: 'll1', name: 'Table Lamp', price: 67.99, category: 'lighting', image: '💡', description: 'Modern bedside table lamp' },
        { id: 'll2', name: 'Floor Lamp', price: 129.99, category: 'lighting', image: '🕯️', description: 'Adjustable reading floor lamp' },
        { id: 'll3', name: 'String Lights', price: 19.99, category: 'lighting', image: '✨', description: 'Warm LED string lights' },
    ],
    plants: [
        { id: 'lp1', name: 'Planter Set', price: 34.99, category: 'plants', image: '🪴', description: 'Ceramic plant pots with drainage' },
        { id: 'lp2', name: 'Plant Stand', price: 42.99, category: 'plants', image: '🌱', description: 'Wooden tiered plant display' },
        { id: 'lp3', name: 'Watering Can', price: 18.99, category: 'plants', image: '🚿', description: 'Copper finish watering can' },
    ],
    
    // Bedroom products
    bedding: [
        { id: 'bb1', name: 'Sheet Set', price: 79.99, category: 'bedding', image: '🛏️', description: 'Egyptian cotton bed sheets' },
        { id: 'bb2', name: 'Comforter Set', price: 119.99, category: 'bedding', image: '🛌', description: 'Down alternative comforter' },
        { id: 'bb3', name: 'Pillow Set', price: 49.99, category: 'bedding', image: '🪶', description: 'Memory foam pillows' },
    ],
    storage: [
        { id: 'bs1', name: 'Under-Bed Storage', price: 38.99, category: 'storage', image: '📦', description: 'Rolling under-bed boxes' },
        { id: 'bs2', name: 'Closet Organizer', price: 56.99, category: 'storage', image: '👔', description: 'Hanging closet shelves' },
        { id: 'bs3', name: 'Jewelry Box', price: 45.99, category: 'storage', image: '💎', description: 'Wooden jewelry organizer' },
    ],
    nightstand: [
        { id: 'bn1', name: 'Bedside Lamp', price: 34.99, category: 'nightstand', image: '🕯️', description: 'Touch control table lamp' },
        { id: 'bn2', name: 'Charging Station', price: 27.99, category: 'nightstand', image: '🔌', description: 'Multi-device charging dock' },
        { id: 'bn3', name: 'Clock Radio', price: 42.99, category: 'nightstand', image: '⏰', description: 'Digital alarm clock with USB' },
    ],
    dresser: [
        { id: 'bd1', name: 'Drawer Organizers', price: 22.99, category: 'dresser', image: '📦', description: 'Adjustable drawer dividers' },
        { id: 'bd2', name: 'Mirror Tray', price: 18.99, category: 'dresser', image: '🪞', description: 'Decorative vanity tray' },
        { id: 'bd3', name: 'Jewelry Stand', price: 31.99, category: 'dresser', image: '💍', description: 'Tree-style jewelry holder' },
    ],
    
    // Bathroom products
    shower: [
        { id: 'bts1', name: 'Shower Caddy', price: 29.99, category: 'shower', image: '🚿', description: 'Rust-proof shower organizer' },
        { id: 'bts2', name: 'Shower Head', price: 64.99, category: 'shower', image: '💧', description: 'High-pressure rain shower head' },
        { id: 'bts3', name: 'Bath Mat Set', price: 24.99, category: 'shower', image: '🛁', description: 'Non-slip bathroom mats' },
    ],
    vanity: [
        { id: 'btv1', name: 'Makeup Organizer', price: 32.99, category: 'vanity', image: '💄', description: 'Acrylic cosmetics storage' },
        { id: 'btv2', name: 'Vanity Mirror', price: 78.99, category: 'vanity', image: '🪞', description: 'LED lighted makeup mirror' },
        { id: 'btv3', name: 'Soap Dispenser Set', price: 25.99, category: 'vanity', image: '🧴', description: 'Matching bathroom dispensers' },
    ],
    toilet: [
        { id: 'btt1', name: 'Toilet Paper Holder', price: 16.99, category: 'toilet', image: '🧻', description: 'Modern toilet paper stand' },
        { id: 'btt2', name: 'Toilet Brush Set', price: 19.99, category: 'toilet', image: '🧽', description: 'Sleek toilet cleaning set' },
        { id: 'btt3', name: 'Storage Cabinet', price: 89.99, category: 'toilet', image: '🗄️', description: 'Over-toilet storage unit' },
    ],
    towels: [
        { id: 'btw1', name: 'Towel Set', price: 54.99, category: 'towels', image: '🏖️', description: 'Luxury cotton towel collection' },
        { id: 'btw2', name: 'Towel Rack', price: 37.99, category: 'towels', image: '🪝', description: 'Wall-mounted towel bar' },
        { id: 'btw3', name: 'Towel Hooks', price: 14.99, category: 'towels', image: '🪝', description: 'Adhesive bathroom hooks' },
    ],
};

// Shopping cart and wishlist state
let cart = [];
let wishlist = [];
let orderHistory = [];
let currentView = 'home';
let currentRoom = '';
let currentArea = '';
let currentUser = { name: 'Guest User', email: 'guest@roomview.com' };

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    showMessage('Welcome to RoomView! Start by selecting a room to explore.', 'success');
});

// Navigation functions
function enterRoom(roomName) {
    currentRoom = roomName;
    currentView = 'room';
    
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('roomView').style.display = 'block';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('wishlistSection').style.display = 'none';
    
    document.getElementById('roomTitle').textContent = roomName.charAt(0).toUpperCase() + roomName.slice(1);
    
    // Show the appropriate room layout
    showRoomLayout(roomName);
    updateRoomAreas(roomName);
    
    showMessage(`Entered ${roomName} - Click on the numbered hotspots to discover products!`, 'success');
}

function showRoomLayout(roomName) {
    // Hide all room layouts
    document.getElementById('kitchenLayout').style.display = 'none';
    document.getElementById('livingLayout').style.display = 'none';
    document.getElementById('bedroomLayout').style.display = 'none';
    document.getElementById('bathroomLayout').style.display = 'none';
    
    // Show the selected room layout
    const layoutMap = {
        'kitchen': 'kitchenLayout',
        'living': 'livingLayout',
        'bedroom': 'bedroomLayout',
        'bathroom': 'bathroomLayout'
    };
    
    const layoutId = layoutMap[roomName];
    if (layoutId) {
        document.getElementById(layoutId).style.display = 'block';
    }
}

function updateRoomAreas(roomName) {
    const roomAreas = document.querySelector('.room-areas');
    
    const areaConfigs = {
        kitchen: [
            { number: 1, name: 'Cabinet Storage' },
            { number: 2, name: 'Sink Area' },
            { number: 3, name: 'Countertop' },
            { number: 4, name: 'Refrigerator' }
        ],
        living: [
            { number: 1, name: 'Furniture & Decor' },
            { number: 2, name: 'Entertainment Center' },
            { number: 3, name: 'Lighting' },
            { number: 4, name: 'Plants & Greenery' }
        ],
        bedroom: [
            { number: 1, name: 'Bedding' },
            { number: 2, name: 'Storage Solutions' },
            { number: 3, name: 'Nightstand' },
            { number: 4, name: 'Dresser & Vanity' }
        ],
        bathroom: [
            { number: 1, name: 'Shower & Bath' },
            { number: 2, name: 'Vanity & Mirror' },
            { number: 3, name: 'Toilet Area' },
            { number: 4, name: 'Towels & Storage' }
        ]
    };
    
    const areas = areaConfigs[roomName] || areaConfigs.kitchen;
    roomAreas.innerHTML = areas.map(area => `
        <div class="area-item">
            <span class="area-number">${area.number}</span>
            <span class="area-name">${area.name}</span>
        </div>
    `).join('');
}

function backToRooms() {
    currentView = 'home';
    currentRoom = '';
    
    document.getElementById('heroSection').style.display = 'block';
    document.getElementById('roomView').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';
}

function backToRoom() {
    currentView = 'room';
    
    document.getElementById('roomView').style.display = 'block';
    document.getElementById('productsSection').style.display = 'none';
}

function showProducts(area) {
    currentArea = area;
    currentView = 'products';
    
    document.getElementById('roomView').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';
    document.getElementById('wishlistSection').style.display = 'none';
    
    const areaNames = {
        cabinet: 'Cabinet Storage',
        sink: 'Sink Area',
        counter: 'Countertop',
        fridge: 'Refrigerator',
        furniture: 'Furniture & Decor',
        entertainment: 'Entertainment Center',
        lighting: 'Lighting',
        plants: 'Plants & Greenery',
        bedding: 'Bedding',
        storage: 'Storage Solutions',
        nightstand: 'Nightstand',
        dresser: 'Dresser & Vanity',
        shower: 'Shower & Bath',
        vanity: 'Vanity & Mirror',
        toilet: 'Toilet Area',
        towels: 'Towels & Storage'
    };
    
    document.getElementById('productsTitle').textContent = `${areaNames[area] || area} Products`;
    
    renderProducts(area);
    showMessage(`Showing products for ${areaNames[area] || area}`, 'success');
}

// Product rendering
function renderProducts(area) {
    const productsGrid = document.getElementById('productsGrid');
    const products = productData[area] || [];
    
    productsGrid.innerHTML = products.map(product => {
        const inWishlist = isInWishlist(product.id);
        const heartIcon = inWishlist ? 'fas' : 'far';
        const wishlistClass = inWishlist ? 'active' : '';
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">${product.image}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="view-details-btn" onclick="showProductModal(${product.id})">
                        View Details
                    </button>
                    <button class="wishlist-btn ${wishlistClass}" onclick="toggleWishlist(${product.id})">
                        <i class="${heartIcon} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Shopping cart functions
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showMessage(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    renderCartItems();
    showMessage('Item removed from cart', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    updateCartDisplay();
    renderCartItems();
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartTotal = document.getElementById('cartTotal');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        renderCartItems();
    }
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p>Start shopping to add items!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function checkout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const order = {
            id: 'ORD-' + Date.now(),
            date: new Date().toLocaleDateString(),
            items: [...cart],
            total: total,
            status: 'Processing'
        };
        
        orderHistory.unshift(order);
        
        hideLoading();
        showMessage(`Order placed successfully! Order #${order.id} - Total: $${total.toFixed(2)}`, 'success');
        cart = [];
        updateCartDisplay();
        toggleCart();
    }, 2000);
}

// Product modal functions
function showProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    document.getElementById('modalProductImage').src = '';
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = product.price;
    
    // Set the current product for modal actions
    window.currentModalProduct = product;
    
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.add('show');
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('show');
    window.currentModalProduct = null;
}

function addToCartFromModal() {
    if (window.currentModalProduct) {
        addToCart(window.currentModalProduct.id);
        closeModal();
    }
}

// Wishlist functions
function addToWishlist(product) {
    const existingItem = wishlist.find(item => item.id === product.id);
    if (!existingItem) {
        wishlist.push(product);
        updateWishlistDisplay();
        showMessage(`${product.name} added to wishlist!`, 'success');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlistDisplay();
    showMessage('Removed from wishlist', 'success');
}

function toggleWishlist(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const button = event.target.closest('.wishlist-btn');
    const icon = button.querySelector('i');
    
    const isInWishlist = wishlist.some(item => item.id === productId);
    
    if (isInWishlist) {
        removeFromWishlist(productId);
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.classList.remove('active');
    } else {
        addToWishlist(product);
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.classList.add('active');
    }
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function updateWishlistDisplay() {
    // Update wishlist count in navigation
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
    
    // If currently viewing wishlist, refresh the display
    if (currentView === 'wishlist') {
        renderWishlist();
    }
}

function addToWishlistFromModal() {
    if (window.currentModalProduct) {
        const isAlreadyInWishlist = isInWishlist(window.currentModalProduct.id);
        if (!isAlreadyInWishlist) {
            addToWishlist(window.currentModalProduct);
        } else {
            showMessage('Already in wishlist!', 'error');
        }
        closeModal();
    }
}

function showWishlist() {
    currentView = 'wishlist';
    
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('roomView').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('wishlistSection').style.display = 'block';
    
    renderWishlist();
}

function renderWishlist() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    const emptyWishlist = document.getElementById('emptyWishlist');
    
    if (wishlist.length === 0) {
        wishlistGrid.style.display = 'none';
        emptyWishlist.style.display = 'block';
        return;
    }
    
    wishlistGrid.style.display = 'grid';
    emptyWishlist.style.display = 'none';
    
    wishlistGrid.innerHTML = wishlist.map(product => {
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">${product.image}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="view-details-btn" onclick="showProductModal(${product.id})">
                        View Details
                    </button>
                    <button class="wishlist-btn active" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Admin dashboard functions
function toggleAdminView() {
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (adminDashboard.style.display === 'none' || !adminDashboard.style.display) {
        adminDashboard.style.display = 'block';
        showMessage('Admin dashboard opened', 'success');
    } else {
        adminDashboard.style.display = 'none';
        showMessage('Admin dashboard closed', 'success');
    }
}

// Mobile navigation
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
}

// Search functionality
function performSearch() {
    const searchBar = document.getElementById('searchBar');
    const query = searchBar.value.toLowerCase().trim();
    
    if (query.length < 2) {
        showMessage('Please enter at least 2 characters to search', 'error');
        return;
    }
    
    searchProducts(query);
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

function searchProducts(query) {
    const allProducts = Object.values(productData).flat();
    const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
        showSearchResults(results, query);
    } else {
        showMessage(`No products found for "${query}"`, 'error');
    }
}

function showSearchResults(results, query) {
    currentView = 'search';
    
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('roomView').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';
    document.getElementById('wishlistSection').style.display = 'none';
    
    document.getElementById('productsTitle').textContent = `Search Results for "${query}" (${results.length} found)`;
    
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = results.map(product => {
        const inWishlist = isInWishlist(product.id);
        const heartIcon = inWishlist ? 'fas' : 'far';
        const wishlistClass = inWishlist ? 'active' : '';
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">${product.image}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="view-details-btn" onclick="showProductModal('${product.id}')">
                        View Details
                    </button>
                    <button class="wishlist-btn ${wishlistClass}" onclick="toggleWishlist('${product.id}')">
                        <i class="${heartIcon} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    showMessage(`Found ${results.length} products matching "${query}"`, 'success');
}

// Utility functions
function findProductById(id) {
    const allProducts = Object.values(productData).flat();
    return allProducts.find(product => product.id === id || product.id === parseInt(id));
}

function showMessage(text, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    document.body.appendChild(message);
    
    // Trigger animation
    setTimeout(() => message.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('show');
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.remove('show');
}

// Admin form handling
document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.querySelector('.add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const productData = {
                name: formData.get('name') || e.target.querySelector('input[type="text"]').value,
                category: e.target.querySelector('select').value,
                price: parseFloat(e.target.querySelector('input[type="number"]').value),
                stock: parseInt(e.target.querySelectorAll('input[type="number"]')[1].value)
            };
            
            if (productData.name && productData.category && productData.price && productData.stock) {
                showMessage(`Product "${productData.name}" added successfully!`, 'success');
                e.target.reset();
            } else {
                showMessage('Please fill in all fields', 'error');
            }
        });
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes modals and sidebars
    if (e.key === 'Escape') {
        closeModal();
        
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
        
        const adminDashboard = document.getElementById('adminDashboard');
        if (adminDashboard.style.display === 'block') {
            toggleAdminView();
        }
    }
});

// Touch/click outside to close
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartBtn = document.querySelector('.cart-btn');
    
    if (cartSidebar.classList.contains('open') && 
        !cartSidebar.contains(e.target) && 
        !cartBtn.contains(e.target)) {
        toggleCart();
    }
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Performance optimization - lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Analytics tracking (mock)
function trackEvent(eventName, data = {}) {
    console.log(`Analytics Event: ${eventName}`, data);
    // In a real app, this would send data to analytics service
}

// Track user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.room-card')) {
        trackEvent('room_selected', { room: e.target.querySelector('h3').textContent });
    }
    
    if (e.target.matches('.hotspot')) {
        trackEvent('hotspot_clicked', { area: e.target.dataset.tooltip });
    }
    
    if (e.target.matches('.add-to-cart-btn')) {
        trackEvent('add_to_cart', { product: e.target.closest('.product-card')?.querySelector('.product-name')?.textContent });
    }
});

// Categories functionality
function showCategories() {
    const categories = [
        { name: 'Kitchen', icon: 'fa-utensils', room: 'kitchen' },
        { name: 'Living Room', icon: 'fa-couch', room: 'living' },
        { name: 'Bedroom', icon: 'fa-bed', room: 'bedroom' },
        { name: 'Bathroom', icon: 'fa-bath', room: 'bathroom' }
    ];
    
    showMessage('Browse by category - Select a room to explore!', 'success');
    backToRooms();
}

// Order History functionality
function showOrderHistory() {
    currentView = 'orders';
    
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('roomView').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('wishlistSection').style.display = 'none';
    
    // Create order history section if it doesn't exist
    let orderSection = document.getElementById('orderHistorySection');
    if (!orderSection) {
        orderSection = document.createElement('section');
        orderSection.id = 'orderHistorySection';
        orderSection.className = 'wishlist-section';
        orderSection.innerHTML = `
            <div class="wishlist-header">
                <button class="back-btn" onclick="backToRooms()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Rooms
                </button>
                <h2>Order History</h2>
            </div>
            <div class="wishlist-content">
                <div id="orderHistoryGrid" class="wishlist-grid"></div>
                <div id="emptyOrders" class="empty-wishlist" style="display: none;">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>No orders yet</h3>
                    <p>Start shopping and your orders will appear here!</p>
                    <button class="back-btn" onclick="backToRooms()">Explore Rooms</button>
                </div>
            </div>
        `;
        document.querySelector('.main-content').appendChild(orderSection);
    }
    
    orderSection.style.display = 'block';
    renderOrderHistory();
}

function renderOrderHistory() {
    const orderGrid = document.getElementById('orderHistoryGrid');
    const emptyOrders = document.getElementById('emptyOrders');
    
    if (orderHistory.length === 0) {
        orderGrid.style.display = 'none';
        emptyOrders.style.display = 'block';
        return;
    }
    
    orderGrid.style.display = 'grid';
    emptyOrders.style.display = 'none';
    
    orderGrid.innerHTML = orderHistory.map(order => `
        <div class="product-card" style="border: 2px solid #667eea;">
            <div class="product-name" style="font-size: 1.2rem; margin-bottom: 1rem;">
                Order #${order.id.slice(-8)}
            </div>
            <div style="color: #666; margin-bottom: 0.5rem;">
                <i class="fas fa-calendar"></i> ${order.date}
            </div>
            <div style="color: #666; margin-bottom: 0.5rem;">
                <i class="fas fa-box"></i> ${order.items.length} item(s)
            </div>
            <div class="product-price" style="margin: 1rem 0;">
                $${order.total.toFixed(2)}
            </div>
            <div style="padding: 0.5rem 1rem; background: #e8f5e9; color: #2e7d32; border-radius: 20px; text-align: center; font-weight: 600;">
                ${order.status}
            </div>
            <div style="margin-top: 1rem;">
                <button class="view-details-btn" onclick="viewOrderDetails('${order.id}')" style="width: 100%;">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

function viewOrderDetails(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;
    
    const itemsList = order.items.map(item => 
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    showMessage(`Order Details:\n${itemsList}\nTotal: $${order.total.toFixed(2)}`, 'success');
}

// User Profile functionality
function showUserProfile() {
    const profileInfo = `
        👤 ${currentUser.name}
        📧 ${currentUser.email}
        🛒 ${cart.length} items in cart
        ❤️ ${wishlist.length} items in wishlist
        📦 ${orderHistory.length} orders placed
    `;
    
    showMessage(profileInfo, 'success');
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
