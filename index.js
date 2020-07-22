// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length-2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return (fare) => {
        return fare * num
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}