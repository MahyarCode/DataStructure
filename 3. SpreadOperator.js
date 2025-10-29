'use strict';
//TODO Spread operator is used to UNPACK an array
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
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];
console.log(newArr); // Output: [1, 2, 7, 8, 9]
console.log(...newArr); // Output: 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // adding new item: ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(newMenu);

// DESC Shallow copy of an array:
const mainMenuCopy = [...restaurant.categories];
console.log(mainMenuCopy);

// DESC join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// TODO spread operator works on iterables: Arrays, Strings, Maps, Sets; but NOT objects!
// NOTE it only works when we write a function or pass values into an array.
const str = 'mahyar';
const letters = ['Mr.', ...str];
console.log(letters);

// DESC can be passed in function arguments
// NOTE Turns list into individual elements and set it as individual argument
const ingredient = ['a', 'b', 'c'];
restaurant.orderPasta(...ingredient);

// NOTE from ES 2018, the spread operator also works in objects:
// DESC a shallow copy // NOTE which only primitive value has been changed ( if any other values change which are not primitive, the original object will be changed )
// Changing primitive value
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// Changing an object value
restaurantCopy.mainMenu.push('soup');
console.log(restaurant.mainMenu); // NOTE you see the menu array in original restaurant object is also changed.
console.log(restaurantCopy.mainMenu);
