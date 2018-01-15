import { YearMonthCalendar, CalendarValidationException } from "./BaseCalendars";
import { ethiopic } from "./Constants";
import { mod } from "../Astro";

export class EthiopicCalendar extends YearMonthCalendar {
    constructor(jdn, year, month, day) {
        super(jdn, year, month, day)
    }

    static fromJdn(jdn) {
        const year = Math.floor((4 * (jdn - ethiopic.EPOCH) + 1463) / 1461)
        const month = 1 + Math.floor((jdn - EthiopicCalendar.toJdn(year, 1, 1)) / 30)
        const day = jdn + 1 - EthiopicCalendar.toJdn(year, month, 1)

        return new EthiopicCalendar(jdn, year, month, day)
    }

    static toJdn(year, month, day) {
        EthiopicCalendar.validate(year, month, day)

        return ethiopic.EPOCH - 1 + 365 * (year - 1) +
            Math.floor(year / 4) + 30 * (month - 1) + day 
    }

    static isLeapYear(year) {
        return mod(year, 4) === 0
    }

    static validate(year, month, day) {
        if(month < 1 || month > 13) {
            throw new CalendarValidationException('Invalid month')
        }

        const maxDaysOfMonth13 = EthiopicCalendar.isLeapYear(year) ? 6 : 5
        if(month === 13 && day > maxDaysOfMonth13) {
            throw new CalendarValidationException('Invalid day')
        }

        if(day < 1 || day > 30) {
            throw new CalendarValidationException('Invalid day')
        }
    }

    toArray() {
        return [
            this.year,
            this.month,
            this.day
        ]
    }
}