import { parseSkillsFromText, skillHighlight } from "../utils/skillsUtils"

const fs = require('fs');
var TESTSKILLDATA = JSON.parse(fs.readFileSync('test/skillstestdata.json', 'utf8'));

test('test parseSkillsFromText using small skill data', () => {
  const testLoremData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const validSkills = [{ "skill": "tempor" }, { "skill": "magna" }, { "skill": "reprehenderit" }, { "skill": "officia" }];
  const expected = ["tempor", "magna", "reprehenderit", "officia"];

  expect(parseSkillsFromText(validSkills, testLoremData)).toStrictEqual(expected);

})

test('test parseSkillsFromText using TESTSKILLDATA', () => {
  const expected = ["ITIL Certified", "Test Driven Development", "Workforce Management"];
  const text = " Skills include \ Test Driven Development for all code\  ITIL Certified \ Workforce Management of professionals\ ";

  expect(parseSkillsFromText(TESTSKILLDATA, text)).toStrictEqual(expected);

})

test('test skillHighlight', () => {
  const expected = "The <mark>ITIL</mark> smart guy knows his <mark>KPIs</mark>!"
  const textinput = "The ITIL smart guy knows his KPIs!"
  const highlightTheseWordsArray = ["ITIL", "KPIs"]

  expect(skillHighlight(highlightTheseWordsArray, textinput)).toBe(expected);
  const highlightTheseWordsArray2 = ["ITIL", "KPIs", "guy"]
  const expected2 = "The <mark>ITIL</mark> smart <mark>guy</mark> knows his <mark>KPIs</mark>!"
  expect(skillHighlight(highlightTheseWordsArray2, textinput)).toBe(expected2);


})

test('test skillHighlight with long inclusive skills', () => {
  const expected = "The <mark>ITIL</mark> smart guy knows his <mark>KPIs</mark>! He is <mark>Apache Spark</mark> cerified!"
  const textinput = "The ITIL smart guy knows his KPIs! He is Apache Spark cerified!"
  const highlightTheseWordsArray = ["ITIL", "KPIs", "Apache", "Apache Spark"]

  expect(skillHighlight(highlightTheseWordsArray, textinput)).toBe(expected);

})

test('test skillHighlight with skills next to each other in text', () => {
  const expected = "The smart guy knows his <mark>ITIL</mark> <mark>KPIs</mark>! He is <mark>Apache Spark</mark> cerified!"
  const textinput = "The smart guy knows his ITIL KPIs! He is Apache Spark cerified!"
  const highlightTheseWordsArray = ["ITIL", "KPIs", "Apache", "Apache Spark"]

  expect(skillHighlight(highlightTheseWordsArray, textinput)).toBe(expected);

})

test('test to fix C++ bug', () => {
  const expected = "The smart guy knows his <mark>C++</mark>! He is <mark>Microsoft</mark> cerified!"
  const textinput = "The smart guy knows his C++! He is Microsoft cerified!"
  const highlightTheseWordsArray = ["C++", "KPIs", "Microsoft"]

  expect(skillHighlight(highlightTheseWordsArray, textinput)).toBe(expected);

})