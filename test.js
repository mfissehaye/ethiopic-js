import { EthiopicCalendar, GregorianCalendar } from './src/calendar/index';

require('should')

const testDates = [
    {
        gd: [1981, 8, 7],
        ed: [1973, 12, 1]
    },

    {
        gd: [2013, 1, 10],
        ed: [2005, 5, 2]
    },

    {
        gd: [2014, 8, 4],
        ed: [2006, 11, 28]
    },

    {
        gd: [1992, 10, 4],
        ed: [1985, 1, 24]
    }
]

describe('toEthiopic', function() {
    it('should convert Gregorian to Ethiopic correctly', function() {
        testDates.forEach(date => {
            let jdn = EthiopicCalendar.toJdn(...date.ed)
            let g = GregorianCalendar.fromJdn(jdn)
            g.toArray().should.be.eql(date.gd)
        })
    })

    /* it('should convert date object to Ethiopic', function() {
        e.toEthiopic(new Date(1981, 8, 7)).should.be.eql({ey: 1973, em: 12, ed: 1})
        e.toEthiopic(new Date(2013, 1, 10)).should.be.eql({ey: 2005, em: 5, ed: 2})
        e.toEthiopic(new Date(2014, 8, 4)).should.be.eql({ey: 2006, em: 11, ed: 28})
        e.toEthiopic(new Date(1992, 10, 4)).should.be.eql({ey: 1985, em: 1, ed: 24})
    }) */
})

/* describe('toGregorian', function() {
    it('should convert Ethiopic to Gregorian correctly', function() {
        e.toGregorian(1973, 12, 1).should.be.eql({ey: 1981, em: 8, ed: 7})
        e.toGregorian(2005, 5, 2).should.be.eql({ey: 2013, em: 1, ed: 10})
        e.toGregorian(2006, 11, 28).should.be.eql({ey: 2014, em: 8, ed: 4})
        e.toGregorian(1985, 1, 24).should.be.eql({ey: 1992, em: 10, ed: 4})
    })
}) */

/* describe('isValidEthiopicDate', function() {
    it('should check validity of ethiopic date', function() {
        e.isValidEthiopicDate(1, 1, 1992).should.be.true
        e.isValidEthiopicDate(1, 13, 2005).should.be.true
        e.isValidEthiopicDate(30, 1, 1998).should.be.true
        e.isValidEthiopicDate(8, 1, 1992).should.be.true
    })
}) */