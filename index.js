
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
  }

  const returnLastTwoDrivers = function(array){
    return array.slice(Math.max(array.length - 2, 0))
  }

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]

const createFareMultiplier = function(integer){
  return function(fare){
    return integer * fare
  }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, returnDrivers){
  return returnDrivers(array)
}