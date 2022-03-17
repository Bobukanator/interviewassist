<template>
  <div class="section">
    <the-interviewer :questions="randomizedquestions"></the-interviewer>
  </div>
</template>
<script>
import TheInterviewer from "../../components/TheInterviewer.vue";
import { getRandomQuestionsByCount } from "~/utils/questionUtils";

export default {
  components: { TheInterviewer },
  head() {
    return {
      title: "Interview Assitant",
      meta: [
        {
          name: "Description ",
          content:
            "Our digital career coach organizes your unique information, and creates a tailored interview preparation guide to help you ace the interview and get the job.",
        },
      ],
    };
  },
  async asyncData({ $axios, $dataApi }) {
    const questions = await $dataApi.getAllQuestions();
    const randomizedquestions = getRandomQuestionsByCount(
      questions.documents,
      3
    );
    return { randomizedquestions };
  },
};
</script>