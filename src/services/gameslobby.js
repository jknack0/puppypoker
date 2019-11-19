import axios from 'axios'
const baseUrl = 'gameslobby'

const getAllGames = () => {
  const request =  axios.get(baseUrl)
  return request.then(response => response.data)
}

export default {getAllGames}