const cartItems = [
  {
    id: 1,
    name: "Product 1",
    image: "./images/product1.png",
    price: 25.0,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    image: "./images/product2.png",
    price: 15.5,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    image: "./images/product3.png",
    price: 30.0,
    quantity: 3,
  },
];

function renderCart() {
  const cartList = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  cartList.innerHTML = "";
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
    cartList.innerHTML += `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            </tr>`;
  });

  totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", renderCart);
