import React, {useState} from 'react'
import loginServices from '../../services/login'
import history from '../../history/history'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <label>Username:</label>
        <input type='text' value={username} onChange={handleUsernameChange} /><br/>
        <label>Password:</label>
        <input type='password' value={password} onChange={handlePasswordChange} /><br />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login