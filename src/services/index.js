import Client from './client'
import { FITB_API } from '@/global'

export const GetUserRoutine = async (user) => {
  const res = await Client.get(`${FITB_API}/api/routines/${user.id}`)
  return res.data
}

export const PostExercise = async (routine, dayName) => {
  const exercise = await Client.post(`${FITB_API}/api/exercises`)
  const day = await Client.get(`${FITB_API}/api/days/${dayName}`)

  console.log(exercise, day)
}
