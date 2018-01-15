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
    it('should convert Ethiopic to Gregorian correctly', function() {
        testDates.forEach(date => {
            let jdn = GregorianCalendar.toJdn(...date.gd)
            let e = EthiopicCalendar.fromJdn(jdn)
            e.toArray().should.be.eql(date.ed)
        })
    })
})

describe('toGregorian', function() {
    it('should convert Gregorian to Ethiopic correctly', function() {
        testDates.forEach(date => {
            let jdn = EthiopicCalendar.toJdn(...date.ed)
            let g = GregorianCalendar.fromJdn(jdn)
            g.toArray().should.be.eql(date.gd)
        })
    })
})

/* describe('isValidEthiopicDate', function() {
    it('should check validity of ethiopic date', function() {
        e.isValidEthiopicDate(1, 1, 1992).should.be.true
        e.isValidEthiopicDate(1, 13, 2005).should.be.true
        e.isValidEthiopicDate(30, 1, 1998).should.be.true
        e.isValidEthiopicDate(8, 1, 1992).should.be.true
    })
}) */