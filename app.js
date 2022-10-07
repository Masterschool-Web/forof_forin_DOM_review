let cartTotal = 0;
const foodMenuContainer = document.querySelector("#food-menu");
const dessertMenuContainer = document.querySelector("#dessert-menu");
const drinkMenuContainer = document.querySelector("#drink-menu");
const cartTotalDisplay = document.querySelector(".cart-total");
cartTotalDisplay.innerText = cartTotal;
createFoodMenuCards();
createDessertMenuCards();
createDrinkMenuCards();

//Use a for...of loop to iterate over the foodMenuItems array and create menu item cards for each of them.
function createFoodMenuCards() {
  for (let foodMenuItem of foodMenuItems) {
    const foodMenuCard = createMenuCard(foodMenuItem);
    foodMenuContainer.appendChild(foodMenuCard);
  }
}

//Use a for...in loop to create menu item cards for each drink in the drinkMenuItems array.
function createDrinkMenuCards() {
  for (menuItem in drinkMenuItems) {
    const drinkMenuCard = createMenuCard(drinkMenuItems[menuItem]);
    drinkMenuContainer.appendChild(drinkMenuCard);
  }
}
//Use the .map() method to iterate over the dessertMenuItems array and create menu item cards for each of them.

function createDessertMenuCards() {
  return dessertMenuItems.map((dessertMenuItem) => {
    const dessertMenuCard = createMenuCard(dessertMenuItem);
    dessertMenuContainer.appendChild(dessertMenuCard);
  });
}
//Refactor your code so it is DRY
function createMenuCard(menuItem) {
  console.log(menuItem);
  const { name, price, description, image } = menuItem;
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-item");
  menuCard.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h2>${name}</h2>
          </div>
          <div class="card-body">
            <div class="card-body-left">
              <img
                src=${image}
                alt=${name}
              />
            </div>
            <div class="card-body-right">
              <p>${description}</p>
            </div>
          </div>
          <div class="card-footer">
            <p class="price">$${price}</p>
            <button value=${price}>Add to Cart</button>
          </div>
        </div>
        `;
  //Add an event listener to all menu item buttons that adds the price of the menu item to the cartTotal variable and updates the cart total in the DOM.

  const button = menuCard.querySelector("button");
  button.addEventListener("click", () => {
    cartTotal += Number(button.value);
    cartTotalDisplay.textContent = cartTotal;
  });
  return menuCard;
}

