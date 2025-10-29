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
// const [players1, players2] = [game.players[0], game.players[1]];
const [players1, players2] = game.players;
// 2.
const [gk1, ...otherPlayer1] = players1;
const [gk2, ...otherPlayer2] = players2;
// 3.
const allPlayers = [...players1, ...players2];
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Persic'];
// 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...names) {
  console.log(`${names.length} goals were scored`);
};

printGoals(...game.scored);
// 7.

const condition = game.odds.team1 < game.odds.team2;
console.log(`Team ${condition ? '1' : '2'} is more likely to win`);
