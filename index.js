/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let employeeRecord = {}  
    employeeRecord.firstName = array[0]
    employeeRecord.familyName = array[1] 
    employeeRecord.title = array[2] 
    employeeRecord.payPerHour = array[3] 
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []
    return employeeRecord 
}

function createEmployeeRecords(employeeArray) {
    return employeeArray.map(record => createEmployeeRecord(record))

}

function createTimeInEvent(timeStamp) {
    let timeIn = {}
    timeIn.type = "TimeIn"
    let[date, hour] = timeStamp.split(' ')
    timeIn.date = date 
    timeIn.hour = parseInt(hour)
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(timeStamp) {
    let timeOut = {}
    timeOut.type = "TimeOut"
    let[date, hour] = timeStamp.split(' ')
    timeOut.date = date
    timeOut.hour = parseInt(hour)
    this.timeOutEvents.push(timeOut)
    return this

}

function hoursWorkedOnDate(date) {
    let timeInMatch = this.timeInEvents.find(r =>  r.date === date)
    let timeOutMatch = this.timeOutEvents.find(r => r.date === date)
    return ((timeOutMatch.hour) - (timeInMatch.hour)) / 100
}

function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)

}

function findEmployeeByFirstName(srcArray, firstName) { 
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeArray) {
    let wageArray = employeeArray.map(record => allWagesFor.call(record))
    return wageArray.reduce( (total, wage) => total + wage )
}