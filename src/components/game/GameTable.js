import React, {useState, useEffect} from 'react'
import Player from './Player'
import CommunityCards from './CommunityCards'
import gamestate from '../../GameObject'
import PlayerTurnMenu from './PlayerTurnMenu'

const GameTable = () => {
  const [gameState, setGameState] = useState(gamestate)
  
  return (
    <div id="table">
      {gameState.players.map((player, index) => <Player key={player.username} player={player} index={index}/>)}
      <CommunityCards cards={gameState.communityCards} currentBettingRound={gameState.currentBettingRound}/>
      <PlayerTurnMenu gameState={gameState} setGameState={setGameState}/>
    </div>
     
  )
}

export default GameTable