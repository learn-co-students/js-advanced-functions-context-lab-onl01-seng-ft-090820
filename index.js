/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(arr){
    return arr.map(createEmployeeRecord)
}

const createTimeInEvent = function(stamp){
    let [date, hour] = stamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const createTimeOutEvent = function(stamp){
    let [date, hour] = stamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date).hour
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour
    return (timeOut -timeIn)/100
}

const wagesEarnedOnDate = function(stamp){
    let wages = hoursWorkedOnDate.call(this, stamp) * this.payPerHour
    return parseFloat(wages.toString())
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(arr, name){
    return arr.find(n => n.firstName === name)
}

const calculatePayroll = function(arr){
    return arr.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
