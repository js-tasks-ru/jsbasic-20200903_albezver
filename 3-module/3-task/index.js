/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-')

    .map( (value, index) => index == 0 ?
    value :
    value = value[0].toUpperCase() + value.slice(1,) )

    .join('');
}
