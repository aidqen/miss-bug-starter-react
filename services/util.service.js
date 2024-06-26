import fs from 'fs'

export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    readJsonFile,
    writeJsonFile,
    formatDate
}

function readJsonFile(path) {
    const str = fs.readFileSync(path, 'utf8')
    const json = JSON.parse(str)
    return json
}

function writeJsonFile(path, data) {
    return new Promise((resolve, reject) => {
        const jsonData = JSON.stringify(data, null, 2)

        fs.writeFile(path, jsonData, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function formatDate(timestamp) {
    console.log('date');
    const date = new Date(timestamp)
  
    // Helper functions to get day and month names
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
    // Get day of the week, month, day, hours, and minutes
    const dayOfWeek = daysOfWeek[date.getDay()]
    const month = monthsOfYear[date.getMonth()]
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
  
    // Format hours and minutes for 12-hour clock
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const period = hours < 12 ? 'AM' : 'PM'
  
    // Calculate the relative time (e.g., "2 days ago")
    const now = new Date()
    const timeDifference = now - date
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const relativeTime = daysDifference === 0 ? 'today' : daysDifference === 1 ? 'yesterday' : `${daysDifference} days ago`
  
    // Construct the formatted date string
    return `${dayOfWeek}, ${month} ${day}, ${formattedHours}:${formattedMinutes} ${period} (${relativeTime})`
  }