# Restaurant Website

To complete this challenge, you will finish building this restaurant website using DOM Manipulation as well as `for...of` and `for...in` loops.

Menu items in each website section will be displayed using the `foodMenuItems`, `drinkMenuItems`, `dessertMenuItems` arrays in the `data.js` file.

All work will be done in the `app.js` file. There is no need to edit any other file in this repository to complete this challenge.

## Instructions

In this challenge, you will be creating cards for each menu item displayed in the UI. Menu cards will have the following HTML format:

```
<div class="card">
    <div class="card-header">
        <h2>Chicken Dinner</h2>
    </div>
    <div class="card-body">
        <div class="card-body-left">
            <img
                src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="chicken"
            />
        </div>
        <div class="card-body-right">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam, quae.
            </p>
        </div>
        </div>
        <div class="card-footer">
            <p class="price">$10</p>
            <button value=${price}>Add to Cart</button>
        </div>
    </div>
</div>
```

### for...of

Use a `for...of` loop to iterate over the `foodMenuItems` array and create menu item cards for each of them.

### for...in

Use the `for...in` loop to iterate over the `drinkMenuItems` array and create menu item cards for each of them.

#### Note

The for...in loop is used to iterate over the properties of an object.

<details>
<summary>Why is it less ideal to use a for...in loop to iterate over an array?</summary>
Because it will iterate over the index of the array, not the values of the array.
</details>

### map

Use the `.map` method to iterate over the `dessertMenuItems` array and create menu item cards for each of them.

### DRY Code

Refactor your code so that you do not repeat yourself.

### Event Listener

Add an event listener to all menu item `buttons` that adds the `price` of the menu item to the `cartTotal` variable and updates the cart total in the DOM.

### Resources

- [Cheatsheet: JS loops (forEach, for/in, for/of)](https://dev.to/sylwiavargas/cheatsheet-js-loops-foreach-for-in-for-of-3hj2)
- [Cheatsheets/Learn JavaScript Loops](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet)
