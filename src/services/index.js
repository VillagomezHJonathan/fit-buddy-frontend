import Client from './client'
import { FITB_API } from '@/global'

export const GetUserRoutine = async (user) => {
  const res = await Client.get(`${FITB_API}/api/routines/${user.id}`)
  return res.data
}

export const PostExercise = async (user, routine, dayName, exercisesArr) => {
  let routineId = null
  if (routine) {
    routineId = routine.id
  } else {
    const routine = await Client.post(`${FITB_API}/api/routines`, {
      name: 'Main Routine',
      user_id: user.id
    })
    routineId = routine.data.id
  }

  const day = await Client.get(`${FITB_API}/api/days/${dayName}`)
  let dayId = day.data.id

  for (let e of exercisesArr) {
    const newExercise = {
      name: e.name,
      type: e.type,
      muscle: e.muscle,
      equipment: e.equipment,
      instructions: 'Instructions',
      sets: e.sets,
      reps: e.reps,
      duration: e.duration
    }
    const exercise = await Client.post(`${FITB_API}/api/exercises`, newExercise)
    let exerciseId = exercise.data.id

    const newDayExercise = {
      routine_id: routineId,
      exercise_id: exerciseId,
      day_id: dayId
    }

    await Client.post(`${FITB_API}/api/days-exercises`, newDayExercise)
  }
}

// export const PostExercise = async (routine, dayName) => {
//   if (!routine || !routine.length) {
//     const routine = await Client.post(`${FITB_API}/api/routines`, {
//       name: 'Main',
//       user_id: 1
//     })
//   }

//   const day = await Client.get(`${FITB_API}/api/days/${dayName}`)

//   console.log(day)
// }
