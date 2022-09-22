// in this lab, i started with long versions of functions, and translated them into arrow functions as practice

const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0, 2);

const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => fare => fare * multiplier; // sleek!

/* below is the non-arrow function version of the above function so i can read it
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return multiplier * fare;
    }
} */

const fareDoubler = fare => createFareMultiplier(2)(fare);

/* below is the non-arrow function version of the above function so i can read it
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
} */

const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (arrayOfDrivers, returnFuncs) => returnFuncs(arrayOfDrivers);