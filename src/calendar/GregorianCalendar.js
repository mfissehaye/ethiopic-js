import { LeapCalendar, CalendarValidationException } from "./BaseCalendars";
import { gregorian, Month } from "./Constants";
import { mod } from "./Astro";

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export class GregorianCalendar extends LeapCalendar {
    constructor(jdn, year, month, day) {
        super(jdn, year, month, day, GregorianCalendar.isLeapYear(year))
    }

    static toJdn(year, month, day) {
        GregorianCalendar.validate(year, month, day)

        const y1 = year - 1

        return gregorian.EPOCH - 1 + 365 * y1 +
            Math.floor(y1 / 4) -
            Math.floor(y1 / 100) +
            Math.floor(y1 / 400) +
            Math.floor((367 * month - 362) / 12 +
                (month <= 2 ? 0 : GregorianCalendar.isLeapYear(year) ? -1 : -2) + day)
    }

    static validate(year, month, day) {
        if(month < 1 || month > 12) {
            throw new CalendarValidationException('Invalid month')
        }

        if(day < 1) {
            throw new CalendarValidationException('Invalid day')
        }

        const febDays = GregorianCalendar.isLeapYear(year) ? 29 : 28

        if(month === Month.FEBRUARY && day <= febDays) {
            return
        }

        if(daysInMonth[month - 1] < day) {
            throw new CalendarValidationException('Invlaid day')
        }
    }

    static isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    }

    static jdnToYear(jdn) {
        const jd0 = Math.floor(jdn - 0.5) + 0.5
        const depoch = jd0 - gregorian.EPOCH
        const quadricent = Math.floor(depoch / 146097)
        const dqc = mod(depoch, 146097)
        const cent = Math.floor(dqc / 36524)
        const dcent = mod(dqc, 36524)
        const quad = Math.floor(dcent / 1461)
        const dquad = mod(dcent, 1461)
        const yindex = Math.floor(dquad / 365)

        return quadricent * 400 + cent * 100 + quad * 4 + yindex + ((cent !== 4 && yindex !== 4) ? 1 : 0)
    }

    static fromJdn(jdn) {
        const jd0 = Math.floor(jdn - 0.5) + 0.5
        const year = GregorianCalendar.jdnToYear(jd0)
        const yearDay = jd0 - GregorianCalendar.toJdn(year, 1, 1)
        const leapAdj = jd0 < GregorianCalendar.toJdn(year, 3, 1) ? 0 : GregorianCalendar.isLeapYear(year) ? 1 : 2
        const month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367)
        const day = jd0 - GregorianCalendar.toJdn(year, month, 1) + 1

        return new GregorianCalendar(jdn, year, month, day)
    }

    static dateDifference(date1, date2) {
        return date2.getJdn() - date1.getJdn()
    }

    toArray() {
        return [
            this.year,
            this.month,
            this.day
        ]
    }
}