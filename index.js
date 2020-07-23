function returnFirstTwoDrivers(drivers){
    let two = drivers
    return two.slice(0, 2)
}

function returnLastTwoDrivers(drivers){
    let last = drivers 
    return last.slice(drivers.length - 2, drivers.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    function fareMultiplier(num){
        return num * fare
    }
    return fareMultiplier
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arr, functions){
    return functions(arr) 
}