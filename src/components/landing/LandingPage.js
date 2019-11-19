import React from 'react'
import {Link} from 'react-router-dom'
const LandingPage = () => {
  return (
    <div id="landing-page">
      <img src='mainLogo.png' id="main-logo" />
      <Link to='/login'><button id="login" class="landing-button">Login</button></Link>
      <Link to='/register'><button id="register" class="landing-button">Register</button></Link>
    </div>
    
  )
}

export default LandingPage