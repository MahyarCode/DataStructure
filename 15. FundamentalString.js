'use strict';

// NOTE it is required to know:
// 1. indexOf ( output the index of the specific search )
// 2. slice ( cuts the string from starting index till you specify )
// 3. toLowerCase ( turns the string to all lowercase )
// 4. toUpperCase ( turns the string to all uppercase )
// 5. trim ( removes all the white spaces )
// 6. replace ( the very first search in the string )
// 7. replaceAll ( all the search is being replaced )
// 8. includes ( checks the specific value in the string and returns true or false )
// 9. startsWith ( checks the specific value at the beginning of the string and returns true or false )
// 10. endsWith ( checks the specific value at the end of the string and returns true or false )
// 11. split ( turn the string into array by spliting the string using the specified separator )

const checkMiddleSeat = function (seat) {
  // TODO B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(s, ' ', 'You get the middle seat');
  } else console.log(s, ' ', 'it is not middle seat');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// NOTE in behind the scene of strings, js will turn string into an object of string
console.log(typeof new String('Mahyar')); // NOTE Object
console.log(typeof String('Mahyar')); // NOTE String
console.log(typeof 'Mahyar'); // NOTE String
console.log(new String('Mahyar').slice(1)); // NOTE type: String :D

// DESC Working with Index in string
const passenger = 'mAhYAr';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// TODO RegEx (Regular Expressions)
const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate')); // only replace the first search
console.log(announcement.replaceAll('door', 'gate')); // replace all the 'door' into 'gate'
console.log(announcement.replace(/door/g, 'gate')); // Regex that finds every element that is equal to 'door' in global ( the g flag )

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  const regex = /(knife|gun)/g;
  // DESC using regex
  if (regex.test(baggage)) {
    console.log('You cannot put your stuff in the airplane');
  } else console.log('Welcome aboard');
  // // DESC using includes method
  // // if (baggage.includes('knife') || baggage.includes('gun')) {
  // //   console.log('You cannot put your stuff in the airplane');
  // // } else console.log('Welcome aboard');
};

checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// DESC creating dynamic string:
const [firstname, lastname] = 'Mahyar Code'.split(' '); // turn the string into an array by spliting it in every white spaces and then equal each of those to firstname and lastname
const newName = ['Mr.', firstname, lastname.toUpperCase()].join('--'); // it will join these 3 elements with '--' in between each one of them
console.log(newName);

// TODO Padding a string
// NOTE it means adding a number of characters to the string until the string has a certain desired length

const message = 'Go to the gate 23';
console.log(message.padStart(25, '+'));
console.log('mahyar'.padStart(25, '+'));
console.log('mahyar'.padStart(1, '+'));
console.log('mahyar'.padEnd(25, '+'));
console.log('mahyar'.padStart(10, '+').padEnd(14, '+'));

// DESC example in security (phone number or credit card number)
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard('234567890'));
console.log(maskCreditCard(1234123412341234));

// TODO Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
