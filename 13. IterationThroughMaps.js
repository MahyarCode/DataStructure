'use strict';

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

// DESC Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Maps: Iteration
const question = new Map([
  // DESC [key, value]
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

console.log(question.get('question'));

// DESC writing the questions
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// DESC asking for input
const answer = Number(prompt('Your answer: '));

// DESC check the answer either is it true or false
console.log(question.get(question.get('correct') === answer));

// DESC covert map into array
console.log([...question]); // no need to write question.entries()

// DESC get all the keys in map
console.log([...question.keys()]);

// DESC get all the values
console.log([...question.values()]);
