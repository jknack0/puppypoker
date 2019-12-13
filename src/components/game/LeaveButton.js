import React from 'react'
import history from '../../history/history'
import leaveButtonServices from '../../services/leaveButton'

const LeaveButton = ({gameId, username}) => {

  const handleLeaveGame = () => {
    leaveButtonServices.leaveGame(gameId, username)
  }

  return (
    <button id='leave-button' onClick={handleLeaveGame}>Leave Game</button>
  )
}

export default LeaveButton