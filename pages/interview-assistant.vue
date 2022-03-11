<template>
  <div class="section">
    <the-job-description-scanner> </the-job-description-scanner>
    <!--<the-interviewer :questions="randomizedquestions"></the-interviewer>-->
  </div>
</template>
<script>
import TheInterviewer from "../components/TheInterviewer.vue";
import { getRandomQuestionsByCount } from "~/utils/questionUtils";
import TheJobDescriptionScanner from "../components/TheJobDescriptionScanner.vue";

export default {
  components: { TheInterviewer, TheJobDescriptionScanner },
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