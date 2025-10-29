'use strict';

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(orderSet);
console.log(orderSet.size); // NOTE you should use "size", not "length"
console.log(new Set('Mahyar'));

// DESC check if an element is in the set
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));

// DESC add new elements to a set
orderSet.add('garlic bread');
orderSet.add('garlic bread');
// NOTE only 1 is added. duplicates are going to be deleted
// DESC remove an element
orderSet.delete('risotto');
console.log(orderSet);

// NOTE in sets, there is no index. it is not a list to call an element using "orderSet[0]"

// // DESC Destroying the Set :D:D:D:D:D:D
// orderSet.clear();
// console.log(orderSet);

// DESC we can iterate through sets
for (const order of orderSet) console.log(order);

// DESC turn the following array into an unique array using set
const staff = ['waiter', 'manager', 'waiter', 'chef', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
