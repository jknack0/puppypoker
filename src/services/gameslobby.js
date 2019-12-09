import axios from 'axios'
const baseUrl = ''

const getAllGames = () => {
  const request =  axios.get('getGames')
  return request.then(response => response.data)
}

const createNewGame = () => {
  const request = axios.post('createGame')
  return request.then(response => response.data0)
}

export default {getAllGames, createNewGame}