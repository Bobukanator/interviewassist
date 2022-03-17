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

export function skillHighlight(arrayOfSkills, text) {
  var wordsRegExp = new RegExp('(^|\\W)(' + arrayOfSkills.map(function (o) { return escapeRegExpLocal(o); }).join('|') + ')(\\W|$)', 'gi');
  return text ? text.replace(wordsRegExp, '$1<mark>$2</mark>$3') : "";
}

function escapeRegExpLocal(string) {
  if (string) {
    return string.replace(/([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "\\$1");
  }
  return "";
}
