export const state = () => ({
  questions: [],
  answers: [],
  questionanswertags: []
})

export const mutations = {
  addQuestion(state, question) {
    state.questions.push(question);
  },
  addAnswer(state, answer) {
    state.answers.push(answer);
  },
  addQAT(state, qatitem) {
    state.questionanswertags.push(qatitem);
  }
}