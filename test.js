import * as utils from './src/index'

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

describe('isValidEthiopicDate', function() {
    it('should check validity of ethiopic date', function() {
        testDates.forEach(date => {
            utils.isValidEthiopicDate(...date.ed).should.be.true()
        })
        
        utils.isValidEthiopicDate(1900, 13, 7).should.not.be.true()
        utils.isValidEthiopicDate(1900, 13, 6).should.be.true()
        utils.isValidEthiopicDate(1901, 13, 6).should.not.be.true()
        utils.isValidEthiopicDate(2010, 1, 30).should.be.true()
    })
})

describe('isLeapYear', function() {
    it('should check if an ethiopic date is leap or not', function() {
        utils.isLeapEthiopicYear(1900).should.be.true()
        utils.isLeapEthiopicYear(1901).should.not.be.true()
    })
})