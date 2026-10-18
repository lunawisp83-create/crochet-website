// These arrays store the names and prices of items in the basket.
let basketNames = [];
let basketPrices = [];

function addToBasket(name, price) {
  basketNames.push(name);
  basketPrices.push(price);
  showBasket();
  document.getElementById("basket-message").textContent =
    name + " added to your basket! ♡";
}

function showBasket() {
  let list = document.getElementById("basket-items");
  let total = document.getElementById("total");
  let count = document.getElementById("basket-count");
  let sum = 0;

  // Clear the old display before showing the updated basket.
  list.innerHTML = "";

  if (basketNames.length === 0) {
    list.innerHTML = '<li class="empty-basket">Your basket is empty ♡</li>';
  } else {
    for (let i = 0; i < basketNames.length; i++) {
      let item = document.createElement("li");
      let itemText = document.createElement("span");
      let removeButton = document.createElement("button");

      itemText.textContent = basketNames[i] + " — " + basketPrices[i] + " birr";
      removeButton.textContent = "Remove";
      removeButton.className = "remove-button";
      removeButton.onclick = function () {
        removeFromBasket(i);
      };

      item.appendChild(itemText);
      item.appendChild(removeButton);
      list.appendChild(item);
      sum = sum + basketPrices[i];
    }
  }

  total.textContent = sum + " birr";
  count.textContent = basketNames.length;
}

function removeFromBasket(index) {
  basketNames.splice(index, 1);
  basketPrices.splice(index, 1);
  showBasket();
  document.getElementById("basket-message").textContent =
    "Item removed from your basket.";
}

function clearBasket() {
  basketNames = [];
  basketPrices = [];
  showBasket();
  document.getElementById("basket-message").textContent =
    "Your basket has been cleared ♡";
}

function placeOrder() {
  if (basketNames.length === 0) {
    document.getElementById("basket-message").textContent =
      "Add a cute creation to your basket first ♡";
  } else {
    document.getElementById("basket-message").textContent =
      "Thanks for your interest! This demo doesn't send real orders or accept payments.";
  }
}

// Show the correct empty basket when the page first opens.
showBasket();
