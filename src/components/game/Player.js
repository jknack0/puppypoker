import React from 'react'
import Card from './Card'

const Player = ({player, index}) => {
  if(player.username === null) {
    return(
      <div id={`player${index}`}>
        <button className="join-button  ">Join Game</button>
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