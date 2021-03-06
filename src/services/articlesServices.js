import axios from 'axios'

class ArticlesServices {
  baseUrl = 'https://kata.academy:8021'

  async getResponce(url, token) {
    const options = token
      ? {
          headers: { Authorization: `Token ${token}` },
        }
      : null
    try {
      const result = await axios.get(`${this.baseUrl}/${url}`, options)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }

      return result.data
    } catch (err) {
      throw new Error(err.response.status)
    }
  }

  async postResponce(url, ...options) {
    try {
      const result = await axios.post(`${this.baseUrl}/${url}`, ...options)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }
      return result.data
    } catch (err) {
      throw new Error(err.response.status)
    }
  }

  async putResponce(url, ...optional) {
    try {
      const result = await axios.put(`${this.baseUrl}/${url}`, ...optional)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }
      return result.data
    } catch (err) {
      throw new Error(err.response.status)
    }
  }

  async deleteResponce(url, ...optional) {
    try {
      const result = await axios.delete(`${this.baseUrl}/${url}`, ...optional)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }

      return result.data
    } catch (err) {
      throw new Error(err.response.status)
    }
  }

  async getArticles(offset = 0, token = null) {
    const res = await this.getResponce(`api/articles?limit=5&offset=${offset}`, token)
    return res
  }

  async getArticle(slug, token) {
    const res = await this.getResponce(`api/articles/${slug}`, token)
    return res
  }

  async postRegistorUser(data = {}) {
    const res = await this.postResponce('api/users', { user: data })
    return res
  }

  async postLoginUser(data = {}) {
    const res = await this.postResponce('api/users/login', { user: data })
    return res
  }

  async putEditUser(data = {}, token = '') {
    const res = await this.putResponce(
      'api/user',
      {
        user: data,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
    return res
  }

  async postCreateArticle(data = {}, token = '') {
    const res = await this.postResponce(
      'api/articles',
      {
        article: data,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
    return res
  }

  async putUpdateArticle(data = {}, slug = '', token = '') {
    const res = await this.putResponce(
      `api/articles/${slug}`,
      { article: data },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
    return res
  }

  async deleteArticle(slug, token) {
    const res = await this.deleteResponce(`api/articles/${slug}`, {
      headers: { Authorization: `Token ${token}` },
    })
    return res
  }

  async postFavoriteArticle(slug, token) {
    const res = await this.postResponce(
      `api/articles/${slug}/favorite`,
      {},
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
    return res
  }

  async deleteFavoriteArticle(slug, token) {
    const res = await this.deleteResponce(`api/articles/${slug}/favorite`, {
      headers: { Authorization: `Token ${token}` },
    })
    return res
  }
}

export default ArticlesServices
