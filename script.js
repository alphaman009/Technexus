// --- 1. DATA (50 Products with Ratings) ---
const products = [
    // ... (Your 50 products are unchanged) ...
    // --- Audio (10 items) ---
    { id: 'p1', name: 'Quantum Earbuds X', price: 14999, image: 'Photos/Airbuts.jpg', category: 'audio', isNew: true, rating: 4.5, reviewCount: 150 },
    { id: 'p2', name: 'BassSphere Speaker', price: 5999, image: 'Photos/Wireless Speakers.jpg', category: 'audio', isNew: false, rating: 4.2, reviewCount: 88 },
    { id: 'p3', name: 'Studio Headset Pro', price: 24990, image: 'Photos/Headset.jpg', category: 'audio', isNew: true, rating: 4.8, reviewCount: 210 },
    { id: 'p4', name: 'Retro Bluetooth Speaker', price: 3499, image: 'Photos/Bluetooth speaker.jpg', category: 'audio', isNew: false, rating: 4.0, reviewCount: 45 },
    { id: 'p5', name: 'Aqua-Proof Earbuds', price: 6990, image: 'Photos/Aqua proof airbuds.jpg', category: 'audio', isNew: false, rating: 3.9, reviewCount: 65 },
    { id: 'p6', name: 'Zenith Noise-Cancelling', price: 29990, image: 'Photos/Noice cancelation.jpg', category: 'audio', isNew: true, rating: 4.7, reviewCount: 302 },
    { id: 'p7', name: 'Compact Soundbar', price: 18990, image: 'Photos/Soundbar.jpg', category: 'audio', isNew: false, rating: 4.3, reviewCount: 120 },
    { id: 'p8', name: 'Pocket Pods Mini', price: 4990, image: 'Photos/Pocket pods.jpg', category: 'audio', isNew: false, rating: 4.1, reviewCount: 95 },
    { id: 'p9', name: 'Gaming Headset X-1', price: 8990, image: 'Photos/Gaming headset.jpg', category: 'audio', isNew: false, rating: 4.4, reviewCount: 180 },
    { id: 'p10', name: 'Hi-Fi Vinyl Player', price: 34990, image: 'Photos/Hi-Fi player.jpg', category: 'audio', isNew: false, rating: 4.6, reviewCount: 55 },
    // --- Wearables (10 items) ---
    { id: 'p11', name: 'Chrono Smartwatch 4', price: 21990, image: 'Photos/chronon smartwatch.jpg', category: 'wearables', isNew: false, rating: 4.5, reviewCount: 450 },
    { id: 'p12', name: 'Stellar VR Headset', price: 49999, image: 'Photos/VR headset.jpg', category: 'wearables', isNew: true, rating: 4.7, reviewCount: 190 },
    { id: 'p13', name: 'Fitness Band Ultra', price: 3999, image: 'Photos/Fitnessband.jpg', category: 'wearables', isNew: false, rating: 4.2, reviewCount: 1200 },
    { id: 'p14', name: 'Haptic Feedback Gloves', price: 12990, image: 'Photos/Feedback gloves.jpg', category: 'wearables', isNew: true, rating: 4.0, reviewCount: 30 },
    { id: 'p15', name: 'Solar Powered Watch', price: 11000, image: 'Photos/Solar powered watch.jpg', category: 'wearables', isNew: false, rating: 4.3, reviewCount: 75 },
    { id: 'p16', name: 'Smart Glasses Pro', price: 54990, image: 'Photos/Smartglass.jpg', category: 'wearables', isNew: true, rating: 4.1, reviewCount: 42 },
    { id: 'p17', name: 'Heart Rate Monitor', price: 2990, image: 'Photos/Heartrate montor.jpg', category: 'wearables', isNew: false, rating: 4.0, reviewCount: 550 },
    { id: 'p18', name: 'Kids GPS Watch', price: 4990, image: 'Photos/Kids gps watch.jpg', category: 'wearables', isNew: false, rating: 3.8, reviewCount: 230 },
    { id: 'p19', name: 'Aura Smart Ring', price: 22990, image: 'Photos/Smart ring.jpg', category: 'wearables', isNew: true, rating: 4.6, reviewCount: 110 },
    { id: 'p20', name: 'Titanium Smartwatch 5', price: 32990, image: 'Photos/Titenium.jpg', category: 'wearables', isNew: false, rating: 4.8, reviewCount: 310 },
    // --- Drones (10 items) ---
    { id: 'p21', name: 'Aether Drone Mini', price: 39999, image: 'Photos/Drone.jpg', category: 'drones', isNew: true, rating: 4.6, reviewCount: 90 },
    { id: 'p22', name: 'Explorer Drone 360', price: 74990, image: 'Photos/Drone 2.jpg', category: 'drones', isNew: false, rating: 4.7, reviewCount: 65 },
    { id: 'p23', name: 'Pocket Quadcopter', price: 4990, image: 'Photos/pocket quadcoper.jpg', category: 'drones', isNew: false, rating: 3.7, reviewCount: 220 },
    { id: 'p24', name: 'Pro Cinema Drone', price: 149990, image: 'Photos/Drone 3.jpg', category: 'drones', isNew: true, rating: 4.9, reviewCount: 35 },
    { id: 'p25', name: 'FPV Racing Drone', price: 28990, image: 'Photos/Drone 4.jpg', category: 'drones', isNew: false, rating: 4.5, reviewCount: 130 },
    { id: 'p26', name: 'Stealth Bomber Drone', price: 89990, image: 'Photos/Drone 5.jpg', category: 'drones', isNew: false, rating: 4.3, reviewCount: 22 },
    { id: 'p27', name: 'Underwater Drone', price: 64990, image: 'Photos/Drone 6.jpg', category: 'drones', isNew: false, rating: 4.1, reviewCount: 18 },
    { id: 'p28', name: 'Toy Drone for Kids', price: 2990, image: 'Photos/Drone 7.jpg', category: 'drones', isNew: false, rating: 3.5, reviewCount: 350 },
    { id: 'p29', name: 'Agricultural Spray Drone', price: 120000, image: 'Photos/Drone 8.jpg', category: 'drones', isNew: false, rating: 4.8, reviewCount: 12 },
    { id: 'p30', name: 'Folding Travel Drone', price: 44990, image: 'Photos/Drone 9.jpg', category: 'drones', isNew: true, rating: 4.6, reviewCount: 160 },
    // --- Peripherals (10 items) ---
    { id: 'p31', name: 'Nova Keyboard Pro', price: 9990, image: 'Photos/Nova keyboard.jpg', category: 'peripherals', isNew: false, rating: 4.7, reviewCount: 400 },
    { id: 'p32', name: 'Ergo Mouse Elite', price: 4490, image: 'Photos/Ergo mouse.jpg', category: 'peripherals', isNew: true, rating: 4.6, reviewCount: 310 },
    { id: 'p33', name: '4K Webcam Stream', price: 6990, image: 'Photos/4k webcam.jpg', category: 'peripherals', isNew: false, rating: 4.4, reviewCount: 280 },
    { id: 'p34', name: 'Precision Gaming Pad', price: 2990, image: 'Photos/precision gaming pad.jpg', category: 'peripherals', isNew: false, rating: 4.2, reviewCount: 600 },
    { id: 'p35', name: 'Condenser Mic Pro', price: 11990, image: 'Photos/Condencer mic.jpg', category: 'peripherals', isNew: true, rating: 4.8, reviewCount: 350 },
    { id: 'p36', name: 'Mechanical Keyboard TKL', price: 18990, image: 'Photos/mechanical keyboad.jpg', category: 'peripherals', isNew: false, rating: 4.9, reviewCount: 550 },
    { id: 'p37', name: 'Vertical Ergonomic Mouse', price: 3990, image: 'Photos/vertical mouse.jpg', category: 'peripherals', isNew: false, rating: 4.3, reviewCount: 190 },
    { id: 'p38', name: 'Ultrawide Monitor 34"', price: 42990, image: 'Photos/Ultra wide montior.jpg', category: 'peripherals', isNew: false, rating: 4.7, reviewCount: 220 },
    { id: 'p39', name: 'Stream Deck Mini', price: 8990, image: 'Photos/Stream deck mini.jpg', category: 'peripherals', isNew: false, rating: 4.8, reviewCount: 410 },
    { id: 'p40', name: 'Portable SSD 1TB', price: 7990, image: 'Photos/Portable SSD.jpg', category: 'peripherals', isNew: false, rating: 4.9, reviewCount: 1100 },
    // --- Smart Home (10 items) ---
    { id: 'p41', name: 'Nebula Smart Bulb', price: 1990, image: 'Photos/Nebula smart bulb.jpg', category: 'smart_home', isNew: true, rating: 4.5, reviewCount: 2200 },
    { id: 'p42', name: 'Guardian Doorbell Cam', price: 15990, image: 'Photos/Gurdian door bell.jpg', category: 'smart_home', isNew: false, rating: 4.4, reviewCount: 850 },
    { id: 'p43', name: 'Ambient Air Sensor', price: 7990, image: 'Photos/Ambient.jpg', category: 'smart_home', isNew: false, rating: 4.1, reviewCount: 300 },
    { id: 'p44', name: 'Smart Lock Pro', price: 22990, image: 'Photos/Smart lock.jpg', category: 'smart_home', isNew: true, rating: 4.7, reviewCount: 650 },
    { id: 'p45', name: 'Robotic Vacuum X1', price: 34990, image: 'Photos/Robotic vaccume.jpg', category: 'smart_home', isNew: false, rating: 4.6, reviewCount: 910 },
    { id: 'p46', name: 'Smart Plug Mini (4-pack)', price: 2990, image: 'Photos/Smart plug.jpg', category: 'smart_home', isNew: false, rating: 4.8, reviewCount: 3500 },
    { id: 'p47', name: 'Home Hub Display', price: 12990, image: 'Photos/Homehub display.jpg', category: 'smart_home', isNew: false, rating: 4.5, reviewCount: 1300 },
    { id: 'p48', name: 'Smart Thermostat', price: 9990, image: 'Photos/Smart thermostart.jpg', category: 'smart_home', isNew: false, rating: 4.3, reviewCount: 770 },
    { id: 'p49', name: 'Security Cam 2-Pack', price: 19990, image: 'Photos/security camera.jpg', category: 'smart_home', isNew: false, rating: 4.2, reviewCount: 560 },
    { id: 'p50', name: 'RGB Light Strip (5m)', price: 3490, image: 'Photos/RGB light.jpg', category: 'smart_home', isNew: true, rating: 4.6, reviewCount: 1800 },
];
const heroSlides = [
    { title: 'New: Samsung F06 5G', text: '', bgImage: 'Photos/Tranding-phone.webp', link: '#products' },
    { title: 'Upcoming: Oppo Find X9 series', text: '', bgImage: 'Photos/Tranding-phone2.webp', link: '#products' },
    { title: 'Moto G96', text: '', bgImage: 'Photos/Tranding-photo3.webp', link: '#products' },
];

