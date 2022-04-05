<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">Interview Report</div>
      </div>
    </header>
    <div class="card-content">
      <div
        class="tile is-parent"
        v-for="qatitem in questionanswerarray"
        :key="qatitem.answer"
      >
        <div class="tile is-child box">
          <div class="content">
            <p class="is-size-4">{{ qatitem.question }}</p>
            <p class="is-size-5">{{ qatitem.answer }}</p>
          </div>
          <b-tooltip label="Associated skills">
            <div class="tags">
              <span
                class="tag is-primary is-light"
                v-for="tag in qatitem.tags"
                :key="tag"
                >{{ tag }}</span
              >
            </div>
          </b-tooltip>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <input
          class="button is-primary"
          type="submit"
          :tabindex="2"
          value="Save or Print"
          @click="print()"
        />
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    questionanswerarray() {
      return this.$store.state.interview.questionanswertags;
    },
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>