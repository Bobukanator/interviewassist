<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">{{ ScannerTitle }}</div>
      </div>
    </header>
    <div class="card-content">
      <h2 class="title" v-if="textscanned">{{ ScannedTextTitle }}</h2>
      <h2 class="title" v-else>{{ ScanInstructions }}</h2>
      <div class="content">
        <div v-if="scanning">
          <b-progress type="is-info"></b-progress>
        </div>
        <textarea
          v-model="textforparsing"
          class="textarea"
          rows="10"
          placeholder="..."
          :tabindex="1"
          ref="jobdescriptiontextareabox"
          v-if="!(textscanned || scanning)"
        ></textarea>
        <div v-if="textscanned && !scanning" class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="content" v-html="jobdescriptionhighlighted"></div>
            </div>
          </div>
          <div class="tile is-4 is-child notification is-info">
            <p class="title">Skills<br /><br /></p>
            <ul>
              <li class="subtitle" v-for="skill in parsedSkills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer v-if="textscanned && !scanning" class="card-footer">
      <p class="card-footer-item">
        <input
          class="button is-light"
          :tabindex="2"
          value="Rescan"
          @click="scanagain()"
        />
      </p>
      <p class="card-footer-item" v-if="ScannerType == 'JobScanAndInterview'">
        <input
          class="button is-primary"
          :tabindex="1"
          value="Next"
          @click="startinterview()"
        />
      </p>
    </footer>
    <footer v-if="!scanning && !textscanned" class="card-footer">
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
import {
  parseSkillsFromText,
  parseSkillsWCountFromText,
  skillHighlight,
} from "~/utils/skillsUtils";
export default {
  data() {
    return {
      textforparsing: "",
      parsedSkills: [],
      textscanned: false,
      scanning: false,
    };
  },
  props: {
    ScannerType: {
      type: String,
      required: true,
    },
    ScannerTitle: {
      type: String,
      required: true,
    },
    ScannedTextTitle: {
      type: String,
      required: true,
    },
    ScanInstructions: {
      type: String,
      required: true,
    },
  },
  computed: {
    skills() {
      return this.$store.state.skills.skills;
    },
    jobdescriptionhighlighted() {
      return skillHighlight(this.parsedSkills, this.textforparsing);
    },
  },
  methods: {
    async scan() {
      if (this.jobdescription != "") {
        this.scanning = true;
        if (!this.$store.state.skills) {
          const responseSkills = await this.$dataApi.getAllSkills();
          const skills = responseSkills.documents;
          this.$store.commit("set_skills", { skills });
        }

        const parsedSkillsFromText = parseSkillsFromText(
          this.skills,
          this.textforparsing
        );

        const parsedSkillCountsFromText = parseSkillsWCountFromText(
          parsedSkillsFromText,
          this.textforparsing
        );

        this.saveSkills(parsedSkillsFromText, parsedSkillCountsFromText);
        this.parsedSkills = parsedSkillsFromText.slice(); //making shallow copy of array - directly using parsedSkillsFromText with vuex causes challenges when using v-model due to Vuex Strict mode
        this.scanning = false;
        this.textscanned = true;
      }
    },
    scanagain() {
      this.textforparsing = "";
      this.textscanned = false;
    },
    startinterview() {
      this.$router.push({ path: "interview-assistant" });
    },
    saveSkills(skills, skill_counts) {
      if (this.ScannerTitle == "Job Skill Scanner") {
        this.$store.commit("set_scannedjobskills", skills);
        this.$store.commit("set_scannedjobskillcounts", skill_counts);
      }
      if (this.ScannerTitle == "Resume Parser") {
        this.$store.commit("set_scannedresumeskills", skills);
        this.$store.commit("set_scannedresumeskillcounts", skill_counts);
      }
    },
  },
};
</script>