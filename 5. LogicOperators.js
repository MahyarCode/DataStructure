// TODO SHORT CIRCUITING
// DESC OR || :this will return the first truthy value or the if there is no truthy value, then return the last falsy value
console.log(undefined || 0 || 'hello' || '');
console.log(undefined || 0 || '' || null);

// DESC AND && :this will return the first falsy value or the if there is no falsy value, then return the last truthy value
console.log(1 && 'hello' && 23 && undefined && [12]);
console.log(1 && 'hello' && 23 && { a: 23 } && [12]);

// TODO NULLISH COALESCING
// DESC it returns the value of a variable. if it is defined before, then no problem; but if it doesn't declared before, we can set a default value for it:
const a = 3;
const b = null;
const total = a ?? 10;
const notTotal = b ?? 20;
console.log(`total: ${total}, notTotal: ${notTotal}`);

// NOTE (0 and '') are defined values in nullish coalescing and it returns 0 and '' if these are their value.

const rest1 = {
  name: 'capri',
  numGuests: 20,
};
const rest2 = {
  name: 'Lapizazza',
  owner: 'giavonni rossi',
};

// TODO OR assignment operator: IF it is true, then assign the left side
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// TODO AND assignment: IF it is false, then assign the left side
// NOTE it assigns new variable to the rest1 object (owner: undefined)
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// NOTE it assigns value to a variable if it is currently truthy (nothing for rest1 object)
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// TODO nullish assignment operator:
// rest1.numGuests = rest1.numGuests ?? 10
// rest2.numGuests = rest2.numGuests ?? 10
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);
