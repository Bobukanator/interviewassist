<template>
  <div class="section">
    <the-job-description-scanner> </the-job-description-scanner>
  </div>
</template>
<script>
import { getRandomQuestionsByCount } from "~/utils/questionUtils";
import TheJobDescriptionScanner from "../../components/TheJobDescriptionScanner.vue";

export default {
  components: { TheJobDescriptionScanner },
  head() {
    return {
      title: "Job Description Scan",
      meta: [
        {
          name: "Description ",
          content:
            "Our digital career coach organizes your unique information, and creates a tailored interview preparation guide to help you ace the interview and get the job.",
        },
      ],
    };
  },
};
</script>