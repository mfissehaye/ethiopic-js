import * as utils from './index'

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
            utils.toGregorian(...date.ed).should.be.eql(date.gd)
        })
    })
})

describe('toGregorian', function() {
    it('should convert Gregorian to Ethiopic correctly', function() {
        testDates.forEach(date => {
            utils.toEthiopic(...date.gd).should.be.eql(date.ed)
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