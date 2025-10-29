'use strict';

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
};

// DESC the way to destructuring an object
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); // Output: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// DESC what if we want to have different names for new variables in object destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags); // Output: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// DESC what if the object hasn't the property ? (this case: menu); we should define a default values:
const { menu = [], starterMenu: starters = [] } = restaurant;
// const { menu, starterMenu: starters = [] } = restaurant; // menu is undefined
// console.log(menu, starters); // Output: (0) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// DESC Mutating variables NOTE Be careful about the syntax of the 4th line ({ a, b } = obj);
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b); // Output: 23 7

// DESC Here is about the Nested Objects
const { fri } = openingHours;
// console.log(fri); // Output: {open: 11, close: 23}

const {
  thu: { open: o, close: c },
} = openingHours;
// console.log(o, c); // Output: 12 22

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  //   address: 'Via del Sole, 23', // you will see undefined when it calls address
  time: '23:45',
});
