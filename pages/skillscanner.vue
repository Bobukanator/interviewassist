<template>
  <div class="section">
    <the-job-description-scanner> </the-job-description-scanner>
    <the-resume-scanner></the-resume-scanner>
  </div>
</template>
<script>
import TheJobDescriptionScanner from "../components/TheJobDescriptionScanner.vue";
import TheResumeScanner from "../components/TheResumeScanner.vue";

export default {
  components: { TheJobDescriptionScanner, TheResumeScanner },
  head() {
    return {
      title: "Skill Scanner",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "Our digital career coach can analyze the job you are interested in and compare your skillset to determine if you meet the requirements.",
        },
      ],
    };
  },
};
</script>