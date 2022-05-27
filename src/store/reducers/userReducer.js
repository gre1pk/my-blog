const defaultState = {
  isLogin: false,
  errMasage: null,
  userName: null,
  email: null,
  token: null,
  bio: null,
  image: null,
}

function userReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        isLogin: true,
        errMasage: null,
        userName: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
        bio: action.payload.bio,
        image: action.payload.image,
      }
    case 'USER_UPDATE':
      return {
        ...state,
        userName: action.payload.username,
        email: action.payload.email,
        image: action.payload.image,
        token: action.payload.token,
      }

    case 'LOG_OUT': {
      return { ...state, isLogin: false, userName: null, email: null, token: null, bio: null, image: null }
    }

    case 'ERR_MSG': {
      return {
        ...state,
        errMasage: action.payload,
      }
    }

    case 'CLEAR_ERR_MSG': {
      return {
        ...state,
        errMasage: null,
      }
    }

    default:
      return state
  }
}

export default userReducer
