const initialState = {
  appData: null,
}

const appDataReducer = (state = initialState, action) => {
  console.log('>> APP DATA REDUCER', state, action)

  switch (action.type) {
    case 'set_app_data':
      return {
        ...state,
        appData: action.payload.appData,
      }

    case 'remove_app_data':
      return {
        ...state,
        appData: null,
      }

    default:
      return state
  }
}


export default appDataReducer