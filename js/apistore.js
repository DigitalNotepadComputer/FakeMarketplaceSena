// const productsContainer = document.getElementById('products-container');
// const categoryButtons = document.querySelectorAll('.categorias li a'); // Select category links
// const modal = document.getElementById('productModal'); // Reference to the modal element
// const closeModalButton = document.querySelector('.close-modal'); // Reference to the close button

// // Function to filter products based on selected category
// function filterProducts(selectedCategory) {
//   fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(products => {
//       const filteredProducts = selectedCategory
//         ? products.filter(product => product.category === selectedCategory)
//         : products; // Muestra todos si no se selecciona una catogoria
//       // Clear existing content before adding filtered products
//       productsContainer.innerHTML = '';
//       filteredProducts.forEach(product =>  createProductCard(product))     

//     //   createProductCards(filteredProducts); // Call function to create product cards
//     })
//     .catch(err => console.error('Error fetching products:', err));
// }
// function createProductCard(product) {
  
//     const productDiv = document.createElement('div');
//     productDiv.classList.add('product');

//     const image = document.createElement('img');
//     image.src = product.image;
//     image.alt = product.title;

//     const title = document.createElement('h3');
//     title.textContent = product.title;

//     productDiv.appendChild(image);
//     productDiv.appendChild(title);

//     productsContainer.appendChild(productDiv);

    
  
// }

// categoryButtons.forEach(button => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();
//     const selectedCategory = button.textContent.toLowerCase(); 
//     filterProducts(selectedCategory);
//   });
// });

// // Call filterProducts initially to display all products (optional)
// filterProducts();


// function Showmodal(product) {
//   div.addEventListener('click', () => {
//     const modal = document.querySelector('.modal');
//     const modalImage = document.querySelector('.modal-image');
//     const modalTitle = document.querySelector('.modal-title');
//     const modalDescription = document.querySelector('.modal-description');
  
//     modalImage.src = product.image;
//     modalTitle.textContent = product.title;
//     modalDescription.textContent = product.description;
  
//     modal.style.display = 'block';
  
//   });
  
//   const modal = document.querySelector('.modal');
//   const closeModal = document.querySelector('.close');
  
//   modal.addEventListener('click', (event) => {
//   if (event.target === modal || event.target === closeModal) {
//       modal.style.display = 'none';
//   }
//   });
  
// }
const productsContainer = document.getElementById('products-container');
const categoryButtons = document.querySelectorAll('.categorias li a'); // Select category links
const modal = document.getElementById('productModal'); // Reference to the modal element
const closeModalButton = document.querySelector('.close-modal'); // Reference to the close button

// Function to filter products based on selected category
function filterProducts(selectedCategory) {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products; // Show all products if no category selected
      // Clear existing content before adding filtered products
      productsContainer.innerHTML = '';
      filteredProducts.forEach(product => createProductCard(product));     
    })
    .catch(err => console.error('Error fetching products:', err));
}

function createProductCard(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;

  const title = document.createElement('h3');
  title.textContent = product.title;

  // hace la funcion de mostrr el modal
  productDiv.addEventListener('click', () => {
    showModal(product);
  });

  productDiv.appendChild(image);
  productDiv.appendChild(title);

  productsContainer.appendChild(productDiv);
}

categoryButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedCategory = button.textContent.toLowerCase(); 
    filterProducts(selectedCategory);
  });
});

// Call filterProducts initially to display all products
filterProducts();


function showModal(product) {
  const modalImage = document.querySelector('#product-image');
  const modalTitle = document.querySelector('#product-title');
  const modalDescription = document.querySelector('#product-description');
  const modalPrice = document.querySelector('#product-price')

  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalPrice.textContent = ("$ " + product.price);
  

  modal.style.display = 'block';

 //cierra el modal cuando le de click
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  //cierra el modal cuando le de click por fuera
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

