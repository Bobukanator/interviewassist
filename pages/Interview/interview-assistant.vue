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
  async asyncData({ store, $axios, $dataApi }) {
    //get Basic Questions
    const questions = await $dataApi.getAllQuestions();
    const randomizedquestions = getRandomQuestionsByCount(
      questions.documents,
      3
    );
    // get Skill Related Questions if skills exist
    if (store.state.scannedSkills) {
      const skillbasedquestions = await $dataApi.getQuestionsByTags(
        store.state.scannedSkills
      );
      const randomizedskillbasedquestions = getRandomQuestionsByCount(
        skillbasedquestions.documents,
        9
      );
      randomizedquestions.push(...randomizedskillbasedquestions);
    }
    return { randomizedquestions };
  },
};
</script>