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
    let newEmployee = { }
    newEmployee.firstName = array[0] 
    newEmployee.familyName = array[1]
    newEmployee.title = array[2]
    newEmployee.payPerHour = array[3]
    newEmployee.timeInEvents = []
    newEmployee.timeOutEvents = []
    return newEmployee
}

function createEmployeeRecords(arrayOfArrays) {
    let records = arrayOfArrays.map(createEmployeeRecord)
    return records
}

function createTimeInEvent(datestamp) {
    let timeInEvent = {}
    timeInEvent.type = "TimeIn"
    timeInEvent.hour = parseInt(datestamp.split(" ")[1])
    timeInEvent.date = datestamp.split(" ")[0]
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(datestamp) {
    let timeOutEvent = {}
    timeOutEvent.type = "TimeOut"
    timeOutEvent.hour = parseInt(datestamp.split(" ")[1])
    timeOutEvent.date = datestamp.split(" ")[0]
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(datestamp) {
    let start = this.timeInEvents.find(event => event.date === datestamp)
    let end = this.timeOutEvents.find(event => event.date === datestamp)
    let hoursWorked = (end.hour - start.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(datestamp) {
    let hours = hoursWorkedOnDate.call(this, datestamp)
    let earnings = hours * this.payPerHour
    return earnings
}

function allWagesFor(empRecord) {
    let dates = empRecord.timeInEvents.map(event => event.date)
    let dailyPays = dates.map(date => wagesEarnedOnDate(empRecord, date))
    let allWages = dailyPays.reduce(function(total, wages){
        return wages + total
    })
    return allWages
}

function calculatePayroll(records) {
    let pays = records.map(emp => allWagesFor.call(emp))
    let allPay = pays.reduce(function(total, pays){
        return pays + total
    })
    return allPay
}

function findEmployeeByFirstName(srcArray, firstName) {
    let employee = srcArray.find(emp => emp.firstName === firstName)
    return employee
}
