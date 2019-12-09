import axios from 'axios'
import userStore from '../redux/userStore'

const joinGame = (gameId) => {
  const request =  axios.post(`${gameId}/${userStore.getState().username}/joingame`)
  return request.then(response => response.data)
}

export default {joinGame}