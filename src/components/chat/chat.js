import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';


io.connect('http://localhost:3002')

const GamesLobby = () => {
  


  return (
    <div>
      <h2>Chats Lobby</h2>
     
    </div>
    
  )
}

export default GamesLobby