var list = [];

var addToList = function addToList(num) {
  list.push(num);
  return list;
}

var returnList = function returnList() {
  return sortList();
}

var sortList = function sortList() {
  return list.sort((a, b) => {
    return (a - b);
  });
}

module.exports = {
  addToList: addToList,
  returnList: returnList
}

// console.log(addToList(5))
// console.log(addToList(4))
// console.log(addToList(3))
// console.log(addToList(2))
// console.log(addToList(1))
// console.log(returnList())