console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Spongebob', hand: [] },
  { name: 'Patrick', hand: [] },
  { name: 'Squidward', hand: [] },
  { name: 'Sandy', hand: [] },
];

const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const deck = [];

// push all cards into the deck

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({ rank, suit });
  }
}

// Use the lodash libary .shuffle function which returns a new shuffled array
const shuffledDeck = _.shuffle(deck);

// Deal two cards to each player
function dealCardsToPlayers(players, deck) {
  const numPlayers = players.length;
  const numCardsDealt = 2;

  for (let i = 0; i < numCardsDealt; i++) {
    for (let j = 0; j < numPlayers; j++) {
      const card = deck.pop();
      players[j].hand.push(card);
    }
  }
}

dealCardsToPlayers(players, shuffledDeck);

function calculateHandScore(hand) {
  const cardValues = {
    Ace: 11,
    King: 10,
    Queen: 10,
    Jack: 10,
  };

  return _.sumBy(
    hand,
    (card) => cardValues[card.rank] || parseInt(card.rank, 10)
  );
}

const winner = _.maxBy(players, (player) => calculateHandScore(player.hand));

console.log(
  `The winning player is ${winner.name} with score of ${calculateHandScore(
    winner.hand
  )}`
);
