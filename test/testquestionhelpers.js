/*******************************
* Mocha tests for anything questions
* From node.js command prompt run this using
*  ' mocha testquestionhelpers -u tdd '
**/

var fs = require('fs');
var vm = require('vm');

vm.runInThisContext(fs.readFileSync('utils/jsUtils.js'));
vm.runInThisContext(fs.readFileSync('utils/questionHelper.js'));

var assert = require("assert")
var QUESTIONSTESTDATA = JSON.parse(fs.readFileSync('test/questionstestdata.json', 'utf8'));

suite('Question Tests', function () {
  setup(function () {
    //..
  });

  test('return random questions by count', function () {
    assert.equal(getRandomQuestionsByCount(QUESTIONSTESTDATA, 1).length, 1);
    assert.equal(getRandomQuestionsByCount(QUESTIONSTESTDATA, 2).length, 2);
    assert.equal(getRandomQuestionsByCount(QUESTIONSTESTDATA, 10).length, 10);
    assert.equal(getRandomQuestionsByCount(QUESTIONSTESTDATA, 20).length, 14);//by design if passed in length is greater than number in questions - return the max
    assert.equal(getRandomQuestionsByCount(QUESTIONSTESTDATA, 14).length, 14);
    assert.notDeepEqual(getRandomQuestionsByCount(QUESTIONSTESTDATA, 14), QUESTIONSTESTDATA);
  });
});
