// returns randomly a certain number of elements from an array
Array.prototype.returnRandomValues = function (count) {
  var arrayCopy = this.slice();
  var returnArray = [];
  while (count > 0) {
    if (arrayCopy.length) {
      var index = Math.floor(Math.random() * arrayCopy.length);
      returnArray.push(arrayCopy[index]);
      arrayCopy.splice(index, 1);
    }
    count--;
  }
  return returnArray;
}