/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ulNode = document.createElement('ul');
  let liNode = document.createElement('li');

  for (let friend of friends) {
    let friendsList = liNode.cloneNode(false);
    friendsList.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ulNode.append(friendsList);
  }
  
  return ulNode;
}
