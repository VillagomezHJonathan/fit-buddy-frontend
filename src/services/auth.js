import axios from 'axios'
import { FITB_API } from '@/global'

const Register = async (data) => {
  try {
    const res = await axios.post(`${FITB_API}/auth/register`, data)
    return res.data
  } catch (err) {
    throw err
  }
}
