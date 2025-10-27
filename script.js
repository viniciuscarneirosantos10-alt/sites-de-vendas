
    document.addEventListener('DOMContentLoaded', function() {

    // LISTA DE PRODUTOS (MOTOS)
    // Para adicionar uma nova moto, basta copiar um bloco {...}, colar e alterar as informações.
    const products = [
        {
            name: 'Yamaha MT-09',
            price: 'R$ 58.490,00',
            image: 'https://images.pexels.com/photos/10484341/pexels-photo-10484341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Kawasaki Ninja 400',
            price: 'R$ 35.810,00',
            image:`https://www.kawasakibrasil.com/content/dam/products/pim/studio/Resource_312313_25ZX400S_141GN1DRF3CG_A.jpg
        }
        {
            name: 'Honda CB 1000R',
            price: 'R$ 78.870,00',
            image: 'https://imagens-prod.microwork.inf.br/modelos/23/versoes/45/cores/186.jpg?v=20250924'
        },
        {
            name: 'BMW R1250 GS',
            price: 'R$ 96.50'
            image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfzJuSpuN3LfAMiHkKSbIXbTeAnXT7BK0yg&s
        },
        {
            name: 'BMW R1200,
            price: 'R$ 119.900,00',
            image:'https://http2.mlstatic.com/D_778161-MLB91040428835_082025-C.jpg
        },
        {
            name: 'Ducati Panigale V4',
            price: 'R$ 162.990,00',
            image: 'https://production.autoforce.com/uploads/picture/image/258935247/comprar-panigale-v4-s-2023-2281bd40-83c1-4bca-92a1-6106d9e01aeb_22a0b74550.jpg
        }
    ];

    // Seleciona o container onde os produtos serão inseridos
    const productGrid = document.getElementById('product-grid');

    // Cria e insere o HTML para cada produto na página
    products.forEach(product => {
        // Cria um elemento div para o card do produto
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Define o conteúdo HTML do card com as informações do produto
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="btn-buy">Comprar Agora</button>
            </div>
        `;

        // Adiciona o card criado à grade de produtos
        productGrid.appendChild(productCard);
    });

});