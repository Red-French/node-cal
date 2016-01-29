#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';

console.log('INSIDE month.js');

const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function grabDate () {
  let newDate = new Date();
  let today = newDate.getDate();
  let thisMonth = newDate.getMonth();
  thisMonth = thisMonth +1;
  let thisYear = newDate.getFullYear();
  console.log('month.js - today = ',today);  
  console.log('month.js - thisMonth = ', thisMonth);
  console.log('month.js - thisYear = ', thisYear);

  console.log('month.js - monthArray', monthArray[thisMonth]);
  
  return {
    today:  today,
    currentMonth: thisMonth,
    currentYear: thisYear
  };

}

module.exports = { 
  grabDate : grabDate
}
