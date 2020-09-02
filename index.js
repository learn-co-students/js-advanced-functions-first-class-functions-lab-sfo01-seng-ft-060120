// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int1) => {
    return function(int2) {
        return int1 * int2
    }
}

const fareDoubler = (int) => {
    return int * 2 
}

const fareTripler = (int) => {
    return int * 3 
}

const selectDifferentDrivers = (drivers, funct) => {
    return funct(drivers)
}