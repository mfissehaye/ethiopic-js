import { EthiopicCalendar, GregorianCalendar } from './src/calendar/index'

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

module.exports = {
    toEthiopic,
    toGregorian,
    isValidEthiopicDate,
}