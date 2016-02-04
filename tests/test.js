'use strict';

const zellers = require('../lib/zellers');
const getDate = require('../lib/month');
const cal = require('../lib/cli');

const { expect } = require('chai');  // es6 syntax
const { execSync } = require('child_process');  // es6 syntax; 'execSync' is like executing a command line

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./lib/cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    // const zellers = require('../lib/zellars.js');
    
    describe('.getMonth', () => {
      it('return 13 for January', () => {
        const mod = zellers.getMonth(2012, 1);
        const mod2 = zellers.getMonth(2015, 2);
        //const mod3 = zellers.getMonth(2016, 3);  // one way to write test (part1); part2 is below
        // console.log(zellers);
        expect(zellers.getMonth(2012, 1)).to.equal(13);
        expect(mod2).to.equal(14)
        //expect(mod3).to.equal(3);  // part2; goes with part1 above
        expect(zellers.getMonth(2016,3)).to.equal(3); // more concise way to write the above test
      });
      // 2 === 14
      // 3 === 3
    });

    describe('.getYear', () => {
      it('returns 2015 for Jan 2015', () => {
//        const mod = zellers.getYear(2015, 1);
//        expect(mod).to.equal(2014);
        expect(zellers.getYear(2015, 1)).to.equal(2014);
        expect(zellers.getYear(2016, 2)).to.equal(2015);
        expect(zellers.getYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 3 (Tuesday) for March 1, 2016', () => {
        const mod = zellers.getDay(2014, 3, 1);

        expect(mod).to.equal(0);
        //expect(zellers.getDay(2014, 3, 2)).to.equal(1);  // more concise way to write the above test
        expect(zellers.getDay(2000, 3, 1)).to.equal(4);
        expect(zellers.getDay(2100, 3, 1)).to.equal(2);
        expect(zellers.getDay(2200, 3, 1)).to.equal(0);
        expect(zellers.getDay(2300, 3, 1)).to.equal(5);
        expect(zellers.getDay(2016, 1, 1)).to.equal(6);
      });
    });
  });

  describe("TEST MONTH.JS", () => {
    describe('.grabDate', () => {
      it('grabs the date, dude', () => {
        // expect(getDate.grabDate().today).to.equal(29);  // checks current date from month.js
        // expect(getDate.grabDate().currentMonth).to.equal(1);  // checks current month from month.js
        // expect(getDate.grabDate().currentYear).to.equal(2016); // checks current year from month.js
        expect(getDate.calBuilder(1, 2016)).to.equal('    January 2016\nSu Mo Tu We Th Fr Sa\n');
        expect(getDate.calBuilder(5, 2016)).to.equal('      May 2016\nSu Mo Tu We Th Fr Sa\n');
        expect(getDate.calBuilder(8, 2016)).to.equal('    August 2016\nSu Mo Tu We Th Fr Sa\n');
        expect(getDate.calBuilder(6, 2016)).to.equal('     June 2016\nSu Mo Tu We Th Fr Sa\n');
        expect(getDate.calBuilder(9, 2016)).to.equal('   September 2016\nSu Mo Tu We Th Fr Sa\n');
        expect(getDate.calBuilder(9, 700)).to.equal('   September 700\nSu Mo Tu We Th Fr Sa\n');
      });
    });
  });


  // describe("TEST CAL.JS", () => {
  //   describe('.buildCal', () => {
  //     it('build the calendar, my man', () => {
  //       expect(cal.buildCal().thisMonth).to.equal(1); // checks current month from cal.js
  //       expect(cal.buildCal().thisDay).to.equal(29); // checks current day from cal.js
  //       expect(cal.buildCal().thisYear).to.equal(2016)  // checks current year from cal.js
  //     });
  //   });    
  // });


});
