document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS DOS PRODUTOS DE FUTSAL (Simulando uma API) ---
    const products = [
        {
            id: 1,
            name: 'Chuteira Futsal Nike Phantom',
            price: 499.90,
            image: 'https://imgnike-a.akamaihd.net/768x768/02845651.jpg'
        },
        {
            id: 2,
            name: 'Bola de Futsal Adidas Pro',
            price: 249.99,
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/20c7c34f19b14c398c8c3e8083c2ef36_9366/Bola_Oceaunz_Pro_Sala_Branco_HT9005_01_standard.jpg'
        },
        {
            id: 3,
            name: 'Camisa de Treino Brasil',
            price: 229.90,
            image: 'https://imgnike-a.akamaihd.net/768x768/02262815.jpg'
        },
        {
            id: 4,
            name: 'Luva de Goleiro Futsal Poker',
            price: 189.90,
            image: 'https://images.tcdn.com.br/img/img_prod/595047/luva_de_goleiro_poker_futsal_grasp_ii_pro_silver_9123_1_d514d02633005a76e73c9f2b87455855.jpg'
        },
        {
            id: 5,
            name: 'Chuteira Futsal Puma Future',
            price: 459.50,
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107123/01/sv01/fnd/BRA/fmt/png/Chuteira-FUTURE-PLAY-IT-BDP-Futsal'
        },
        {
            id: 6,
            name: 'Meião Esportivo Kanxa',
            price: 39.90,
            image: 'https://kanxa.com.br/wp-content/uploads/2021/08/meiao-profissional-degrade-39-44-kanxa-4040-pto-bco.jpg'
        },
        {
            id: 7,
            name: 'Calção Esportivo Penalty',
            price: 79.90,
            image: 'https://http2.mlstatic.com/D_NQ_NP_794218-MLB50004944415_052022-O.webp'
        },
        {
            id: 8,
            name: 'Bola de Futsal Penalty Max 500',
            price: 199.00,
            image: 'https://static.netshoes.com.br/produtos/bola-de-futsal-penalty-max-500-termotec-ultra-fusion-viii/14/D23-7799-014/D23-7799-014_zoom1.jpg'
        }
    ];

    // --- SELEÇÃO DOS ELEMENTOS DO DOM ---
    const productGrid = document.getElementById('product-grid');
    const cartCountElement = document.getElementById('cart-count');

    // --- ESTADO DO CARRINHO ---
    let cart = [];

    // --- FUNÇÃO PARA RENDERIZAR OS PRODUTOS NA TELA ---
    function renderProducts() {
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    <button class="btn-add-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `).join('');
    }

    // --- FUNÇÃO PARA ATUALIZAR A CONTAGEM DO CARRINHO ---
    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    // --- LÓGICA DE ADICIONAR AO CARRINHO ---
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-add-cart')) {
            const productId = parseInt(event.target.dataset.id);
            cart.push(productId);
            updateCartCount();

            // Feedback visual para o usuário
            event.target.textContent = 'Adicionado!';
            event.target.style.backgroundColor = '#008f7a'; // Um verde um pouco mais escuro
            setTimeout(() => {
                event.target.textContent = 'Adicionar ao Carrinho';
                event.target.style.backgroundColor = '#222';
            }, 1200);
        }
    });

    // --- INICIALIZAÇÃO ---
    renderProducts();
});