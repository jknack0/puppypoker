import React, {useState, useEffect} from 'react'
import Player from './Player'
import CommunityCards from './CommunityCards'
import gameState from '../../GameObject'

const GameTable = () => {
  
  return (
    <div id="table">
      {gameState.players.map((player, index) => <Player key={player.username} player={player} index={index}/>)}
      <CommunityCards cards={gameState.communityCards} currentBettingRound={gameState.currentBettingRound}/>
    </div>
     
  )
}

export default GameTable