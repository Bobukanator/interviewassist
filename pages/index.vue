<template>
  <landing-welcome></landing-welcome>
</template>
<script>
import LandingWelcome from "@/components/LandingWelcome";

export default {
  components: { LandingWelcome },
  head() {
    return {
      title: "Welcome",
      meta: [
        {
          name: "Description ",
          content:
            "A Digital Career Coach that guides individuals to realize their personal and career potential by exploring powerful, proven, and practical techniques at the intersection of Information Science, Computer Science, and Career Development. We believe that you need to know yourself to know your plan.",
        },
      ],
    };
  },
};
</script> 