// --- 2. STATE MANAGEMENT & DOM ELEMENTS ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = 'all'; 

const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const modalOverlay = document.getElementById('modal-overlay');
const wishlistModal = document.getElementById('wishlist-modal');
const cartModal = document.getElementById('cart-modal');
const cartList = document.getElementById('cart-items');
const wishlistList = document.getElementById('wishlist-items');
const cartTotalSpan = document.getElementById('cart-total');
const closeButtons = document.querySelectorAll('.close-modal-btn');
const categoryItems = document.querySelectorAll('.category-item'); 
const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]'); // For smooth scroll

const sliderContainer = document.getElementById('slider-container');
let currentSlideIndex = 0;

const searchInput = document.getElementById('search-input');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');

// Login DOM Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const userGreeting = document.getElementById('user-greeting');

// Theme Toggle DOM Element
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Chatbot DOM Elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatPopup = document.getElementById('chat-popup');
const chatCloseBtn = document.getElementById('chat-close-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');

// Voice Search DOM Element
const voiceSearchBtn = document.getElementById('voice-search-btn');

// NEW: Particle Canvas DOM Elements
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];


// --- 3. CORE FUNCTIONS (Product, Cart, Wishlist, Modals) ---

function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    for (let i = 0; i < fullStars; i++) { starsHTML += '<i class="fas fa-star"></i>'; }
    if (halfStar) { starsHTML += '<i class="fas fa-star-half-alt"></i>'; }
    for (let i = 0; i < emptyStars; i++) { starsHTML += '<i class="far fa-star"></i>'; }
    return starsHTML;
}

