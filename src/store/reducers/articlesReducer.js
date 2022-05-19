const defaultState = {
  articles: [],
  articlesCount: 0,
  offset: 0,
  loading: true,
  error: false,
  currentPages: 1,
}

function articlesReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        loading: false,
        error: false,
        articlesCount: action.payload.articlesCount,
        articles: [...action.payload.articles],
      }
    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case 'SET_PAGES': {
      return {
        ...state,
        currentPages: action.payload,
      }
    }
    case 'START_LOADING': {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }

    default:
      return state
  }
}

export default articlesReducer
