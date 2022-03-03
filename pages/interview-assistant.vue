<template>
  <div class="section">
    <h1 class="title">Interview Questions</h1>
    <hr class="hr" />

    <article
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
    </article>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Interview Questions",
    };
  },
  async asyncData({ $axios, $dataApi }) {
    const questions = await $dataApi.getAllQuestions();
    return { questions };
  },
};
</script>