import React, {useState} from 'react'
import loginServices from '../../services/login'
import history from '../../history/history'

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
          setUsername('')
          setPassword('')
          history.push('/gametable')
        })
        .catch(error => {
          console.log(error)
        })
      }
  }

  return (
    <div class="user-input">
      <img src='mainLogo.png' id='login-logo'/>
      <form onSubmit={submitForm}>
        <input type='text' value={username} onChange={handleUsernameChange} /><br/>
        <input type='password' value={password} onChange={handlePasswordChange} /><br />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login