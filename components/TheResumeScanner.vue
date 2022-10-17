<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">Resume skill scan</div>
      </div>
    </header>
    <div class="card-content">
      <h2 class="title" v-if="jobscanned">Resume/CV</h2>
      <h2 class="title" v-else>Copy & Paste your Resume/CV</h2>
      <div class="content">
        <div v-if="resumescanning">
          <b-progress type="is-info"></b-progress>
        </div>
        <textarea
          v-model="resumecontent"
          class="textarea"
          rows="10"
          placeholder="..."
          :tabindex="1"
          ref="jobdescriptiontextareabox"
          v-if="!(resumescanned || resumescanning)"
        ></textarea>
        <div v-if="resumescanned && !jobscanning" class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <div class="content" v-html="resumecontenthighlighted"></div>
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
    <footer v-if="resumescanned && !resumescanning" class="card-footer">
      <p class="card-footer-item">
        <input
          class="button is-light"
          :tabindex="2"
          value="Rescan"
          @click="scanagain()"
        />
      </p>
      <p class="card-footer-item">
        <input
          class="button is-primary"
          :tabindex="1"
          value="Next"
          @click="startinterview()"
        />
      </p>
    </footer>
    <footer v-if="!resumescanning && !resumescanned" class="card-footer">
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
import { parseSkillsFromText, skillHighlight } from "~/utils/skillsUtils";
export default {
  data() {
    return {
      resumecontent: "",
      parsedSkills: [],
      resumescanned: false,
      resumescanning: false,
    };
  },
  computed: {
    skills() {
      return this.$store.state.skills.skills;
    },
    resumecontenthighlighted() {
      return skillHighlight(this.parsedSkills, this.resumecontent);
    },
  },
  methods: {
    async scan() {
      if (this.resumecontent != "") {
        this.resumescanning = true;
        if (!this.$store.state.skills) {
          const responseSkills = await this.$dataApi.getAllSkills();
          const skills = responseSkills.documents;
          this.$store.commit("set_skills", { skills });
        }

        this.parsedSkills = parseSkillsFromText(
          this.skills,
          this.resumecontent
        );
        this.resumescanning = false;
        this.resumescanned = true;
      }
    },
    scanagain() {
      this.resumecontent = "";
      this.resumescanned = false;
    },
    startinterview() {
      //this.$store.commit("set_scannedskills", this.parsedSkills);
      //this.$router.push({ path: "interview-assistant" });
    },
  },
};
</script>