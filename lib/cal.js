#!/usr/bin/env node --harmony_destructuring
'use strict';

console.log('inside cal!');

// const zellersMonth = require('./zellers').modifiedMonth;
const zellersGetDay = require('./zellers').getDay;
const monthGrabDate = require('./month').grabDate;

console.log(monthGrabDate());  // returns console logs from month.js




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

