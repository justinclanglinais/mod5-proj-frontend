// ["Tue", "Jul", "28", "2020", "01:27:00", "GMT-0700", "(Pacific", "Daylight", "Time)"]

const formatDay = (day) => {
    if (day === "Sun") {
        return "Sunday"
    } else if (day === "Mon") {
        return "Monday"
    } else if (day === "Tue") {
        return "Tuesday"
    } else if (day === "Wed") {
        return "Wednesday"
    } else if (day === "Thu") {
        return "Thursday"
    } else if (day === "Fri") {
        return "Friday"
    } else if (day === "Sat") {
        return "Saturday"
    }
}

const formatMonth = (month) => {
    if (month === "Jan") {
        return "January"
    } else if (month === "Feb") {
        return "February"
    } else if (month === "Mar") {
        return "March"
    } else if (month === "Apr") {
        return "April"
    } else if (month === "May") {
        return "May"
    } else if (month === "Jun") {
        return "June"
    } else if (month === "Jul") {
        return "July"
    } else if (month === "Aug") {
        return "August"
    } else if (month === "Sep") {
        return "September"
    } else if (month === "Oct") {
        return "October"
    } else if (month === "Nov") {
        return "November"
    } else if (month === "Dec") {
        return "December"
    }
}

const getDay = (obj) => {
    let dateTime = new Date(obj.toString())
    let arr = dateTime.toString().split(" ")
    let formattedDay = formatDay(arr[0])
    let formattedMonth = formatMonth(arr[1])
    return `${formattedDay} - ${formattedMonth} ${arr[2]}, ${arr[3]}`
}

const getTime = (obj) => {
    let dateTime = new Date(obj.toString())
    let arr = dateTime.toString().split(" ")
    let time = arr[4]
    let timeArr = time.split(":")
    let ampm = ''
    if (timeArr[0] > 12) {
        return `${timeArr[0]-12}:${timeArr[1]} PM`
    } else if (timeArr[0] < 10) {
        let temp = timeArr[0].split('')[1]
        return `${temp}:${timeArr[1]} AM`
    } else {
        return `${timeArr[0]}:${timeArr[1]} AM`
    }
}

export const TimeConverter = {
    getDay,
    getTime
}