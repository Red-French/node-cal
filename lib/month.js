#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';
console.log('You are in month.js now')
function grabDate () {
let newDate = new Date();
let today = newDate.getDate();
let thisMonth = newDate.getMonth();
thisMonth = thisMonth +1;
let thisYear = newDate.getFullYear();

console.log('today', today);
console.log('thisMonth', thisMonth);
console.log('thisYear', thisYear);

// console.log('zellersMonth in cal.js is', zellersMonth(2012, 3));

// console.log('First day of the month is on a', zellersGetDay(thisYear, thisMonth, 1));

}

module.exports = { grabDate : grabDate };
