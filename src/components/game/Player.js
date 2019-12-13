import React from 'react'
import Card from './Card'
import playerServices from '../../services/player'

const Player = ({player, index, gameId}) => {
  const joinGame = () => {
    playerServices
    .joinGame(gameId, index)
    .then(() => {
      console.log('success')
    })
    .catch(error => {
      console.log(error)
    })
  }

  console.log(player)

  if(player.username === null) {
    return(
      <div id={`player${index}`}>
        <button className="join-button" onClick={joinGame}>Join Game</button>
      </div>
    )
  } else if (player.isInHand) {
    return (
      <div className="player" id={`player${index}`}>
        <div id="card">
          {player.holeCards.map((card, i) => <Card key={i} card={card} />)}
        </div>
        <div className="play-text-info">
          <div>
            {player.username}
          </div>
          <div>
            Chips: {player.chipCount}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="not-in-hand" id={`player${index}`}>
        <div className="play-text-info">
          <div>
            {player.username}
          </div>
          <div>
            Chips: {player.chipCount}
          </div>
        </div>
      </div>
    )
  }
}

export default Player