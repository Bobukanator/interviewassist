export const state = () => ({
  skills: null
})

export const mutations = {
  set_skills(state, theskills) {
    state.skills = theskills
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    console.log("nuxtServerInit() called");
    //TODO update this to call Mongo
    commit('set_skills', { skill: [{ "skill": "tempor" }, { "skill": "magna" }, { "skill": "reprehenderit" }, { "skill": "officia" }] });
  }
}