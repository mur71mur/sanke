import Vue from 'vue'

Vue.mixin({
  methods: {
    /**
     * Handles the click event of the header logo
     */
    homeScrollTop() {
      if (window.location.pathname === '/') {
      } else {
        this.$router.push('/')
      }
    }
  }
})
