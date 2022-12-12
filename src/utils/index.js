export const daysArr = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

export const monthsArr = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
]

export const getTodaysDate = () => {
  const today = new Date()
  const dayName = daysArr[today.getDay()]
  const dayIndex = daysArr.indexOf(dayName)
  const dd = today.getDate()
  const month = monthsArr[today.getMonth()]
  const year = today.getFullYear()

  const todaysDate = {
    dayName,
    month,
    dd,
    dayIndex,
    year
  }

  return todaysDate
}
