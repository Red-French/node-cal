#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';
const _ = require('lodash');
const zellersDay = require('./zellers').getDay;
// console.log('INSIDE month.js');

const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dateString = null;
// let wkDay = null;
let spaces = null;
let spaceChar = ' ';
let spacer = ' ';
const buildCal = {};  // calendar object


// BUILD CALENDAR
buildCal.calBuilder = (month, year, day) => {  // called from cal.js
  let header = `${monthArray[month]} ${year}`;  // grab from array the month that was passed in above

  const spaceLength = Math.floor((20 - header.length) / 2);  // center header (20 is calendar width)
  for(let i = 0; i < spaceLength; i++) {  // add spaces for centering (determined above) to beginning of header
    header = ' ' + header;
  }

  getDates(month, year, dateString, spaces);  // get calendar dates
  return header + '\nSu Mo Tu We Th Fr Sa\n' + spaces;  // print header
};


// GET CALENDAR DATES FOR REQUESTED MONTH
const getDates = (month, year) => {
    let startDay = zellersDay(year, month, 1);  // get first weekday of the month
    console.log('month.js startDay =', startDay);
    spaces = (startDay * 3) -3;
    console.log('spaces =', spaces);
    for (var i = 0;i < spaces; i++) {  // loop # of spaces required for proper spacing of 1st day of month
      spaceChar += spacer;  // add space every iteration
      // console.log(spaceChar + '1');
    };

  switch(month) {
    case 1:
        dateString = _.range(1, 32);
        spaces = '                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31';
        break;
    case 2:
// TEST LEAP YEAR
        dateString = _.range(1, 29);


        let dates = dateString.join('  ');
        let breakOnDate = 7 - (startDay-1);
        let arrayBreak = breakOnDate - 1;
        console.log('arrayBreak on index', arrayBreak);

for (let i = 0; i < dateString.length; i++) {
  if (dateString[i] === dateString[6]) {
      console.log('dateString[6] =', dateString[i]);
    // console.log('dateString[6]', dateString[6]);
  }
}

        // let thisLine = _.chunk(dates, arrayBreak);
        // console.log('thisLine', thisLine);


        spaces = spaceChar + dates;
        break;
    case 3:
        console.log('March bro!');
        dateString = _.range(1, 32);
        break;
    case 4:
        console.log('April bro!');
        dateString = _.range(1, 31);
        break;
    case 5:
        console.log('May bro!');
        dateString = _.range(1, 32);
        break;
    case 6:
        console.log('June bro!');
        dateString = _.range(1, 31);
        break;
    case 7:
        console.log('July bro!');
        dateString = _.range(1, 32);
        break;
    case 8:
        console.log('August bro!');
        dateString = _.range(1, 32);
        break;
    case 9:
        console.log('September bro!');
        dateString = _.range(1, 31);
        break;
    case 10:
        console.log('October bro!');
        dateString = _.range(1, 32);
        break;
    case 11:
        console.log('November bro!');
        dateString = _.range(1, 31);
        break;
    case 12:
        console.log('December bro!');
        dateString = _.range(1, 32);
        break;
    default:
        console.log('Bad month');
};
  return { dateString, spaces }
}


module.exports = buildCal;

// function grabDate () {
//   let newDate = new Date();
//   let today = newDate.getDate();
//   let thisMonth = newDate.getMonth();
//   thisMonth = thisMonth +1;
//   let thisYear = newDate.getFullYear();
//   console.log('month.js - today = ',today);  
//   console.log('month.js - thisMonth = ', thisMonth);
//   console.log('month.js - thisYear = ', thisYear);

//   console.log('month.js - monthArray', monthArray[thisMonth]);
  
//   return {
//     today:  today,
//     currentMonth: thisMonth,
//     currentYear: thisYear,
//   };

// }

// module.exports = { 
//   grabDate : grabDate
// }