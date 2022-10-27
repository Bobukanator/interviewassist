export function parseSkillsFromText(listofskills, text) {

  //parse skills from skill json - we expect listofskills to be in this format: [{"skill" : "theskill"}]
  const arrayOfSkills = listofskills.map(function (s) { return s.skill; })

  //crazy Regular Expression coding here - this particular master piece is thanks to my genius friend Stefan Niculescu who was a member of Career Boot Camp Coaches originally
  const skillsRegExp = new RegExp('(^|\\W)(' + arrayOfSkills.map(function (skill) { return escapeRegExpLocal(skill.toLowerCase()); }).join("|") + ')(?=\\W|$)', 'g');
  var returnSkills = [];
  text = text.toLowerCase();

  var match = [];
  while (match = skillsRegExp.exec(text)) {
    returnSkills.push(match[2]);
  }

  //return original version of skill to maintain case
  return arrayOfSkills.filter(function (skill) { return (returnSkills.indexOf(skill.toLowerCase()) >= 0); });

}

export function parseSkillsWCountFromText(listofskills, text) {

  var parsedSkills = parseSkillsFromText(listofskills, text)
  var returnSkills = []

  parsedSkills.forEach(skill => {
    var theSkillObject = {}
    theSkillObject.skill = skill;
    var skillRegExp = new RegExp('(^|\\W)(' + skill + ')', 'gi')
    theSkillObject.count = String((text.match(skillRegExp) || []).length)
    returnSkills.push(theSkillObject);
  })

  return returnSkills;
}

export function skillHighlight(arrayOfSkills, text) {
  const descendLengthSkillsArray = arrayOfSkills.sort((a, b) => b.length - a.length); //this is required to highlight multiple word skills
  var wordsRegExp = new RegExp('(^|\\W)(' + descendLengthSkillsArray.map(function (o) { return escapeRegExpLocal(o); }).join("|") + ')(?=\\W|$)', 'gi');
  return text ? text.replace(wordsRegExp, '$1<mark>$2</mark>') : "";
}

export function createSkillCompareArray(jobskills, resumeskills) {
  var compareArray = [];
  for (let jobskill of jobskills) {
    var skillcompareitem = { "skill": jobskill };
    if (resumeskills.includes(jobskill))
      skillcompareitem.in_resume = true;
    compareArray.push(skillcompareitem);
  }
  return compareArray;
}

function escapeRegExpLocal(string) {
  if (string) {
    return string.replace(/([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "\\$1");
  }
  return "";
}
