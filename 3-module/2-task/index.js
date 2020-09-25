/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let range = arr.filter(item => item >= a && item <=b);
  return range;
}
