import React, {useState, useEffect} from 'react'
import gamesLobbyServices from '../../services/gamesLobby'
import history from '../../history/history'
import {Link} from 'react-router-dom'
import './gamesLobby.css'
import ChatBox from '../chat/chat.jsx'
import userStore from '../../redux/userStore'



const GamesLobby = () => {

  const [games, setGames] = useState('null')

  useEffect(() => {
    if(userStore.getState().username === '') {
      history.push('/login')
    }
    
    gamesLobbyServices
      .getAllGames()
      .then(currentGames => {
        console.log(currentGames)
        setGames(currentGames)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if(games === null) {
    return (
      <h2>Loading...</h2>
    )
  } else {
    return (
      <div className='game-lobby-container'>
        <div className='userInfo'>
          {userBox()}
        </div>
        <div className='chat'>
            <ChatBox/>
        </div> 
        <div className='games'>
            {gameBoxes()}
        </div>
  
      </div>
    )
  }

 
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
  const handleLogout = () => {
    userStore.dispatch({type: 'LOGOUT_USER'})
    history.push('/')
  }

  const createNewGame = () => {
    gamesLobbyServices
      .createNewGame()
      .then(() => {

      })
      .catch(error => {
        console.log(error)
        history.push('/gameslobby')
      })
  }

  return(
      <div>
        <div className='lobby-username'>
          <h2>{userStore.getState().username}</h2>
        </div>
          <div className='winnings'>
            <h4>Winnings:</h4>
          </div>

        <div className='userInfo'>
          <img src='./profileIcon.png' id="profile-logo" />
          <button type="button" className='log-out' onClick={handleLogout}>Log Out</button><br/>
          <button type="button" className='create-game' onClick={createNewGame}>Create Game</button><br/>
        </div>
        </div>
  )
}

export default GamesLobby