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
  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Añadir al carrito';
 
  productDiv.appendChild(addToCartButton);
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
  const addToCartButton = document.querySelector('button');
  const quantityInput = document.getElementById('quantity');
  const decrementButton = document.querySelector('.minus');
  const incrementButton = document.querySelector('.plus');
  

  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalPrice.textContent = ("$ " + product.price);
  addToCartButton.textContent = ('Añadir al carrito');
  

  modal.style.display = 'block';
  
 //cierra el modal cuando le de click
 closeModalButton.addEventListener('click', () => {
  // Reset the quantity to 1 when the modal is closed
  quantity = 1;
  updateQuantityDisplay();

  // Close the modal
  modal.style.display = 'none';
});
// Make sure modalAddToCartButton is assigned the correct value
const modalAddToCartButton = document.querySelector('#modal-añadir-carrito');

// Log the variable to check if it's null
console.log('modalAddToCartButton:', modalAddToCartButton);

// Check if modalAddToCartButton is not null before adding the event listener
if (modalAddToCartButton) {
    modalAddToCartButton.addEventListener('click', () => {
        // Handle adding the product to the cart
        console.log('Producto añadido al carrito desde el modal:', product.title);
    });
} else {
    console.error('modalAddToCartButton is null or undefined.');
}


  //cierra el modal cuando le de click por fuera
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


    let quantity = parseInt(quantityInput.value) || 1; // Initial quantity

    // Function to update the quantity display
    function updateQuantityDisplay() {
        quantityInput.value = quantity;
    }

    // Event listener for decrement button
    decrementButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    // Event listener for increment button
    incrementButton.addEventListener('click', () => {
        if (quantity < 30) { // Assuming max quantity is 30
            quantity++;
            updateQuantityDisplay();
        }
    });

    // Event listener for quantity input change
    quantityInput.addEventListener('change', () => {
        const newQuantity = parseInt(quantityInput.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 30) { // Assuming max quantity is 30
            quantity = newQuantity;
        } else {
            quantityInput.value = quantity;
        }
    });

    // Call updateQuantityDisplay initially
    updateQuantityDisplay();
}