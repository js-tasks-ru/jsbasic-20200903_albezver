/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  if (+str.length > maxlength) {
    let failedCheckStr = str.slice(0, maxlength -1) + '…';
    return failedCheckStr;
 } else {
    return str;
 }
}
