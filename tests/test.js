'use strict';

const zellers = require('../lib/zellers');

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('lib/cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    // const zellers = require('../lib/zellars.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        const mod = zellers.modifiedMonth(2012, 1);
        const mod2 = zellers.modifiedMonth(2015, 2);
        //const mod3 = zellers.modifiedMonth(2016, 3);  // one way to write test (part1); part2 is below

        expect(mod).to.equal(13);
        expect(mod2).to.equal(14)
        //expect(mod3).to.equal(3);  // part2; goes with part1 above
        expect(zellers.modifiedMonth(2016,3)).to.equal(3); // more concise way to write the above test
      });
      // 2 === 14
      // 3 === 3
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
//        const mod = zellers.modifiedYear(2015, 1);
//        expect(mod).to.equal(2014);
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
      // 2016, 2 === 2015
      // 2017, 3 === 2017
    });

    describe('.calculate', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        const mod = zellers.calculate(2014, 3, 2);

        expect(mod).to.equal(1);
        //expect(zellers.calculate(2014, 3, 2)).to.equal(1);  // more concise way to write the above test
        expect(zellers.calculate(2000, 3, 1)).to.equal(4);
        expect(zellers.calculate(2100, 3, 1)).to.equal(2);
        expect(zellers.calculate(2200, 3, 2)).to.equal(1);
        expect(zellers.calculate(2300, 3, 1)).to.equal(5);
      });
      // 2000, 3, 1 === 4
      // 2100, 3, 1 === 2
      // 2200, 3, 2 === 1
      // 2300, 3, 1 === 5
    });
  });
});
