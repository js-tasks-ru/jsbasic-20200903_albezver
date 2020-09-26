/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filteredNames = users.filter(item => item.age <= age);

  let result = filteredNames.map(user => user.name + ', ' + user.balance).join('\n');

  return result;
}
