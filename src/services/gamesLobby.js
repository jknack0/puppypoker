import axios from 'axios'

const getAllGames = () => {
  const request =  axios.get('gameslobby/allGames')
  return request.then(response => response.data)
}

const createNewGame = () => {
  const request = axios.post('gameslobby/createGame')
  return request.then(response => response.data0)
}

export default {getAllGames, createNewGame}
