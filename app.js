document.addEventListener("DOMContentLoaded", function () {
  new Splide("#category-carousel", {
    type: "loop", // Infinite loop
    perPage: 3, // Show 3 items per page
    gap: "1rem", // Gap between items
    focus: "center", // Focus the center slide
    pagination: false, // Disable pagination
    arrows: true, // Show arrows for navigation
    breakpoints: {
      768: {
        perPage: 1, // Show 1 item per page on small screens (mobile)
      },
    },
  }).mount();
});

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of product 1. It is an amazing product!",
    image: "./images/logo-1.png",
    alt: "product1",
    isPacket: false,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2. It is a great product!",
    image: "./images/logo-1.png",
    alt: "product2",
    isPacket: false,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of product 3. It is an awesome product!",
    image: "./images/logo-1.png",
    alt: "product3",
    isPacket: true,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of product 4. It is a fantastic product!",
    image: "./images/logo-1.png",
    alt: "product4",
    isPacket: true,
  },
];

function renderProducts() {
  const productContainer = document.getElementById("product-container");

  // Clear any existing content inside the container
  productContainer.innerHTML = "";

  // Object to store quantities for products
  const productQuantities = {};
  console.log(productQuantities, "productQuantities");

  // Loop through each product and create a card
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col");

    // Add an entry to track the quantity for this product if it's a packet
    if (product.isPacket) {
      productQuantities[product.id] = 1;
    }

    // Render different buttons based on whether the product is a packet
    const buttons = product.isPacket
      ? `
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-primary" onclick='renderModal(${JSON.stringify(
            product
          )})'>Buy Now</button>
        </div>
      `
      : `<button class="btn custom-btn">Add to Cart</button>`;

    // Add card HTML
    productCard.innerHTML = `
      <div class="product-card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.alt}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
        </div>
        <div class="card-footer">
          ${buttons}
        </div>
      </div>
    `;

    // Append the card to the container
    productContainer.appendChild(productCard);

    // Attach event listeners for packet products
    if (product.isPacket) {
      const decreaseBtn = document.getElementById(`decrease-${product.id}`);
      const increaseBtn = document.getElementById(`increase-${product.id}`);
      const quantityDisplay = document.getElementById(`quantity-${product.id}`);

      // Event listener for decrease button
      decreaseBtn.addEventListener("click", () => {
        if (productQuantities[product.id] > 1) {
          productQuantities[product.id]--;
          quantityDisplay.textContent = productQuantities[product.id];
        }
      });

      // Event listener for increase button
      increaseBtn.addEventListener("click", () => {
        productQuantities[product.id] += 1;
        quantityDisplay.textContent = productQuantities[product.id];
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#category-carousel", {
    type: "loop", // Infinite loop
    perPage: 3, // Show 3 items per page
    gap: "1rem", // Gap between items
    focus: "center", // Focus the center slide
    pagination: false, // Disable pagination
    arrows: true, // Show arrows for navigation
    breakpoints: {
      768: {
        perPage: 2, // Show 1 item per page on small screens (mobile)
      },
    },
  }).mount();
});

// Function to render the modal
function renderModal(product) {
  const modalContainer = document.getElementById("modal-container");

  // Generate weight options if the product is a packet
  const weightOptions = product.isPacket
    ? `<label for='weight'>Select Weight:</label>
       <select id='weight' class='form-select'>
         <option value='10g'>10g</option>
         <option value='50g'>50g</option>
         <option value='100g'>100g</option>
       </select>`
    : `<label for='quantity'>Quantity:</label>
       <input type='number' id='quantity' class='form-control' value='1' min='1'>`;

  modalContainer.innerHTML = `
    <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${product.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <img src="${product.image}" class="img-fluid" alt="${product.alt}">
            <p>${product.description}</p>
            ${weightOptions}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Confirm Purchase</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

document.addEventListener("DOMContentLoaded", renderProducts);
