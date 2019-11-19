import {createStore} from 'redux'

const initialState = {
  username: '',
  
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': 
      const userObject = {
        ...state,
        username: action.data.username,
      }
      return userObject
    default:
      return state
  }
}

const userStore = createStore(userReducer)

export default userStore