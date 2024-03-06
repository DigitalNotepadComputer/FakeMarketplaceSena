const productsContainer = document.getElementById('products-container');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('h3');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = '$' + product.price;

            productDiv.appendChild(image);
            productDiv.appendChild(title);
            productDiv.appendChild(price);

            productsContainer.appendChild(productDiv);
        });
    })
    .catch(err => console.error('Error fetching products:', err));