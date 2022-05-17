const defaultState = {
  articles: [],
  articlesCount: 0,
  offset: 0,
  loading: true,
  error: false,
  currentPages: 1,
}

function articlesReduser(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        loading: false,
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

    default:
      return state
  }
}

export default articlesReduser
