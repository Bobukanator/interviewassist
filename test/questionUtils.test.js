import { getRandomQuestionsByCount } from "../utils/questionUtils"

var fs = require('fs');
const QUESTIONSTESTDATA = JSON.parse(fs.readFileSync('test/questionstestdata.json', 'utf8'));

test('test getRandomQuestionsByCount', () => {
  expect(getRandomQuestionsByCount(QUESTIONSTESTDATA, 1).length).toBe(1)
  expect(getRandomQuestionsByCount(QUESTIONSTESTDATA, 2).length).toBe(2)
  expect(getRandomQuestionsByCount(QUESTIONSTESTDATA, 10).length).toBe(10)
  expect(getRandomQuestionsByCount(QUESTIONSTESTDATA, 20).length).toBe(14) //test data set only has 14 questions, I expect the function to return max of what is passed in
  expect(getRandomQuestionsByCount(QUESTIONSTESTDATA, 14)).not.toBe(QUESTIONSTESTDATA)
})