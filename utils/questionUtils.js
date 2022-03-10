export function getRandomQuestionsByCount(questions, count) {
  var arrayCopy = questions.slice();
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