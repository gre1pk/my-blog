const defaultState = {
  article: null,
}

const articleReducer = (state = defaultState, action = {}) => {
  if (action.type === 'SET_ARTICLE') {
    return { ...state, article: action.payload }
  }
  if (action.type === 'CLEAR_ARTICLE') {
    return { ...state, article: null }
  }
  return state
}

export default articleReducer
