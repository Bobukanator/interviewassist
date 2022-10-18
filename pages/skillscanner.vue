<template>
  <div class="section">
    <the-skill-scanner
      ScannerType="SkillScannerModule"
      ScannerTitle="Job Skill Scanner"
      ScannedTextTitle="Job Description"
      ScanInstructions="Copy & Paste a job description"
    >
    </the-skill-scanner>
    <the-skill-scanner
      ScannerType="SkillScannerModule"
      ScannerTitle="Resume Parser"
      ScannedTextTitle="Resume/CV"
      ScanInstructions="Copy & Paste your Resume/CV"
    >
    </the-skill-scanner>
  </div>
</template>
<script>
import TheSkillScanner from "../components/TheSkillScanner.vue";

export default {
  components: { TheSkillScanner },
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