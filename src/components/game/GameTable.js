import React, {useState, useEffect} from 'react'
import Player from './Player'
import CommunityCards from './CommunityCards'
import gameobject from '../../GameObject'
import PlayerTurnMenu from './PlayerTurnMenu'
import gameServices from '../../services/gameTable'
import io from 'socket.io-client';

const socket = io()

socket.on('gameState',(data)=>{
  console.log(data)
})


const GameTable = ({match}) => {
  const [gameState, setGameState] = useState(null)
  const gameId = match.params.id

  socket.on('gameState',(data) => {
    setGameState(data)
  })

  useEffect(() => {

    socket.emit('join',gameId)
    
    gameServices
    .getGameState(gameId)
    .then(initialGameState => {
      setGameState(initialGameState)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  if(gameState === null){
    return (
      <div><h2>Loading...</h2></div>
    )
  } else {
    return (
      <div id="table">
        {gameState.players.map((player, index) => <Player key={player.username} player={player} index={index} gameId={gameId} />)}
        <CommunityCards cards={gameState.community_cards} currentBettingRound={gameState.currentBettingRound} />
        <PlayerTurnMenu isRaised={gameState.isRaised} gameId={gameId} />
      </div>
    )
  }
}

export default GameTable