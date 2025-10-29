'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// DESC finding elements that are used in both of the arrays  "firstSet.intersection(secondSet)"
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log(commonFoods);
console.log([...commonFoods]);

// DESC finding all the unique elements in both arrays
const allUniqueFood = italianFoods.union(mexicanFoods);
// const allUniqueFood = [...new Set([...italianFoods, ...mexicanFoods])];

console.log(allUniqueFood);
console.log([...allUniqueFood]);

// DESC elements in the first set which is not in the second one

const uniqueitalian = italianFoods.difference(mexicanFoods);
console.log(uniqueitalian); // removed the similar ones: tomatoes and garlic

// DESC find elements which defined in both italian and mexican but not both (A || B) - (A && B)
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

// DESC if an array is completely different from the other
console.log(italianFoods.isDisjointFrom(mexicanFoods)); // returns false because tomatoes and garlic is similar in both arrays
