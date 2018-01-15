const ethiopic = {
  EPOCH: 1724220.5, // 008/08/29 Julian C.E.
  EPOCH_RD: 2796
};

const gregorian = {
  EPOCH: 1721425.5, // 001/01/03 Julian C.E.
  EPOCH_RD: 730120.5,
  MONTHS: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}

const Month = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12
}

export {
    gregorian,
    ethiopic,
    Month,
}