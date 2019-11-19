import React, {useState, useEffect} from 'react'
import GameTile from './GameTile'
import gamesLobbyServices from '../../services/gameslobby'
import history from '../../history/history'

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
      <h2>Games Lobby</h2>
      {games.map(game => <GameTile key={game.id} gameId={game.id} players={game.players} />)}
    </div>
    
  )
}

export default GamesLobby