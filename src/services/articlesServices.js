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

  async getArticles(offset = 0) {
    const res = await this.getResponce(`api/articles?limit=5&offset=${offset}`)
    return res
  }

  async getArticle(slug) {
    const res = await this.getResponce(`api/articles/${slug}`)
    return res
  }
}

export default ArticlesServices
