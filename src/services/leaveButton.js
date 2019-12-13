import axios from 'axios'
import history from '../history/history'
import io from 'socket.io-client'


const leaveGame = (gameId, username, playerIndex) => {
  const socket = io()
  axios.post(`${gameId}/${username}/leave`)
  .then(response => {
    socket.emit('disconnect')
    history.push('/gameslobby')
  })
  .catch(error => {
    history.push('/gameslobby')
    console.log(error)
  })
}

export default {leaveGame}