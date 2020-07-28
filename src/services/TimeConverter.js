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
}

const getTime = (obj) => {

}

export const TimeConverter = {
    
}