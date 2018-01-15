const JD_EPOCH_OFFSET_ETHIOPIC_POSITIVE = 1723856;
const JD_EPOCH_OFFSET_ETHIOPIC_NEGATIVE = -285019;
const JD_EPOCH_OFFSET_GREGORIAN = 1721426;
const MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const ethiopicToJDN = (year, month, day) => {};

const mod = (amount, numerator) => {
  return amount - numerator * Math.floor(amount / numerator)
}

export const jdnToEthiopic = jdn => {
  let offset =
    jdn >= JD_EPOCH_OFFSET_ETHIOPIC_POSITIVE + 365
      ? JD_EPOCH_OFFSET_ETHIOPIC_POSITIVE
      : JD_EPOCH_OFFSET_ETHIOPIC_NEGATIVE;

  let r = mod(jdn - offset, 1461);
  let n = mod(r, 365) + 365 * Math.floor(r / 1460);

  let year =
    4 * Math.floor((jdn - offset) / 1461) +
    Math.floor(r / 365) -
    Math.floor(r / 1460);

  let month = Math.floor(n / 30) + 1;
  let day = mod(n, 30) + 1;

  return [year, month, day];
};

export const jdnToGregorian = jdn => {
  let r2000 = mod(jdn - JD_EPOCH_OFFSET_GREGORIAN, 730485);
  let r400 = mod(jdn - JD_EPOCH_OFFSET_GREGORIAN, 146097);
  let r100 = mod(r400, 36524);
  let r4 = mod(r100, 1461);

  let n = mod(r4, 365) + 365 * Math.floor(r4 / 1460);
  let s = Math.floor(r4 / 1095);

  let aprime =
    400 * Math.floor((jdn - JD_EPOCH_OFFSET_GREGORIAN) / 146097) +
    100 * Math.floor(r400 / 36524) +
    4 * Math.floor(r100 / 1461) +
    Math.floor(r4 / 365) -
    Math.floor(r4 / 1460) -
    Math.floor(r2000 / 730484);

  let year = aprime + 1;
  let t = Math.floor((364 + s - n) / 306);
  let month =
    t * (Math.floor(n / 31) + 1) +
    (1 - t) * (Math.floor((5 * (n - s) + 13) / 153) + 1);

  n += 1 - Math.floor(r2000 / 730484);
  day = n;

  if (r100 == 0 && n == 0 && r400 != 0) {
    month = 12;
    day = 31;
  } else {
    let isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    MONTH_DAYS[2] = isLeap ? 29 : 28;
    MONTH_DAYS.forEach((days, i) => {
      if (n <= MONTH_DAYS[i]) {
        day = n;
        return;
      }

      n -= days;
    });
  }

  return [year, month, day];
};

export const gregorianToJDN = (year, month, day) => {
  const s =
    Math.floor(year / 4) -
    Math.floor((year - 1) / 4) -
    Math.floor(year / 100) +
    Math.floor((year - 1) / 100) +
    Math.floor(year / 400) -
    Math.floor((year - 1) / 400);
  const t = Math.floor((14 - month) / 12);
  const n =
    31 * t * (month - 1) +
    (1 - t) * (59 + s + 30 * (month - 3) + Math.floor((3 * month - 7) / 5)) +
    day -
    1;
  return (
    JD_EPOCH_OFFSET_GREGORIAN +
    365 * (year - 1) +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400) +
    n
  );
};
