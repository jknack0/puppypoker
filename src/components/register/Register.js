import React, {useState} from 'react'
import registerServices from '../../services/register'
import history from '../../history/history'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const submitNewUser = (event) => {
    event.preventDefault()

    if(username.length === 0 || password.length === 0 || email.length === 0) {
      alert('Make sure you\'ve filled in all of the fields')
    } else if (password !== repeatPassword) {
      alert('Your passwords don\'t match')
    } else {
      const newUserObject = {
        username: username,
        password: password,
        email: email,
      }
      registerServices
        .register(newUserObject)
        .then(() => {
          setEmail('')
          setUsername('')
          setPassword('')
          setRepeatPassword('')
          alert('You have successfully registered please log in to play!')
          history.push('/')
        })
    }
  }

  return (
    <div class="user-input">
      <img src='mainLogo.png' id='register-logo'/>
      <form onSubmit={submitNewUser}>
        <input type='text' onChange={handleUsernameChange} value='Username'/><br />
        <input type='password' onChange={handlePasswordChange} value='Password'/><br />
        <input type='password' onChange={handleRepeatPasswordChange} value='Password'/><br />
        <input type="email" onChange={handleEmailChange} value='Email'/><br />
        <input type='submit' value='Register'/>
      </form>
    </div>
  )
}

export default Register