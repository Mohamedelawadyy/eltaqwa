// Define your categories
const categories = [
  {
    title: "Category 1",
    description: "Explore our amazing category 1 products!",
    image: "./images/logo-1.png",
    link: "/category/1",
  },
  {
    title: "Category 2",
    description: "Check out category 2 for great products!",
    image: "./images/logo-1.png",
    link: "/category/2",
  },
  {
    title: "Category 3",
    description: "Discover amazing deals in category 3!",
    image: "./images/logo-1.png",
    link: "/category/3",
  },
  {
    title: "Category 4",
    description: "Find exclusive items in category 4!",
    image: "./images/logo-1.png",
    link: "/category/4",
  },
];

// Function to render category cards
function renderCategories() {
  const container = document.getElementById("categories-container");
  container.innerHTML = ""; // Clear existing content

  categories.forEach((category) => {
    const categoryCard = document.createElement("article");
    categoryCard.classList.add("col");

    categoryCard.innerHTML = `
              <div class="product-card h-100 text-center">
                  <img src="${category.image}" class="card-img-top" alt="${category.title}">
                  <div class="card-body">
                      <h5 class="card-title">${category.title}</h5>
                      <p class="card-text">${category.description}</p>
                  </div>
                  <div class="card-footer">
                      <a href="${category.link}" class="btn custom-btn">Shop now</a>
                  </div>
              </div>
          `;

    container.appendChild(categoryCard);
  });
}

// Call the render function
renderCategories();
