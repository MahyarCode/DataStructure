'use strict';
//TODO Rest operator is used to PACK an array
// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 enhanced object literals
  openingHours,
};

console.log(restaurant);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [index, item] of menu.entries()) {
  // for example: [0, 'Focaccia']
  console.log(`${index + 1}: ${item}`);
}
console.log('menu: ', [...menu.entries()]);

// TODO WITH Optional chaining "?."
// DESC it return undefined for the property if it doesn't exist
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// DESC it will return undefined, then it executes the falsy condition:
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnt exist');

console.log(restaurant?.categories ?? "property doesn't exist");
