import axios from 'axios'
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from '@/global'

const options = {
  // optional params key required to search by a certain criteria
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  headers: {
    'X-RapidAPI-Key': RAPIDAPI_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST
  }
}

export const GetExercises = async () => {
  const exercises = await axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return exercises
}
