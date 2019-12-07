const gameobject = {
  currentPot: 0,
  currentBettingRound: {
    isPreflop: false,
    isFlop: false,
    isTurn: false,
    isRiver: false,
    isOver: false,
  },
  communityCards: [
    "AC", "AC", "AC", "AC", "AC"
  ],
  players: [
    {
      username: "player1",
      isInHand: true,
      chipCount: 200,
      currentBet:0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: 'shit',
      isInHand: true,
      chipCount : 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player3",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player4",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player5",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player6",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player7",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "shire",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    },
    {
      username: "player9",
      isInHand: true,
      chipCount: 200,
      currentBet: 0,
      holeCards: [
        "AC", "AC"
      ]
    }
  ]
}

export default gameobject