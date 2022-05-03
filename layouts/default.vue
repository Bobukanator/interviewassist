<template>
  <div class="container">
    <header class="app-header">
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="images/Career Informatics-logos_black120x72.png"
              alt="Career Informatics Logo - person climbing stairs"
            />
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Home
          </b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/interview/interview-assistant' }"
          >
            Basic Interview
          </b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/interview/skillscanner' }"
          >
            Smart Interview
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            About
          </b-navbar-item>
          <!--<b-navbar-dropdown label="Info">
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
              About
            </b-navbar-item>
            <b-navbar-item href="#"> Contact </b-navbar-item>
          </b-navbar-dropdown>-->
        </template>
        <template #end>
          <!--        <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </b-navbar-item>-->
        </template>
      </b-navbar>
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Copyright &copy; 2022 Spero Autem LLC. All Rights Reserved.</p>
        <p><NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
};
</script>