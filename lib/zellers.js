'use strict';

console.log('inside zellers.js');

let currentMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

function modifiedMonth(year, month) {
    if(month < 3) {
      month += 12;
    }
    return month;
  }

function modifiedYear(year, month) {
    if(month < 3) {
      year -= 1;
    }
    return year;
  }

function calculate(year, month, day) {

  let modMonth = modifiedMonth(year, month);
  let modYear = modifiedYear(year, month);

  // h = (q + (13(m + 1) / 5) + k + (k / 4) + (j + 4) - (2 * j)) %7;
  let wkDay = (day + Math.floor(((modMonth + 1) * 26) / 10) + modYear + Math.floor(modYear / 4) + 6 * Math.floor(modYear / 100) + Math.floor(modYear / 400)) % 7;

  let startDay;
  switch (wkDay) {
    case 0:
      startDay = 'Saturday';
      break;
    case 1:
      startDay = 'Sunday';
      break;
    case 2:
      startDay = 'Monday';
      break;
    case 3:
      startDay = 'Tuesday';
      break;
    case 4:
      startDay = 'Wednesday';
      break;
    case 5:
      startDay = 'Thursday';
      break;
    case 6:
      startDay = 'Friday';
      break;
  };

  console.log('~~~~~~~~~~');
  console.log('wkDay is', wkDay);
  console.log('startDay', startDay + '\n');
  console.log('modMonth is', modMonth);
  console.log('currentMonth is', currentMonth[modMonth-1] + '\n');
  console.log('modYear is', modYear + '\n');

return wkDay;

}

  module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  calculate: calculate
}



