export const state = () => ({
  skills: null,
  scannedJobSkills: null,
  scannedResumeSkills: null,
  basicQuestions: null
})

export const mutations = {
  set_skills(state, theskills) {
    state.skills = theskills
  },
  set_scannedjobskills(state, theskills) {
    state.scannedJobSkills = theskills
  },
  set_scannedresumeskills(state, theskills) {
    state.scannedResumeSkills = theskills
  },
  set_basicquestions(state, basicquestions) {
    state.basicQuestions = basicquestions
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    //Originally loaded this proactively HOWEVER this causes unnecessary calls to mongodb which could end up costing money for no value -> 
    //I have moved this to on demand loading locations!
    /* const responseSkills = await context.$dataApi.getAllSkills();
     const skills = responseSkills.documents;
     commit('set_skills', { skills });
    const responseQuestions = await context.$dataApi.getAllQuestions();
    commit("set_basicquestions", responseQuestions);*/
  }
}