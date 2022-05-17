export const setArticleList = (articles) => ({ type: 'SET_ARTICLES', payload: articles })

export const setArticlesCount = (count) => ({ type: 'SET_ARTICLES_COUNT', payload: count }) // ne nado

export const loadError = { type: 'ERROR' }

export const setPages = (num) => ({ type: 'SET_PAGES', payload: num })
