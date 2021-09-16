import axios from '../services/api'

const newsApi = {
  getNews: (params) => {
    const url = '/news'
    return axios.get(url, { params })
  },

  getNewsByCategory: (category, params) => {
    const url = `/news/${category}`
    return axios.get(url, { params })
  },
}

export default newsApi
