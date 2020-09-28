/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(',').join(' ').split(' ');

  let nums = arr.filter(item => isFinite(item));

  nums.sort((a, b) => a - b);

  let obj = {};

  obj.min = +nums[0];
  obj.max = +nums[nums.length - 1];

  return obj;
}
