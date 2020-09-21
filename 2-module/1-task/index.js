/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
  'John': 1000,
  'Ann': 1600,
  'Pete': 1300,
  'month': 'December',
  'currency': 'USD',
  'isPayed': false,
}

function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let name in salaries) {
    if (typeof salaries[name] !== 'number') continue;
    sum += salaries[name];
  }
  return sum;
}
