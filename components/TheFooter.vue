<template>
  <footer>
    <div>
      <div>© 株式会社三恵</div>
      <div>{{ year }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  mixins: {
    homeScrollTop: Function
  },
  computed: {
    meta() {
      return this.$store.state.meta
    },
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

footer {
  > div {
    align-items: center;
    background-color: #fff;
    color: #757575;
    display: flex;
    flex-direction: column;
    height: 200px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    margin: 0 auto;
    max-width: $containerWidth;
    padding: 64px 0px;
    text-align: center;
    bottom: 0;
  }

  .link {
    color: #757575;
    font-weight: 400;
  }
}
</style>
