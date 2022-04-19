<template>
  <div class="section">
    <the-report-generator></the-report-generator>
  </div>
</template>
<script>
import TheReportGenerator from "../../components/TheReportGenerator.vue";
export default {
  components: { TheReportGenerator },
  head() {
    return {
      title: "Interview Report",
      meta: [
        {
          name: "description",
          hid: "description",
          content:
            "Our digital career coach organizes your unique information, and creates a tailored interview preparation guide to help you ace the interview and get the job.",
        },
      ],
    };
  },
};
</script>