<template>
  <div class="section">
    <the-skill-scanner
      ScannerType="JobScanAndInterview"
      ScannerTitle="Job Skill Scanner"
      ScannedTextTitle="Job Description"
      ScanInstructions="Copy & Paste a job description"
    >
    </the-skill-scanner>
  </div>
</template>
<script>
import { getRandomQuestionsByCount } from "~/utils/questionUtils";
import TheSkillScanner from "../../components/TheSkillScanner.vue";

export default {
  components: { TheSkillScanner },
  head() {
    return {
      title: "Job Description Scan",
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