/**
 * UPDATED: renderProducts now includes Buy Now button
 */
function renderProducts() {
    productGrid.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();
    const maxPrice = parseFloat(priceRange.value);
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">No gadgets match your filters.</p>';
        return;
    }
    filteredProducts.forEach(product => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        
        // NEW: Added buy-now-btn
        const cardHTML = `
            <div class="product-card" data-id="${product.id}">
                <div class="card-image">
                    <img src="${product.image}" alt="${product.name}"> 
                    ${product.isNew ? '<span class="badge new">NEW</span>' : ''}
                </div>
                <div class="card-content">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${generateStars(product.rating)}</span>
                        <strong>${product.rating}</strong>
                        <span class="review-count">(${product.reviewCount.toLocaleString('en-IN')})</span>
                    </div>
                    <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                    <div class="card-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                        <button class="buy-now-btn" data-id="${product.id}">Buy Now</button>
                        <button class="add-to-wishlist-btn" data-id="${product.id}">
                            <i class="${isWishlisted ? 'fas fa-heart' : 'far fa-heart'}"></i>
                            ${isWishlisted ? ' Wishlisted' : ' Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
    attachProductListeners();
}

function updateCounts() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    wishlistCount.textContent = wishlist.length;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function triggerShake(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function addToCart(id) {
    const product = getProductById(id);
    if (!product) return;
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCounts();
    renderCart();
    triggerShake('cart-btn');
}

function toggleWishlist(id) {
    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        const product = getProductById(id);
        wishlist.push(product);
    }
    renderProducts(); 
    updateCounts();
    renderWishlist();
    triggerShake('wishlist-btn');
}

// ... (renderCart and renderWishlist are unchanged) ...
function renderCart() {
    cartList.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
        cartTotalSpan.textContent = '₹0.00';
        return;
    }
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        const itemHTML = `
            <div class="modal-item" data-id="${item.id}">
                <div class="item-info">
                    <strong>${item.name}</strong>
                    <p>Qty: ${item.quantity} | Price: ₹${item.price.toLocaleString('en-IN')}</p>
                </div>
                <span class="item-price">₹${subtotal.toLocaleString('en-IN')}</span>
                <button class="remove-btn" data-id="${item.id}" data-type="cart"><i class="fas fa-times-circle"></i></button>
            </div>
        `;
        cartList.insertAdjacentHTML('beforeend', itemHTML);
    });
    cartTotalSpan.textContent = `₹${total.toLocaleString('en-IN')}`;
}
function renderWishlist() {
    wishlistList.innerHTML = '';
    if (wishlist.length === 0) {
        wishlistList.innerHTML = '<p class="empty-message">Your wishlist is empty.</p>';
        return;
    }
    wishlist.forEach(item => {
        const itemHTML = `
            <div class="modal-item" data-id="${item.id}">
                <div class="item-info">
                    <strong>${item.name}</strong>
                </div>
                <span class="item-price">₹${item.price.toLocaleString('en-IN')}</span>
                <button class="add-to-cart-from-wishlist-btn" data-id="${item.id}">Add to Cart</button>
                <button class="remove-btn" data-id="${item.id}" data-type="wishlist"><i class="fas fa-times-circle"></i></button>
            </div>
        `;
        wishlistList.insertAdjacentHTML('beforeend', itemHTML);
    });
}

function showModal(modalElement) {
    wishlistModal.style.display = 'none';
    cartModal.style.display = 'none';
    loginModal.style.display = 'none';
    modalElement.style.display = 'block';
    modalOverlay.classList.add('active');
    if (modalElement === cartModal) { renderCart(); } 
    else if (modalElement === wishlistModal) { renderWishlist(); }
}

function hideModals() {
    modalOverlay.classList.remove('active');
}


// --- 4. NEW & UPDATED FEATURES ---

// Hero Slider
function renderSlider() {
    sliderContainer.innerHTML = '';
    heroSlides.forEach((slide) => {
        const slideHTML = `<div class="hero-slide" style="background-image: url('${slide.bgImage}');"><div class="slide-content"><h1>${slide.title}</h1><p>${slide.text}</p><a href="${slide.link}" class="shop-now-btn">Shop Now <i class="fas fa-arrow-right"></i></a></div></div>`;
        sliderContainer.insertAdjacentHTML('beforeend', slideHTML);
    });
}
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
    updateSliderTransform();
}
function updateSliderTransform() {
    const offset = -currentSlideIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}
function startSlider() {
    setInterval(nextSlide, 5000); 
}

// Category Filtering
function filterProductsByCategory(category) {
    currentCategory = category;
    categoryItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`.category-item[data-category="${category}"]`).classList.add('active');
    renderProducts();
}

// Login System
function updateLoginState() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        document.body.classList.add('logged-in');
        const userEmail = localStorage.getItem('userEmail');
        userGreeting.textContent = `Hi, ${userEmail.split('@')[0]}`;
    } else {
        document.body.classList.remove('logged-in');
        userGreeting.textContent = '';
    }
}
function handleLogin(e) {
    e.preventDefault();
    const email = loginForm.querySelector('#email').value;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    updateLoginState();
    hideModals();
    loginForm.reset();
}
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    updateLoginState();
}

// Theme Toggle
function loadTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
    // Update particle colors on load
    setupParticles();
}
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
        localStorage.removeItem('theme');
    }
    // Re-initialize particles with new colors
    setupParticles();
}

// Chatbot
function toggleChatbot() {
    chatPopup.classList.toggle('active');
}
function addChatMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function getBotResponse(userInput) {
    let botMessage = "Sorry, I can only provide info on 'news', 'tips', or 'trends'. Try one of those!";
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botMessage = "Hi there! How can I help you with tech news or tips?";
    } else if (lowerInput.includes('news')) {
        botMessage = "Latest tech news: AI is rapidly advancing, and new quantum computing breakthroughs are being reported!";
    } else if (lowerInput.includes('tips') || lowerInput.includes('tip')) {
        botMessage = "Tech Tip: Always back up your important files! Use a cloud service or an external hard drive.";
    } else if (lowerInput.includes('trends') || lowerInput.includes('trend')) {
        botMessage = "Current tech trends include hyper-automation, generative AI, and sustainable tech.";
    }
    setTimeout(() => { addChatMessage(botMessage, 'bot'); }, 500);
}
function handleChatSend() {
    const userMessage = chatInput.value.trim();
    if (userMessage === "") return;
    addChatMessage(userMessage, 'user');
    chatInput.value = "";
    getBotResponse(userMessage);
}

// Voice Search
function setupVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        voiceSearchBtn.style.display = 'none';
        console.warn("Speech Recognition API not supported in this browser.");
        return; 
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    voiceSearchBtn.onclick = () => {
        try {
            recognition.start();
            voiceSearchBtn.classList.add('recording');
        } catch(err) {
            console.error("Voice recognition already started.", err);
        }
    };
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        renderProducts();
    };
    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert(`Error: ${event.error}. Your browser might be blocking the microphone.`);
    };
    recognition.onend = () => {
        voiceSearchBtn.classList.remove('recording');
    };
}

// NEW: Particle Background Logic
class Particle {
    constructor(color) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = color;
    }
    update() {
        if (this.x < 0 || this.x > canvas.width) { this.speedX *= -1; }
        if (this.y < 0 || this.y > canvas.height) { this.speedY *= -1; }
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function getParticleColor() {
    // Read the color directly from the CSS variable
    return getComputedStyle(document.body).getPropertyValue('--particle-color');
}

function setupParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    const particleColor = getParticleColor();
    const numberOfParticles = Math.floor(canvas.width / 15); // Responsive particle count
    
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(particleColor));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

// Handle window resize for particles
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setupParticles();
});


// --- 5. EVENT LISTENERS & INITIALIZATION ---

function attachProductListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.onclick = (e) => addToCart(e.currentTarget.dataset.id);
    });
    
    // NEW: Buy Now Listener
    document.querySelectorAll('.buy-now-btn').forEach(button => {
        button.onclick = (e) => {
            const id = e.currentTarget.dataset.id;
            addToCart(id); // First, add to cart
            showModal(cartModal); // Then, immediately show cart
        };
    });

    document.querySelectorAll('.add-to-wishlist-btn').forEach(button => {
        button.onclick = (e) => toggleWishlist(e.currentTarget.dataset.id);
    });
}

function attachGlobalListeners() {
    // Modal buttons
    document.getElementById('cart-btn').onclick = () => showModal(cartModal);
    document.getElementById('wishlist-btn').onclick = () => showModal(wishlistModal);
    closeButtons.forEach(btn => { btn.onclick = hideModals; });
    modalOverlay.onclick = (e) => {
        if (e.target.classList.contains('modal-overlay')) { hideModals(); }
    };

    // Login/Logout Listeners
    loginBtn.onclick = () => showModal(loginModal);
    logoutBtn.onclick = handleLogout;
    loginForm.onsubmit = handleLogin;
    
    // Theme Toggle Listener
    themeToggleBtn.onclick = toggleTheme;

    // NEW: Smooth Scroll Navbar
    navbarLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Category Buttons
    categoryItems.forEach(item => {
        item.onclick = (e) => {
            e.preventDefault(); 
            filterProductsByCategory(e.currentTarget.dataset.category);
        };
    });

    // Filter Event Listeners
    searchInput.oninput = renderProducts; 
    priceRange.oninput = () => {
        priceValue.textContent = parseInt(priceRange.value).toLocaleString('en-IN');
        renderProducts();
    };

    // Modal action delegation
    modalOverlay.addEventListener('click', (e) => {
        const target = e.target.closest('.remove-btn, .add-to-cart-from-wishlist-btn');
        if (!target) return;
        const id = target.dataset.id;
        if (target.classList.contains('remove-btn')) {
            const type = target.dataset.type;
            if (type === 'cart') {
                cart = cart.filter(item => item.id !== id);
                renderCart();
            } else if (type === 'wishlist') {
                toggleWishlist(id);
            }
            updateCounts();
        } else if (target.classList.contains('add-to-cart-from-wishlist-btn')) {
            addToCart(id);
            toggleWishlist(id);
        }
    });

    // Checkout
    document.querySelector('.checkout-btn').onclick = () => {
        if (cart.length > 0) {
            alert('Checkout successful! Thanks for shopping.');
            cart = [];
            hideModals();
            updateCounts();
        } else {
            alert('Your cart is empty. Add some gadgets first!');
        }
    };
    
    // Chatbot Listeners
    chatbotToggle.onclick = toggleChatbot;
    chatCloseBtn.onclick = toggleChatbot;
    chatSendBtn.onclick = handleChatSend;
    chatInput.onkeypress = (e) => {
        if (e.key === 'Enter') { handleChatSend(); }
    };
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const maxPrice = Math.max(...products.map(p => p.price));
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = maxPrice.toLocaleString('en-IN');

    loadTheme(); // Load theme first
    // Particle setup is now called inside loadTheme()
    
    renderSlider(); 
    startSlider(); 
    renderProducts(); 
    updateCounts();
    attachGlobalListeners();
    updateLoginState(); 
    setupVoiceSearch();
    
    // Start particle animation
    animateParticles();
});