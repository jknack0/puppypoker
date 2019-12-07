import React from 'react'
import playerTurnServices from '../../services/playerTurnMenu'

const PlayerTurnMenu = ({potRaised, playerTurn, gameId}) => {
  const handleCheck = () => {
    playerTurnServices
      .check(gameId)
      .then(() => {
        console.log('player checked')
      })
      .catch(() => {
        console.log('player checked')
      })
  }
  
  const handleBet = () => {
    playerTurnServices
    .bet(gameId)
    .then(() => {
      console.log('player bet')
    })
    .catch(() => {
      console.log('player bet')
    })
  }

  const handleCall = () => {
    playerTurnServices
    .call(gameId)
    .then(() => {
      console.log('player call')
    })
    .catch(() => {
      console.log('player call')
    })
  }

  const handleRaise = () => {
    playerTurnServices
    .raise(gameId)
    .then(() => {
      console.log('player raise')
    })
    .catch(() => {
      console.log('player raise')
    })
  }

  const handleFold = () => {
    playerTurnServices
    .fold(gameId)
    .then(() => {
      console.log('player fold')
    })
    .catch(() => {
      console.log('player fold')
    })
  }


  if(!potRaised){
    return (
      <div className="player-turn-menu">
        <button onClick={handleCall}>Call</button>
        <button onClick={handleRaise}>Raise</button>
        <button onClick={handleFold}>Fold</button>
      </div>
    )
  } else {
    return (
      <div className="player-turn-menu">
        <button onClick={handleCheck}>Check</button>
        <button onClick={handleBet}>Bet</button>
        <button onClick={handleFold}>Fold</button>
      </div>
    )
  }
}

export default PlayerTurnMenu