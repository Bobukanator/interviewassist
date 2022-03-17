export const state = () => ({
  skills: null,
  scannedSkills: null
})

export const mutations = {
  set_skills(state, theskills) {
    state.skills = theskills
  },
  set_scannedskills(state, theskills) {
    state.scannedSkills = theskills
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const response = await context.$dataApi.getAllSkills();
    const skills = response.documents;
    commit('set_skills', { skills });
  }
}