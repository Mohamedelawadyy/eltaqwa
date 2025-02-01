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
    price: 50,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of product 2. It is a great product!",
    image: "./images/logo-1.png",
    alt: "product2",
    isPacket: false,
    price: 50,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of product 3. It is an awesome product!",
    image: "./images/logo-1.png",
    alt: "product3",
    isPacket: true,
    price: 50,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of product 4. It is a fantastic product!",
    image: "./images/logo-1.png",
    alt: "product4",
    isPacket: true,
    price: 50,
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
          <button class="btn custom-btn" onclick='renderModal(${JSON.stringify(
            product
          )})'>Buy with GR</button>
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

function renderModal(product) {
  const modalContainer = document.getElementById("modal-container");

  let basePrice = product.price; // Get product's base price

  modalContainer.innerHTML = `
    <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
          <div class=" d-flex flex-row w-100">
          
                  <img src="${product.image}" class="w-50 mb-3" alt="${
    product.alt
  }">
        <div class=" w-100">
        <h5 class="modal-title">${product.name}</h5>
        <p>${product.description}</p>
        <label for="weight">Enter Weight (g):</label>
        <input type="number" id="weight" class="form-control" value="10" min="1">
        <p class="mt-2"><strong>Total Price: $<span id="total-price">${(
          basePrice * 10
        ).toFixed(2)}</span></strong></p>
        </div>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Confirm Purchase</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();

  // Get the weight input field and price display
  const weightInput = document.getElementById("weight");
  const priceDisplay = document.getElementById("total-price");

  // Event listener for input change
  weightInput.addEventListener("input", () => {
    let weight = parseFloat(weightInput.value) || 1; // Default to 1 if input is empty or invalid
    if (weight < 1) weight = 1; // Prevent negative or zero input
    priceDisplay.textContent = (basePrice * weight).toFixed(2);
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);
