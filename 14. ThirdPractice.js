'use strict';
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const array = [...gameEvents.values()];
const events = new Set(array);
console.log([...events]);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop(); // equal to the last event
console.log(time);
console.log(
  `A event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of [...gameEvents]) {
  console.log(`[${key < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
}
