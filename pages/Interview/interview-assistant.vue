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
    const totalQuestions = 12;

    //get Basic Questions
    const questions = store.state.basicQuestions;

    const randomizedquestions = [];

    // get Skill Related Questions if skills exist
    if (store.state.scannedSkills) {
      const skillbasedquestions = await $dataApi.getQuestionsByTags(
        store.state.scannedSkills
      );
      store.commit("set_scannedskills", null); //reset scanned skills so if our user wants to scan again or do a basic interview, they can!
      const randomizedskillbasedquestions = getRandomQuestionsByCount(
        skillbasedquestions.documents,
        9 //Max 9 skill based questions for now
      );
      randomizedquestions.push(...randomizedskillbasedquestions);
    }

    const randomizedbasicquestions = getRandomQuestionsByCount(
      questions.documents,
      totalQuestions - randomizedquestions.length //always want to have at least <totalQuestions>
    );
    randomizedquestions.push(...randomizedbasicquestions);
    return { randomizedquestions };
  },
};
</script>