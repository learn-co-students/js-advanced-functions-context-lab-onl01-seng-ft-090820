/* Your Code Here */
const createEmployeeRecord = function(array) {
    return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

const createEmployeeRecords = function(array) {
    return array.map(createEmployeeRecord)
}

const createTimeInEvent = function(string) {
    let newObj = {
        type: "TimeIn",
        hour: parseInt(string.split(" ")[1]),
        date: string.split(" ")[0],
    }
    this.timeInEvents.push(newObj)
    return this
}

const createTimeOutEvent = function(string) {
    let newObj = {
        type: "TimeOut",
        hour: parseInt(string.split(" ")[1]),
        date: string.split(" ")[0],
    }
    this.timeOutEvents.push(newObj)
    return this
}

const hoursWorkedOnDate = function(string) {
    const timeIn = this.timeInEvents.find(element => element.date === string).hour
    const timeOut = this.timeOutEvents.find(element => element.date === string).hour
    return (timeOut - timeIn)/100
}

const wagesEarnedOnDate = function(string) {
let x = this.payPerHour * hoursWorkedOnDate.call(this, string)
return parseFloat(x.toString())
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

const calculatePayroll = function(array) {
    return array.reduce(function(memo, x){
        return memo + allWagesFor.call(x)
    }, 0)
}
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