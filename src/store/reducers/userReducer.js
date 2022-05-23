const defaultState = {
  isLogin: false,
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
      }
    default:
      return state
  }
}

export default userReducer
