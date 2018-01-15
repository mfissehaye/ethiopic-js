import * as jdn_utils from './jdn_utils'

const processArgs = (gy, gm, gd) => {
  let type = Object.prototype.toString.call(gy)
  switch(type) {
    case '[Object Date]':
      gd = gy.getDay()
      gm = gy.getMonth()
      gy = gy.getFullYear()

      break;
    case '[Object Array]':
      [gy, gm, gd] = gy
      break;
  }

  return [gy, gm, gd]
}

export const toEthiopic = (gy, gm, gd) => {
  let d = processArgs(gy, gm, gd)
  let jdn = jdn_utils.gregorianToJDN(...d)
  return jdn_utils.jdnToEthiopic(...d)
}

export const toGregorian = (gy, gm, gd) => {
  let d = processArgs(gy, gm, gd)
  console.log('The day is: ', d)
  let jdn = jdn_utils.ethiopicToJDN(...d)
  return jdn_utils.jdnToGregorian(...d)
}