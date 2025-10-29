'use strict';

/* NOTE 
Maps are data structure that we can use to map values to keys. Just like Objects, data is stored in key value pairs in maps.
The difference is for the keys, you can use any type of variable, not just string.
*/

const rest = new Map();
// DESC add an item
rest.set('name', 'Classico Italiano');
// DESC add multiple items
rest
  .set('1', 'Firenze, Italy')
  .set('open', 11)
  .set(true, 'we are open')
  .set('close', 23)
  .set(false, 'we are close')
  .set(document.querySelector('h1'), 'Heading')
  .set('categories', [
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);

console.log(rest);

// DESC get the value of a specific key
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('true')); // undefined

// DESC (Not recommended) using boolean to get a property value
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// DESC check if a specific key is in map
console.log(rest.has('categories'));

// DESC delete a property from a map (strict type)
rest.delete('1');
console.log(rest);

// DESC calculating the size of the map ( like Set() )
console.log(rest.size);

// DESC defining an array as key
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); // undefined
// NOTE better to define a variable for an array
const arr = [1, 2];
rest.set(arr, 'Test2');
console.log(rest.get(arr));

// DESC Destroying the Map ( like Set() :D:D )
rest.clear();
console.log(rest);
