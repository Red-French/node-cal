#!/usr/bin/env node --harmony_destructuring
'use strict';
console.log('INSIDE cal.js');

// const zellersMonth = require('./zellers').modifiedMonth;
const zellersGetDay = require('./zellers').getDay;
const monthGrabDate = require('./month').grabDate;

// const calMaker = {};

let buildCal = () => {
// console.log('cal.js - monthGrabDate() =', monthGrabDate());  // log object/keys/values from month.js
let thisMonth = monthGrabDate().currentMonth;   // get current month from month.js

console.log('cal.js - thisMonth', thisMonth);  // log this month

return {thisMonth: thisMonth};
}
module.exports = {buildCal};




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

