import React, {useState} from 'react'
import loginServices from '../../services/login'
import history from '../../history/history'
import userStore from '../../redux/userStore'

const Login = () => {
  const [username, setUsername] = useState('Username')
  const [password, setPassword] = useState('Password')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()
    if(username.length === 0 || password.length === 0) {
      alert('Please enter your username and password.')
    } else {
      const loginObject = {
        username: username,
        password: password,
      }
      loginServices
        .login(loginObject)
        .then(() => {
          history.push('/gameslobby')
        })
        .catch(error => {
          userStore.dispatch({
            type: 'LOGIN_USER',
            data: {
              username: loginObject.username
            }
          })
          console.log(userStore.getState())
        })
      }
  }

  return (
    <div className="user-input">
      <img src='mainLogo.png' id='login-logo' alt='Logo for puppy poker' />
      <form onSubmit={submitForm}>
        <input type='text' value={username} onChange={handleUsernameChange} /><br/>
        <input type='password' value={password} onChange={handlePasswordChange} /><br />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login