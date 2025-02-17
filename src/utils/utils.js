export const formatDate = (str) => {
    const date = new Date(str)
    const dateStr = date.toString()
    const split = dateStr.toString().split(' ')
    const timeSplit = split[4].split(':')
    const hours = timeSplit[0]
    const mins = timeSplit[1]
    const weekday = split[0]
    const day = split[2]
    const month = split[1]
    const year = split[3]
    return `${hours}:${mins}, ${weekday} ${day} ${month} ${year}`
}