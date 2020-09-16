/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
/*
 //Возвращает true для innocent rabbit
function checkSpam(str) {
  if (str.includes('1xBet') || str.includes('XXX')) {
    return true;
  } else {
    return false;
  }
}
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
