import axios from 'axios'
import { FITB_API } from '../global'

const Client = axios.create({ baseURL: FITB_API })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
