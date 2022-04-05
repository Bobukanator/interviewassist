export const state = () => ({
  questions: [],
  answers: [],
  questionanswertags:
    [
      {
        "question": "Tell me about yourself.",
        "tags": [
          "Basic",
          "About Yourself"
        ],
        "answer": "I am the best in the world"
      },
      {
        "question": "Why do you want this job?",
        "tags": [
          "Basic"
        ],
        "answer": "Because you owe it to me - remember I am the best in the world!"
      },
      {
        "question": "Where would you like to be in your career five years from now?",
        "tags": [
          "Basic"
        ],
        "answer": "Absolute Ruler of the Galaxy"
      }
    ]
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