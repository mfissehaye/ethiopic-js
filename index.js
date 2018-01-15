import { EthiopicCalendar, GregorianCalendar } from './src/calendar/index'

const toEthiopic = (jy, jm, jd) => {
    let jdn = GregorianCalendar.toJdn(jy, jm, jd)
    return EthiopicCalendar.fromJdn(jdn).toArray()
}

const toGregorian = (jy, jm, jd) => {
    let jdn = EthiopicCalendar.toJdn(jy, jm, jd)
    return GregorianCalendar.fromJdn(jdn).toArray()
}

module.exports = {
    toEthiopic,
    toGregorian,
}