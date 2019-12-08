import axios from 'axios'

const getGameState = (gameId) => {
  const request =  axios.get(`${gameId}/getGame`)
  return request.then(response => response.data)
}

export default {getGameState}