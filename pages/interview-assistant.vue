<template>
  <div class="section">
    <the-interviewer></the-interviewer>
    <!--<article
      class="media"
      v-for="document in questions.documents"
      :key="document._id"
    >
      <div class="media-content">
        <div class="content">
          <strong>{{ document.tags[0] }} Question Type</strong><br />
          {{ document.question }}
        </div>
      </div>
    </article>-->
  </div>
</template>
<script>
import TheInterviewer from "../components/TheInterviewer.vue";

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
  /*async asyncData({ $axios, $dataApi }) {
    const questions = await $dataApi.getAllQuestions();
    return { questions };
  },*/
};
</script>