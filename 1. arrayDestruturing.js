'use strict';

// DESC this is how we unpacking arrays to have access to each elements
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c); // Output: 2 3 4

// DESC we can do the same operation using Array Destructuring (Unpacks the array)
const [x, y, z] = arr;
// console.log(x, y, z); // Output: 2 3 4

// DESC Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// TODO Array Destructuring
// DESC it can pick the 1st and the 2nd item from the array
const [first, second] = restaurant.categories;
// console.log(first, second); // Output: Italian Pizzeria

// DESC it can pick the 1st and the 3rd item from the array
const [item1, , item3] = restaurant.categories;
// console.log(item1, item3); // Output: Italian Vegetarian

// DESC we can switch the order of elements
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
// console.log(main, secondary); Output: Pizzeria Italian

// DESC receive 2 return values from a function
// console.log(restaurant.order(2, 0)); // Output: ['Garlic Bread','Pizza']
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Output: Garlic Bread Pizza

// DESC what if we have a nested array? how we can access to the other elements in the other array?
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
// console.log(i, j); // Output: 2 [5, 6]

// DESC There we are
const [e, , [t, k]] = nested;
// console.log(e, t, k); // Output: 2 5 6

// DESC Destructuring arrays without same dimensions
const [p, q, r] = [8, 9]; // 'r' variable will be undefined
// console.log(p, q, r); // Output: 8 9 undefined

// DESC default values
const [o = 1, u = 1, w = 1] = [8, 9];
// console.log(o, u, w); // Output: 8 9 1
