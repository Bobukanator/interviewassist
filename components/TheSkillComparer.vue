<template>
  <div class="card" v-if="AllScanned">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">Skill Comparison</div>
      </div>
    </header>
    <div class="card-content">
      <b-table
        :data="SkillCompareArray"
        :bordered="false"
        :striped="true"
        npm
        :narrowed="true"
        :hoverable="true"
        :focusable="true"
        :mobile-cards="true"
      >
        <b-table-column
          field="skill"
          label="Job Skill"
          width="25"
          v-slot="props"
        >
          <B>{{ props.row.skill }}</B>
        </b-table-column>
        <b-table-column
          field="in_resume"
          label="Skill In Resume?"
          width="10"
          v-slot="props"
        >
          <div v-if="props.row.in_resume">
            <b-icon icon="check-bold" type="is-success"></b-icon> YES
          </div>
        </b-table-column>
        <b-table-column
          field="jobskillcount"
          label="Skill count in Job"
          width="10"
          v-slot="props"
        >
          {{ props.row.jobskillcount }}
        </b-table-column>
        <b-table-column
          field="resumeskillcount"
          label="Skill count in Resume"
          width="10"
          v-slot="props"
        >
          {{ props.row.resumeskillcount }}
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>
<script>
import { createSkillCountCompareArray } from "~/utils/skillsUtils";
export default {
  computed: {
    AllScanned() {
      return (
        this.$store.state.scannedJobSkillCounts &&
        this.$store.state.scannedResumeSkillCounts
      );
    },
    SkillCompareArray() {
      if (this.AllScanned)
        return createSkillCountCompareArray(
          this.$store.state.scannedJobSkillCounts,
          this.$store.state.scannedResumeSkillCounts
        );
      return [];
    },
  },
};
</script>