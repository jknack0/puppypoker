import React from 'react'
import Register from './components/register/Register'
import Login from './components/login/Login'
import GamesLobby from './components/gamesLobby/GamesLobby'
import GameTable from './components/game/GameTable'
import LandingPage from './components/landing/LandingPage'
import {Router, Switch, Route} from 'react-router-dom'
import history from './history/history'
import './App.css'

//Amir 
import chat from './components/chat/chat'

const App = () => {

  return (
    <Router history={history}>
      <div id="app">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/gameslobby" exact component={GamesLobby} />
          <Route path="/gameslobby/:id" component={GameTable} />
          <Route path="/chat" component={chat} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
