/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str) {
  let strLower = str.toLowerCase();
  if (strLower.includes('1xBet'.toLocaleLowerCase()) ||
  str.includes('XXX'.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
