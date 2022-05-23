import axios from 'axios'

class ArticlesServices {
  baseUrl = 'https://kata.academy:8021'

  async getResponce(url) {
    try {
      const result = await axios.get(`${this.baseUrl}/${url}`)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }

      return result.data
    } catch (err) {
      throw new Error(err)
    }
  }

  async postResponce(url, options) {
    try {
      const result = await axios.post(`${this.baseUrl}/${url}`, options)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }

      return result.data
    } catch (err) {
      throw new Error(err)
    }
  }

  async putResponce(url, options) {
    try {
      const result = await axios.put(`${this.baseUrl}/${url}`, options)
      if (result.statusText !== 'OK') {
        throw new Error(result.status)
      }

      return result.data
    } catch (err) {
      throw new Error(err)
    }
  }

  async getArticles(offset = 0) {
    const res = await this.getResponce(`api/articles?limit=5&offset=${offset}`)
    return res
  }

  async getArticle(slug) {
    const res = await this.getResponce(`api/articles/${slug}`)
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
    const res = await this.putResponce('api/users/login', { user: data, headers: { Authorization: `Token ${token}` } })
    return res
  }
}

export default ArticlesServices
