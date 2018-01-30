ES6 implementation of Ethiopian dates conversion.
Based on [calendariale](https://github.com/catull/calendariale)

	let ethiopic = require('ethiopic-js')
	ethiopic.toEthiopian(1992, 10, 4) // [1985, 1, 24]
	ethiopic.toGregorian(1985, 1, 24) // [1992, 10, 4]
