import Client from './client'
import { FITB_API } from '../global'

export const Register = async (data) => {
  const res = await Client.post(`${FITB_API}/auth/register`, data)
  return res.data
}

export const LoginUser = async (data) => {
  const res = await Client.post('/auth/login', data)
  localStorage.setItem('token', res.data.token)
  return res.data.user
}

export const CheckSession = async () => {
  const res = await Client.get('/auth/session')
  return res.data
}
