<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">
          Question {{ index + 1 }} of {{ questions.length }}
        </div>
      </div>
    </header>
    <div class="card-content">
      <h2 class="title">{{ question }}</h2>
      <div class="content">
        <textarea
          v-model="answer"
          class="textarea"
          rows="10"
          placeholder="..."
          :tabindex="1"
          ref="answertextareabox"
        ></textarea>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <button
          class="button is-info is-light"
          :tabindex="3"
          :disabled="this.index == 0"
          @click="getPrevQuestion()"
        >
          Previous
        </button>
      </p>
      <p class="card-footer-item">
        <input
          class="button is-primary"
          type="submit"
          :tabindex="2"
          value="Next"
          @click="save()"
        />
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    questions: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      index: 0,
      answer: "",
      answers: [],
    };
  },
  mounted() {
    this.answers = new Array(this.questions.length);
    this.focusTheAnswerTextBox();
  },
  computed: {
    question() {
      return this.questions[this.index].question;
    },
  },
  methods: {
    save() {
      this.$store.commit("interview/addQuestion", this.question);
      this.$store.commit("interview/addAnswer", this.answer);
      this.answers[this.index] = this.answer;
      this.answer = "";
      this.getNextQuestion();
    },
    getNextQuestion() {
      if (!this.atLastQuestion()) {
        this.index++;
        this.focusTheAnswerTextBox();
      } else {
        // Do something here
      }
    },
    getPrevQuestion() {
      this.index = this.index - 1;
      console.log("calling get prev question - index is now " + this.index);
      this.focusTheAnswerTextBox();
    },
    focusTheAnswerTextBox() {
      this.$refs.answertextareabox.focus();
      if (this.answers[this.index]) this.answer = this.answers[this.index];
    },
    atLastQuestion() {
      return this.index >= this.questions.length - 1;
    },
  },
};
</script>