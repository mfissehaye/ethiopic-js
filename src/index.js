import EthiopicCalendar from './calendar/EthiopicCalendar'
import GregorianCalendar from './calendar/GregorianCalendar'

const toEthiopic = (jy, jm, jd) => {
    let jdn = GregorianCalendar.toJdn(jy, jm, jd)
    return EthiopicCalendar.fromJdn(jdn).toArray()
}

const toGregorian = (jy, jm, jd) => {
    let jdn = EthiopicCalendar.toJdn(jy, jm, jd)
    return GregorianCalendar.fromJdn(jdn).toArray()
}

const isValidEthiopicDate = (jy, jm, jd) => {
    let valid = true
    try {
        EthiopicCalendar.validate(jy, jm, jd)
    } catch(error) {
        valid = false
    }
    return valid
}

const isLeapEthiopicYear = (jy) => {
    return EthiopicCalendar.isLeapYear(jy)
}

module.exports = {
    toEthiopic,
    toGregorian,
    isValidEthiopicDate,
    isLeapEthiopicYear,
}