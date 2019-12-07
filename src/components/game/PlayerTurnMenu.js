import React, {useState} from 'react'

const PlayerTurnMenu = ({gameState, setGameState}) => {
  console.log(gameState)

  const handleCheck = () => {
    const updatedGameState = {...gameState}
    updatedGameState.currentPot += 100
    console.log(gameState)
    console.log(updatedGameState)
    setGameState(updatedGameState)
  }
  
  const handleBet = () => {

  }

  const handleCall = () => {
    
  }

  const handleRaise = () => {

  }

  const handleFold = () => {

  }


  if(!gameState.potRaised){
    return (
      <div className="player-turn-menu">
        <button>Call</button>
        <button>Raise</button>
        <button onClick={handleCheck}>Fold</button>
      </div>
    )
  } else {
    return (
      <div className="player-turn-menu">
        <button>Check</button>
        <button>Bet</button>
        <button>Fold</button>
      </div>
    )
  }
}

export default PlayerTurnMenu