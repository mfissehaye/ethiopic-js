export class BaseCalendar {
    constructor(jdn) {
        this.jdn = jdn
    }

    getJdn() {
        return this.jdn
    }
}

export class MonthCalendar extends BaseCalendar {
    constructor(jdn, month, day) {
        super(jdn)
        this.month = month
        this.day = day
    }

    getMonth() {
        return this.month
    }

    getDay() {
        return this.day
    }
}

export class YearCalendar extends BaseCalendar {
    constructor(jdn, year) {
        super(jdn)
        this.year = year
    }

    getYear() {
        return this.year
    }
}

export class YearMonthCalendar extends MonthCalendar {
    constructor(jdn, year, month, day) {
        super(jdn, month, day)
        this.year = year
    }
}

export class LeapCalendar extends YearMonthCalendar {
    constructor(jdn, year, month, day, yearLeap) {
        super(jdn, year, month, day)
        this.yearLeap = yearLeap
    }

    isYearLeap() {
        return this.yearLeap
    }
}

export class LeapMonthCalendar extends YearMonthCalendar {
    constructor(jdn, year, month, day, monthLeap) {
        super(jdn, year, month, day)
        this.monthLeap = monthLeap
    }

    isMonthLeap() {
        return this.monthLeap
    }
}

export class LeapDayMonthCalendar extends LeapMonthCalendar {
    constructor(jdn, year, month, day, monthLeap, dayLeap) {
        super(jdn, year, month, day, monthLeap)
        this.dayLeap = dayLeap
    }

    isDayLeap() {
        return this.dayLeap
    }
}

export class CalendarValidationException extends Error {
    constructor(error) {
        super(error)
    }
}