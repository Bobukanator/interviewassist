export const state = () => ({
  skills: null
})

export const mutations = {
  set_skills(state, theskills) {
    state.skills = theskills
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const response = await context.$dataApi.getAllSkills();
    const skills = response.documents;
    commit('set_skills', { skills });
  }
}