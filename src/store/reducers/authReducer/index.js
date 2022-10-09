const initialState = {
  token: null,
  username: null,
  mail: null,
  birthdate: null,
}

// ECMAScript 5: Tüm browserlar bunu destekler
// const axios = require('axios')
// const Home = require('./Home')
// ECMAScript 6: Tüm browserlar bunu desteklemez, nodejs bunu destekler.
// import axios from 'axios'
// import Home from '../../../pages/home'

export const setToken = (dispatch, value) => {
  dispatch({
    type: 'set_token',
    payload: {
      token: value,
    },
  })
}

module.exports = {setToken}

export const setUsername = (dispatch, username) => {
  dispatch({
    type: 'set_token',
    payload: {
      username: username,
    },
  })
}

const authReducer = (state = initialState, action) => {
  console.log('>> AUTH REDUCER', state, action)

  //action.type
  //action.payload

  switch (action.type) {
    case 'set_token':
      console.log('>> AUTH REDUCER SET TOKEN', action.payload)
      return {
        ...state,
        token: action.payload.token,
      }

    case 'remove_token':
      return {
        ...state,
        token: null,
      }

    default:
      return state
  }
}

export default authReducer
