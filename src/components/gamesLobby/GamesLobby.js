import React, {useState, useEffect} from 'react'
import GameTile from './GameTile'
import gamesLobbyServices from '../../services/gamesLobby'
import history from '../../history/history'
import {Link} from 'react-router-dom'
import './gamesLobby.css'
import ChatBox from '../chat/chat.jsx'

const GamesLobby = () => {
  const [games, setGames] = useState([])

  const gamesArray = [
    {
      id: 1,
      players: 5,
    },
    {
      id: 2,
      players: 3,
    },
    {
      id: 3,
      players: 7,
    },
    {
      id: 4,
      players: 9,
    },
    {
      id: 5,
      players: 5,
    },
  ]

  useEffect(() => {
    gamesLobbyServices
      .getAllGames()
      .then(currentGames => {
        setGames(currentGames)
      })
  }, [])

  return (
    <div>
      {/* <h2>Games Lobby</h2> */}
      {/* <p>{Grid}</p>
      {games.map(game => <GameTile key={game.id} gameId={game.id} players={game.players} />)} */}
      <div className='userInfo'>
        {/* user section */}
        {userBox()}
      </div>
      <div className='chat'>
          {/* chat section */}
          {/* {Barks()} */}
          <ChatBox/>
      </div> 
      <div className='games'>
          game section
          {gameBoxes()}
      </div>

    </div>

    
  )
}
const gameBoxes =() =>{
  return(
    <div>
    <div className='game-tiles'>
      <form>
      <input type="submit" value="Enter Game" title="Enter Game" className='enter-game-button'></input>
      </form>
    </div>
    </div>
  )
}

const userBox = () =>{
  return(
      <div>
        <div className='lobby-username'>
          <h3>Username</h3>
          
          </div>
          <div className='winnings'>
            <h4>Winnings:</h4>
          </div>

        <div className='userInfo'>
          <img src='profileIcon.png' id="profile-logo" />
          
          <button type="button" className='log-out'>Log Out</button><br/>
          <button type="button" className='settings'>Settings</button><br/>
          <button type="button" className='create-game'>Create Game</button><br/>
          </div>
        </div>
  )
}

const Barks = () => {

  return(
    <div>
      <form>
        <input type="text" placeholder="Enter Message" className='barks-box'></input>
        <input type="submit" value="Send" title="Send" className='barks-send-button'></input>
      </form>
    </div>
  )
}

export default GamesLobby