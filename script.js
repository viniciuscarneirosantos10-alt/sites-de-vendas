document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS DAS CHUTEIRAS (Simulando API) ---
    const products = [
        {
            id: 1,
            name: 'QUADRA VOLT PRO',
            category: 'Chuteira de Futsal',
            price: 799.99,
            image: 'https://i.ibb.co/L5kNbvD/futsal-shoe-hero.png'
        },
        {
            id: 2,
            name: 'QUADRA SHADOW STRIKE',
            category: 'Chuteira de Futsal',
            price: 649.90,
            image: 'https://i.ibb.co/v32s8R6/futsal-shoe-2.png'
        },
        {
            id: 3,
            name: 'QUADRA AGILE KNIT',
            category: 'Chuteira de Futsal',
            price: 729.90,
            image: 'https://i.ibb.co/pwnL8xH/futsal-shoe-3.png'
        },
        {
            id: 4,
            name: 'QUADRA CLASSIC LEATHER',
            category: 'Chuteira de Futsal',
            price: 599.99,
            image: 'https://i.ibb.co/gZ7k2yF/futsal-shoe-4.png'
        },
        {
            id: 5,
            name: 'QUADRA GHOST X',
            category: 'Chuteira de Futsal',
            price: 849.50,
            image: 'https://i.ibb.co/68H14vB/futsal-shoe-5.png'
        },
        {
            id: 6,
            name: 'QUADRA CONTROL 360',
            category: 'Chuteira de Futsal',
            price: 699.90,
            image: 'https://i.ibb.co/4Z5vM9R/futsal-shoe-6.png'
        }
    ];

    const productGrid = document.getElementById('product-grid');
    const cartCountElement = document.getElementById('cart-count');
    let cart = [];

    // Função para renderizar os produtos na grade
    function renderProducts() {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="produc