const defaultState = {
  article: null,
  isError: false,
}

const articleReducer = (state = defaultState, action = {}) => {
  if (action.type === 'SET_ARTICLE') {
    return { ...state, article: action.payload }
  }
  if (action.type === 'CLEAR_ARTICLE') {
    return { ...state, article: null, isError: false }
  }

  if (action.type === 'IS_ERROR') {
    return { ...state, isError: true }
  }
  return state
}

export default articleReducer
