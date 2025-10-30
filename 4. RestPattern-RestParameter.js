'use strict';
//TODO Rest operator is used to PACK an array
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '22:00',
  }) {
    // we can define default values as they may be missed. but the 'address' is mandatory.
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// TODO Destructuring:
// DESC SPREAD, because on right side of "="
const arr = [1, 2, ...[3, 4]];
console.log(arr); //Output: [1, 2, 3, 4]

// DESC SPREAD, because on left side of "="
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); //Output: 1 2 [3, 4, 5]

// DESC the Rest operation should be in the last element of an array!
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Output: Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// DESC the same thing with the objects:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // Output: {open: 0, close: 24} {thu: {…}, fri: {…}}

// TODO Functions:
// NOTE in spread operation, we used "..." to pass each element as individual argument of a function
// DESC Receives multiple argument and pack it into an array
const add = function (...numbers) {
  console.log('Number: ', numbers);
  let total = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(`Total value is ${total}`);
};
add(2, 3); // Output: [2, 3]  Total value is 5
add(5, 3, 7, 2); // Output: [5, 3, 7, 2] Total value is 17
add(1, 2, 4, 5, 2, 5, 2, 4, 1, 1, 21, 3); // Output: [1, 2, 4, 5, 2, 5, 2, 4, 1, 1, 21, 3] Total value is 51

const x = [23, 1, 5];
add(...x);
add(x);

//DESC function with rest operator:
restaurant.orderPizza('Chicken', 'mushroom', 'corn', 'sauce', 'pepper');
// Output: Chicken
//         ['mushroom', 'corn', 'sauce', 'pepper']
