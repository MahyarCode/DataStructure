'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}`);

// 2.
let sum = 0;
for (const [key, value] of Object.entries(game.odds)) {
  sum += value;
}
console.log(sum / 3);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${
      game?.[key]
        ? 'victory' + ' ' + game[key] + ': ' + value
        : 'draw: ' + value
    }`
  );
}

// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
