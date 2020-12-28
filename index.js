const createEmployeeRecord = function(data) {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(array) {
    return array.map(createEmployeeRecord)
}

const createTimeInEvent = function(dateStamp) {
    let timeIn = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}

const createTimeOutEvent = function(dateStamp) {
    let timeOut = {
        type: 'TimeOut',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }
    this.timeOutEvents.push(timeOut)
    return this
}

const hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date).hour
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour
    let hoursWorked = (timeOut - timeIn)/100
    return hoursWorked
}

const wagesEarnedOnDate = function(date) {
    let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wages
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName)
}

const calculatePayroll = function(array) {
    return array.reduce(function(memo, x) {
        return memo + allWagesFor.call(x)
    }, 0 )

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