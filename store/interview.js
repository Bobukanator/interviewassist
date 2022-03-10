export const state = () => ({
  questions: [],
  answers: [],
})

export const mutations = {
  addQuestion(state, question) {
    state.questions.push(question);
  },
  addAnswer(state, answer) {
    state.answers.push(answer);
  }
}