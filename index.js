// Your code here

function createEmployeeRecord(array){
    let records
    return records = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array [3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(obj, dateStamp){
    return {type: obj, date: dateStamp.slice(0,10), hour:
    parseInt(dateStamp.slice(-4))
    }
}

function createTimeOutEvent(objs, dateStamp){
    objs.timeInEvents.push(createDSobj("timein", dateStamp))
    return objs
}

function hoursWorkedOnDate(obj, dateForm){
    const timeIn = obj.timeInEvents.find((e) => e.date === dateForm).hour
    const timeOut = obj.timeOutEvents.find((e) => e.dateForm).hour

    return (timeOut - timeIn)/ 100
}

function wagesEarnedOnDate(obj, dateForms){
    const wage = obj.payPerHour
    const hoursWorked = hoursWorkedOnDate(obj, dateForms)
    return wage * hoursWorked
}

function allWagesFor(obj){
    const allWages = obj.timeInEvents.map((day)=> {return wagesEarnedOnDate(obj, day.date)})
    return allWages.reduce((acc, cv) => acc + cv)
}

function calculatePayroll(records){
    const payRoll = (records.map((emp1) => {
        return allWagesFor(emp1)
    }))
    return payRoll.reduce((acc, cv) => acc + cv)

}

function calculatePayroll(eRecords){
    const allPay = (records.map((emp1) => {
        return allWagesFor(emp1)
    }))
    return allPay.reduce((acc, cv) => acc + cv)

}

