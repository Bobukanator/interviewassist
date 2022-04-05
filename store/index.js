export const state = () => ({
  skills: null,
  scannedSkills: null,
  basicQuestions: null
})

export const mutations = {
  set_skills(state, theskills) {
    state.skills = theskills
  },
  set_scannedskills(state, theskills) {
    state.scannedSkills = theskills
  },
  set_basicquestions(state, basicquestions) {
    state.basicQuestions = basicquestions
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const responseSkills = await context.$dataApi.getAllSkills();
    const skills = responseSkills.documents;
    commit('set_skills', { skills });
    const responseQuestions = await context.$dataApi.getAllQuestions();
    commit("set_basicquestions", responseQuestions);
  }
}