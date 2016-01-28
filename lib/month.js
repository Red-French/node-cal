#!/usr/bin/env node --harmony_destructuring

//actual methods
'use strict';

const monthArray = [ , 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log('You are in month.js now')
function grabDate () {
  let newDate = new Date();
  let today = newDate.getDate();
  let thisMonth = newDate.getMonth();
  thisMonth = thisMonth +1;
  let thisYear = newDate.getFullYear();
  console.log('today\'s date is',today);  
  console.log('thisMonth', thisMonth);
  console.log('thisYear', thisYear);

  return {
    today:  today,
    currentMonth: thisMonth,
    currentYear: thisYear
  };

}

module.exports = { 
  grabDate : grabDate
}
