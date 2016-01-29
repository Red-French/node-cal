'use strict';
console.log('INSIDE zellers.js');

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

function getDay(year, month, day) {

  let modMonth = modifiedMonth(year, month);
  let modYear = modifiedYear(year, month);

  // h = (q + (13(m + 1) / 5) + k + (k / 4) + (j + 4) - (2 * j)) %7;
  let wkDay = (day + Math.floor(((modMonth + 1) * 26) / 10) + modYear + Math.floor(modYear / 4) + 6 * Math.floor(modYear / 100) + Math.floor(modYear / 400)) % 7;

  //console.log('~~~~~~~~~~');
  //console.log('wkDay is', wkDay);
  //console.log('startDay', startDay + '\n');
  console.log('modMonth is', modMonth);
  //console.log('currentMonth is', currentMonth[modMonth-1] + '\n');
  //console.log('modYear is', modYear + '\n');

return wkDay;

}

  module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
}


// 6-wk month(8/2015), 5-wk month(10/2015), 4-wk month(2/2015) (can hard code these tests)

//describe(‘.center’, ( ) => {
     //const center = require(‘../lib/center’);  // ‘center.js’ will be a function to calculate needed spaces for the months
     //it(‘should handle January’, ( ) => {
     //expect(center(‘January 2016')).to.equal(‘   January 2016‘);
//});
     //it(‘should handle February’, ( ) => {
     //expect(center(‘February 2016’)).to.equal(‘   February 2016‘);
//});
//});

// test for leap year --> non-leap(2/2014), leap(2/2012)

// test for 30-day month(11/2015) and 31-day month(12/2015) (can hard code this test)

// date range app should work:  1753-9999  --> add if/else statement to cal.js

// test for date out of range, test for non-year data (ex. 'ABC')





