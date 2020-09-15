/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length >= 1 || !str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  }
}