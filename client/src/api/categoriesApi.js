import axios from '../services/api'

const categoriesApi = {
  getCategories: () => {
    const url = '/categories'
    return axios.get(url)
  },
}

export default categoriesApi
