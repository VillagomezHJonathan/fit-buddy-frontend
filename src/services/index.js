import Client from './client'

export const GetUserRoutine = async (user) => {
  try {
    const res = await Client.get(`/api/routines/${user.id}`)
    return res.data
  } catch (err) {
    return null
  }
}

export const PostExercise = async (user, routine, dayName, exercisesArr) => {
  let routineId = null
  if (routine === null) {
    const routine = await Client.post(`/api/routines`, {
      name: 'Main Routine',
      user_id: user.id
    })
    routineId = routine.data.id
  } else {
    routineId = routine.id
  }

  const day = await Client.get(`/api/days/${dayName}`)
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
    const exercise = await Client.post(`/api/exercises`, newExercise)
    let exerciseId = exercise.data.id

    const newDayExercise = {
      routine_id: routineId,
      exercise_id: exerciseId,
      day_id: dayId
    }

    await Client.post(`/api/days-exercises`, newDayExercise)
  }
}
