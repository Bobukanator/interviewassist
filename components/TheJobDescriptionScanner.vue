<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <div class="block">Job skill scan</div>
      </div>
    </header>
    <div class="card-content">
      <h2 class="title" v-if="jobscanned">Job Description</h2>
      <h2 class="title" v-else>Copy & Paste a job description</h2>
      <div class="content">
        <textarea
          v-model="jobdescription"
          class="textarea"
          rows="10"
          placeholder="..."
          :tabindex="1"
          ref="jobdescriptiontextareabox"
          v-if="!jobscanned"
        ></textarea>
        <div v-if="jobscanned" class="tile is-ancestor">
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
    <footer v-if="jobscanned" class="card-footer">
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
    <footer v-else="jobscanned" class="card-footer">
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
      jobdescription: "",
      parsedSkills: [],
      jobscanned: false,
    };
  },
  computed: {
    skills() {
      return this.$store.state.skills.skills;
    },
    jobdescriptionhighlighted() {
      return skillHighlight(this.parsedSkills, this.jobdescription);
    },
  },
  methods: {
    async scan() {
      if (this.jobdescription != "") {
        this.jobscanned = true;
        if (!this.$store.state.skills) {
          const responseSkills = await this.$dataApi.getAllSkills();
          const skills = responseSkills.documents;
          this.$store.commit("set_skills", { skills });
        }

        this.parsedSkills = parseSkillsFromText(
          this.skills,
          this.jobdescription
        );
      }
    },
    scanagain() {
      this.jobdescription = "";
      this.jobscanned = false;
    },
    startinterview() {
      this.$store.commit("set_scannedskills", this.parsedSkills);
      this.$router.push({ path: "interview-assistant" });
    },
  },
};
</script>