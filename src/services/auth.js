import axios from 'axios'
import { FITB_API } from '@/global'

export const Register = async (data) => {
  const res = await axios.post(`${FITB_API}/auth/register`, data)
  return res.data
}
