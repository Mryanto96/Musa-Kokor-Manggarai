document.addEventListener("DOMContentLoaded", () => {
    // --- STATE & DATA ---
    const products = [
        {
            id: 1,
            name: "Minyak Kelapa Murni",
            price: 65000,
            discountedPrice: 50000,
            category: "Obat Cair",
            image: "images/img1.jpg",
            description: "Mengatasi sariawan dan panas dalam secara alami dan cepat.",
            details: {
                komposisi: "Ekstrak daun sirih, air kelapa muda, madu murni.",
                manfaat: "Meredakan nyeri, mempercepat penyembuhan sariawan, dan menjaga kesehatan mulut.",
                caraPakai: "Teteskan 3-5 tetes pada area sariawan 3 kali sehari.",
            },
        },
        {
            id: 2,
            name: "Minyak Kelapa Goreng",
            price: 50000,
            discountedPrice: 35000,
            category: "Obat Kapsul",
           image: "images/img2.jpg",
            description: "Meredakan gejala flu, batuk, dan melegakan pernapasan.",
            details: {
                komposisi: "Ekstrak jahe, kunyit, daun mint, sambiloto.",
                manfaat: "Melegakan pernapasan, meredakan batuk, mengurangi demam, dan meningkatkan daya tahan tubuh.",
                caraPakai: "Minum 1-2 kapsul, 3 kali sehari setelah makan.",
            },
        },
        {
            id: 3,
            name: "Madu",
            price: 12500,
            discountedPrice: 110000,
            category: "Obat Kapsul",
            image: "images/img3.jpg",
            description: "Solusi alami untuk masalah asam lambung dan perut kembung.",
            details: {
                komposisi: "Ekstrak temulawak, kunyit, dan lidah buaya.",
                manfaat: "Mengurangi produksi asam lambung berlebih, meredakan perih, dan mengatasi kembung.",
                caraPakai: "Minum 1 kapsul 30 menit sebelum makan, 2 kali sehari.",
            },
        },
        {
            id: 4,
            name: "Minyak Raja Gunung",
            price: 85000,
            discountedPrice: 60000,
            category: "Obat Kulit",
            image: "images/img4.jpg",
            description: "Salep herbal untuk meredakan gatal-gatal, ruam, dan iritasi kulit.",
            details: {
                komposisi: "Ekstrak daun beluntas, minyak kelapa murni.",
                manfaat: "Mengurangi rasa gatal, ruam kulit, gigitan serangga, dan menenangkan kulit iritasi.",
                caraPakai: "Oleskan tipis pada area kulit yang gatal 2-3 kali sehari.",
            },
        },
        {
            id: 5,
            name: "Minyak Urut Pegal Linu",
            price: 55000,
            discountedPrice: 50000,
            category: "Obat Cair",
           image: "images/img7.jpg",
            description: "Minyak oles untuk meredakan pegal linu dan nyeri otot.",
            details: {
                komposisi: "Ekstrak jahe merah, cengkeh, sereh, dan minyak esensial.",
                manfaat: "Memberikan sensasi hangat, merelaksasi otot kaku, dan mengurangi nyeri sendi.",
                caraPakai: "Oleskan dan pijat perlahan pada bagian yang pegal.",
            },
        },
        {
            id: 6,
            name: "Kapsul Sakit Kepala",
            price: 40000,
            discountedPrice: 35000,
            category: "Obat Kapsul",
            image: "img/6.jpg",
            description: "Mengobati sakit kepala dan migrain ringan tanpa efek samping.",
            details: {
                komposisi: "Ekstrak daun kemangi dan akar valerian.",
                manfaat: "Meredakan sakit kepala tegang, menenangkan pikiran, dan meredakan stres.",
                caraPakai: "Minum 1 kapsul saat terasa sakit kepala.",
            },
        },
        {
            id: 7,
            name: "Kapsul Nyeri Haid",
            price: 60000,
            discountedPrice: 55000,
            category: "Obat Kapsul",
            image: "img/7.jpg",
            description: "Membantu meredakan nyeri dan kram perut saat menstruasi.",
            details: {
                komposisi: "Ekstrak kunyit, asam jawa, dan herbal kewanitaan.",
                manfaat: "Mengurangi nyeri haid, kram perut, dan melancarkan siklus menstruasi.",
                caraPakai: "Minum 1-2 kapsul, 3 hari sebelum dan selama haid.",
            },
        },
        {
            id: 8,
            name: "Minyak Angin Aromaterapi",
            price: 35000,
            discountedPrice: 32000,
            category: "Obat Cair",
            image: "img/8.jpg",
            description: "Menghangatkan tubuh, mengatasi masuk angin, dan melegakan hidung.",
            details: {
                komposisi: "Minyak kayu putih, peppermint, dan cengkeh.",
                manfaat: "Mengatasi mual, pusing, dan kembung akibat masuk angin. Memberikan sensasi hangat.",
                caraPakai: "Oleskan pada perut, leher, atau hirup aromanya.",
            },
        },
    ];

    // Data pembeli dari berbagai kecamatan di Manggarai
    const recentBuyers = [
        { name: "Andi", location: "Kec. Langke Rembong, Manggarai Timur" },
        { name: "Budi", location: "Kec. Komodo, Manggarai Barat" },
        { name: "Citra", location: "Kec. Ruteng, Manggarai" },
        { name: "Dewi", location: "Kec. Borong, Manggarai Timur" },
        { name: "Eka", location: "Kec. Elar, Manggarai Timur" },
        { name: "Feri", location: "Kec. Lamba Leda, Manggarai Timur" },
        { name: "Gita", location: "Kec. Sambi Rampas, Manggarai Timur" },
        { name: "Hadi", location: "Kec. Wae Rii, Manggarai" },
        { name: "Iwan", location: "Kec. Reok, Manggarai Barat" },
        { name: "Johan", location: "Kec. Satar Mese, Manggarai" },
        { name: "Kiki", location: "Kec. Cibal, Manggarai" },
        { name: "Lina", location: "Kec. Welak, Manggarai Barat" },
        { name: "Mario", location: "Kec. Rahong Utara, Manggarai" },
        { name: "Nina", location: "Kec. Poco Ranaka, Manggarai Timur" },
        { name: "Oscar", location: "Kec. Lelak, Manggarai" },
    ];

    const buyerColors = [
        "#f43f5e", "#ec4899", "#a855f7", "#6366f1", "#3b82f6",
        "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#84cc16",
        "#f97316", "#64748b", "#14b8a6", "#a855f7", "#06b6d4"
    ];

    let cart = [];
    let notificationInterval;

    // --- DOM SELECTORS ---
    const productGrid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cartBtnNav = document.getElementById("cart-btn-nav");
    const cartCountNav = document.getElementById("cart-count-nav");
    const checkoutModal = document.getElementById("checkout-modal");
    const productDetailModal = document.getElementById("product-detail-modal");
    const noProductsModal = document.getElementById("no-products-modal");
    const cardTemplate = document.getElementById("product-card-template");

    // --- FUNCTIONS ---
    const formatCurrency = (amount) => `Rp ${amount.toLocaleString("id-ID")}`;

    const renderProducts = (productsToRender) => {
        productGrid.innerHTML = "";
        if (productsToRender.length === 0) {
            toggleModal(noProductsModal, true);
            return;
        }
        productsToRender.forEach((product) => {
            const card = cardTemplate.content.cloneNode(true);
            card.querySelector(".product-card").dataset.id = product.id;
            card.querySelector(".product-image").src = product.image;
            card.querySelector(".product-image").alt = product.name;
            card.querySelector(".product-name").textContent = product.name;
            card.querySelector(".product-description").textContent = product.description;
            card.querySelector(".product-original-price").textContent = formatCurrency(product.price);
            card.querySelector(".product-discounted-price").textContent = formatCurrency(product.discountedPrice);
            card.querySelector(".view-detail-btn").dataset.id = product.id;
            productGrid.appendChild(card);
        });
    };

    const filterAndSearch = () => {
        const query = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
        const filtered = products.filter(
            (p) =>
                (p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query)) &&
                (activeFilter === "all" || p.category === activeFilter)
        );
        renderProducts(filtered);
    };

    const toggleModal = (modal, show) => {
        if (show) {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            document.body.style.overflow = 'hidden';
            setTimeout(() => modal.classList.add("is-open"), 10);
        } else {
            modal.classList.remove("is-open");
            setTimeout(() => {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
                document.body.style.overflow = 'auto';
            }, 300);
        }
    };

    const updateCartUI = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountNav.textContent = totalItems;
        cartCountNav.classList.toggle("hidden", totalItems === 0);
        renderCartModal();
    };

    const addToCart = (productId) => {
        const product = products.find((p) => p.id === productId);
        const itemInCart = cart.find((item) => item.id === productId);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1,
                price: product.discountedPrice,
            });
        }
        updateCartUI();
        
        // Show notification
        const Toast = {
            init() {
                this.hideTimeout = null;
                
                this.el = document.createElement('div');
                this.el.className = 'cart-toast';
                this.el.style.cssText = `
                    position: fixed;
                    bottom: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--primary);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 500;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s;
                `;
                document.body.appendChild(this.el);
            },
            show(message) {
                clearTimeout(this.hideTimeout);
                this.el.textContent = message;
                this.el.style.opacity = '1';
                
                this.hideTimeout = setTimeout(() => {
                    this.el.style.opacity = '0';
                }, 2000);
            }
        };
        
        Toast.init();
        Toast.show('Produk berhasil ditambahkan ke keranjang!');
    };

    const renderCartModal = () => {
        const modalProductsContainer = checkoutModal.querySelector("#modal-products");
        const modalTotalPriceEl = checkoutModal.querySelector("#modal-total-price");
        modalProductsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            modalProductsContainer.innerHTML = '<p class="text-center text-gray-400 py-8">Keranjang Anda kosong.</p>';
            modalTotalPriceEl.textContent = formatCurrency(0);
            return;
        }

        cart.forEach((item) => {
            total += item.price * item.quantity;
            const itemHtml = `
            <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div class="flex items-center gap-4">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                    <div>
                        <h4 class="font-bold text-sm">${item.name}</h4>
                        <p class="text-xs text-text-secondary">${formatCurrency(item.price)}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <button class="cart-quantity-btn w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="font-bold w-5 text-center">${item.quantity}</span>
                    <button class="cart-quantity-btn w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200" data-id="${item.id}" data-action="increase">+</button>
                    <button class="cart-remove-btn text-red-500 hover:text-red-700 transition-colors" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
            modalProductsContainer.innerHTML += itemHtml;
        });
        modalTotalPriceEl.textContent = formatCurrency(total);
    };

    const renderProductDetail = (product) => {
        const contentContainer = productDetailModal.querySelector(".modal-content");
        contentContainer.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6 p-6">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="rounded-lg w-full h-64 object-cover">
            </div>
            <div class="flex flex-col">
                <h3 class="text-2xl font-bold">${product.name}</h3>
                <p class="text-text-secondary my-2">${product.description}</p>
                <div class="flex items-baseline gap-2 my-2">
                    <span class="text-lg text-gray-400 line-through">${formatCurrency(product.price)}</span>
                    <span class="text-3xl font-bold text-primary">${formatCurrency(product.discountedPrice)}</span>
                </div>
                <div class="mt-4 text-sm space-y-3 text-text-secondary overflow-y-auto max-h-60 pr-4">
                    <div><strong class="text-text-primary">Komposisi:</strong> ${product.details.komposisi}</div>
                    <div><strong class="text-text-primary">Manfaat:</strong> ${product.details.manfaat}</div>
                    <div><strong class="text-text-primary">Cara Pakai:</strong> ${product.details.caraPakai}</div>
                </div>
                <button class="add-to-cart-from-modal-btn w-full btn-primary text-base mt-6" data-id="${product.id}">
                    <i class="fas fa-cart-plus mr-2"></i>Tambah ke Keranjang
                </button>
            </div>
        </div>`;
        toggleModal(productDetailModal, true);
    };

    const handleCartAction = (productId, action) => {
        const itemInCart = cart.find((item) => item.id === productId);
        if (!itemInCart) return;

        if (action === "increase") {
            itemInCart.quantity++;
        } else if (action === "decrease") {
            itemInCart.quantity--;
            if (itemInCart.quantity <= 0) {
                cart = cart.filter((item) => item.id !== productId);
            }
        } else if (action === "remove") {
            cart = cart.filter((item) => item.id !== productId);
        }
        updateCartUI();
    };

    const checkoutToWhatsApp = () => {
        if (cart.length === 0) return;
        let message = "Halo Musa Kokor, saya ingin memesan:\n\n";
        let total = 0;
        cart.forEach((item) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            message += `- ${item.name} (x${item.quantity}) = ${formatCurrency(subtotal)}\n`;
        });
        message += `\n*Total Pembelian: ${formatCurrency(total)}*\n\nMohon konfirmasi pesanan saya. Terima kasih!`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        cart = [];
        updateCartUI();
        toggleModal(checkoutModal, false);
    };

    // --- LIVE NOTIFICATION & VISITOR COUNT ---
    const showLiveNotification = () => {
        const notification = document.getElementById("live-notification");
        const buyer = recentBuyers[Math.floor(Math.random() * recentBuyers.length)];
        const product = products[Math.floor(Math.random() * products.length)];
        const color = buyerColors[Math.floor(Math.random() * buyerColors.length)];
        const initials = buyer.name.split(" ").map(n => n[0]).join("").substring(0, 2);
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        document.getElementById("buyer-avatar").style.backgroundColor = color;
        document.getElementById("buyer-avatar").textContent = initials;
        document.getElementById("notification-text").textContent = `${buyer.name} dari ${buyer.location} baru saja membeli ${product.name}.`;
        document.getElementById("notification-time").textContent = timeString;

        notification.classList.add("show");
        setTimeout(() => notification.classList.remove("show"), 5000);
    };

    const startNotificationCycle = () => {
        // Show first notification after 5-10 seconds
        const firstDelay = Math.floor(Math.random() * 5000) + 5000; // 5-10 seconds
        setTimeout(() => {
            showLiveNotification();
            // Then set interval for every 20 seconds
            notificationInterval = setInterval(showLiveNotification, 20000);
        }, firstDelay);
    };

    // --- EVENT LISTENERS ---
    filterButtons.forEach((btn) =>
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active", "bg-primary", "text-white"));
            btn.classList.add("active", "bg-primary", "text-white");
            filterAndSearch();
        })
    );

    searchInput.addEventListener("input", filterAndSearch);

    productGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".view-detail-btn");
        if (btn) {
            const product = products.find((p) => p.id === parseInt(btn.dataset.id));
            renderProductDetail(product);
        }
    });

    productDetailModal.addEventListener("click", (e) => {
        if (e.target.closest(".close-detail-modal-btn") || e.target === productDetailModal) {
            toggleModal(productDetailModal, false);
        }
        const addBtn = e.target.closest(".add-to-cart-from-modal-btn");
        if (addBtn) {
            addToCart(parseInt(addBtn.dataset.id));
            addBtn.innerHTML = `<i class="fas fa-check mr-2"></i>Ditambahkan!`;
            addBtn.disabled = true;
            setTimeout(() => {
                toggleModal(productDetailModal, false);
            }, 1000);
        }
    });

    cartBtnNav.addEventListener("click", () => {
        if (cart.length === 0) {
            // Show a more elegant empty cart message
            const Toast = {
                init() {
                    this.hideTimeout = null;
                    
                    this.el = document.createElement('div');
                    this.el.className = 'cart-toast';
                    this.el.style.cssText = `
                        position: fixed;
                        bottom: 100px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: var(--primary);
                        color: white;
                        padding: 12px 20px;
                        border-radius: 8px;
                        font-weight: 500;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        z-index: 1000;
                        opacity: 0;
                        transition: opacity 0.3s;
                    `;
                    document.body.appendChild(this.el);
                },
                show(message) {
                    clearTimeout(this.hideTimeout);
                    this.el.textContent = message;
                    this.el.style.opacity = '1';
                    
                    this.hideTimeout = setTimeout(() => {
                        this.el.style.opacity = '0';
                    }, 2000);
                }
            };
            
            Toast.init();
            Toast.show('Keranjang Anda masih kosong.');
            return;
        }
        toggleModal(checkoutModal, true);
    });

    checkoutModal.addEventListener("click", (e) => {
        if (e.target.id === "close-modal-btn" || e.target.closest("#close-modal-btn") || e.target === checkoutModal) {
            toggleModal(checkoutModal, false);
        }
        if (e.target.closest(".cart-quantity-btn")) {
            const btn = e.target.closest(".cart-quantity-btn");
            handleCartAction(parseInt(btn.dataset.id), btn.dataset.action);
        }
        if (e.target.closest(".cart-remove-btn")) {
            const btn = e.target.closest(".cart-remove-btn");
            handleCartAction(parseInt(btn.dataset.id), "remove");
        }
        if (e.target.id === "modal-checkout-btn" || e.target.closest("#modal-checkout-btn")) {
            checkoutToWhatsApp();
        }
    });

    noProductsModal.addEventListener("click", (e) => {
        if (e.target.closest(".close-no-products-modal-btn") || e.target === noProductsModal) {
            toggleModal(noProductsModal, false);
        }
        if (e.target.id === "back-to-products-btn" || e.target.closest("#back-to-products-btn")) {
            // Reset filter and search
            document.querySelector('[data-filter="all"]').click();
            searchInput.value = "";
            renderProducts(products);
            toggleModal(noProductsModal, false);
            
            // Scroll to products section
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleModal(productDetailModal, false);
            toggleModal(checkoutModal, false);
            toggleModal(noProductsModal, false);
        }
    });

    // --- INITIALIZATION ---
    renderProducts(products);
    updateCartUI();
    
    // Update visitor count
    setInterval(() => {
        const countEl = document.getElementById("visitor-count");
        let current = parseInt(countEl.textContent);
        countEl.textContent = (current + Math.floor(Math.random() * 3)).toLocaleString();
    }, 30000);
    
    // Start notification cycle
    startNotificationCycle();
});