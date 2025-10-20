
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
            image: 'https://images.pexels.com/photos/233036/pexels-photo-233036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Honda CB 1000R',
            price: 'R$ 78.870,00',
            image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'BMW R1250 GS',
            price: 'R$ 96.500,00',
            image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Harley-Davidson Fat Boy',
            price: 'R$ 119.900,00',
            image: 'https://images.pexels.com/photos/2530590/pexels-photo-2530590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Ducati Panigale V4',
            price: 'R$ 162.990,00',
            image: 'https://images.pexels.com/photos/3513238/pexels-photo-3513238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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