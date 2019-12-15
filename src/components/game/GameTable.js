import React, {useState, useEffect} from 'react'
import Player from './Player'
import CommunityCards from './CommunityCards'
import gameobject from '../../GameObject'
import PlayerTurnMenu from './PlayerTurnMenu'
import gameServices from '../../services/gameTable'
import io from 'socket.io-client';
import LeaveButton from './LeaveButton'
import userStore from '../../redux/userStore'
import ChatBox from '../chat/chat.jsx'
const socket = io()


const GameTable = ({match}) => {
  const [gameState, setGameState] = useState(null)
  const gameId = match.params.id

  socket.emit('join',gameId)
  
  socket.on('gameState',(data) => {
    setGameState(data)
    console.log(data)
  })
  
  
  
  
  useEffect(() => {
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
        <h2>{gameState.pot_amount}</h2>
        <LeaveButton gameId={gameId} username={userStore.getState().username} playerIndex='1' />
        {gameState.players.map((player, index) => <Player key={player.username} player={player} index={index} gameId={gameId} />)}
        <CommunityCards cards={gameState.community_cards} currentBettingRound={gameState.currentBettingRound} />
        <PlayerTurnMenu isRaised={gameState.isRaised} gameId={gameId} />
        <ChatBox />
      </div>
    )
  }
}

export default GameTable