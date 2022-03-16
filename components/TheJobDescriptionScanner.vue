<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">Job skill scan</div>
      </div>
    </header>
    <div class="card-content">
      <h2 class="title">Copy & Paste a job description</h2>
      <div class="content">
        <textarea
          v-model="jobdescription"
          class="textarea"
          rows="10"
          placeholder="..."
          :tabindex="1"
          ref="jobdescriptiontextareabox"
        ></textarea>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <input
          class="button is-primary"
          type="submit"
          :tabindex="2"
          value="Scan"
          @click="scan()"
        />
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobdescription: "",
    };
  },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
};
</script>