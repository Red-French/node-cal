#!/usr/bin/env node --harmony_destructuring
'use strict';
// console.log('INSIDE cal.js');

// const zellersDay = require('./zellers').getDay;
const monthGrab = require('./month').calBuilder;

// if (args.length == 2) {
const month = new Date().getMonth() + 1;  // get current month
const year = new Date().getFullYear();  // get current year
console.log(monthGrab(month, year));  // output current-month calendar
// } else if (args.length === 1) {
// const year = args;

// console.log(monthGrab(year));
// }


// const calMaker = {};

// calMaker.buildCal = () => {
// console.log('cal.js - monthGrab() =', monthGrab());  // log object/keys/values from month.js
// let thisMonth = monthGrab().currentMonth;   // get current month from month.js
// let thisDay = monthGrab().today;
// let thisYear = monthGrab().currentYear;

// console.log(thisMonth);

// return { thisMonth: thisMonth, thisDay: thisDay, thisYear: thisYear }
// }

// module.exports = calMaker;


// ** another way to write the code above:
// let buildCal = () => {
// let thisMonth = monthGrab().currentMonth;   // get current month from month.js
// console.log('cal.js - thisMonth', thisMonth);  // log this month
// return {thisMonth};
// }
// module.exports = {buildCal};






  // var sep = arg ? ' ' : '';
  // var goal = cp.execSync('cal' + sep + arg).toString();
  // var output = cp.execSync('./cal.js' + sep + arg).toString();
  // output.should.equal(goal);


// console.log('thisMonth', thisMonth);

// //console.log(process.argv);
// //console.log(zellersMonth())

// //if (args.length == 2) {
//   //const [month, year] = args;

//   //console.log('generateMonth(${year}, ${month})');

// //} else if (args.length === 1) {
//   //const [year] = args;

//   //console.log('generateYear(${year})');
// //} else {
//   //console.log('it is broke, jack');
//   //process.exit(64); // sets error to see in command line; this will show '64'
// //}