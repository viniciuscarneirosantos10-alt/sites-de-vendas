document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Yamaha MT-07',
            price: 'R$ 45.490',
            image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Honda CB 650R',
            price: 'R$ 51.100',
            image: 'https://images.pexels.com/photos/10484341/pexels-photo-10484341.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Kawasaki Z900',
            price: 'R$ 57.990',
            image: 'https://images.pexels.com/photos/8996695/pexels-photo-8996695.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Harley-Davidson Sportster S',
            price: 'R$ 125.900',
            image: 'https://images.pexels.com/photos/9303350/pexels-photo-9303350.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'BMW R1250 GS',
            price: 'R$ 96.500',
            image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Ducati Panigale V4',
            price: 'R$ 162.990',
            image: 'https://images.pexels.com/photos/3513238/pexels-photo-3513238.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Vespa Primavera 150',
            price: 'R$ 31.900',
            image: 'https://images.pexels.com/photos/5929285/pexels-photo-5929285.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Triumph Bonneville T120',
            price: 'R$ 59.490',
            image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button>Ver Detalhes</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
});