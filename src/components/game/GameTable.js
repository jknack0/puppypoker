import React from 'react'
import Player from './Player'
import CommunityCards from './CommunityCards'

const GameTable = ({gameState}) => {

  return (
    <div id="table">
      {gameState.players.map((player, index) => <Player key={player.username} player={player} index={index}/>)}
      <CommunityCards cards={gameState.communityCards} currentBettingRound={gameState.currentBettingRound}/>
    </div>
     
  )
}

export default GameTable