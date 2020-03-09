<template>
  <header>
    <div>
      <span class="blog-title" to="/" @click.prevent="homeScrollTop">
        <h1>三恵</h1>
      </span>
      <nav>
        <nuxt-link to="/contact">
          お問い合わせ
        </nuxt-link>
        <nuxt-link to="/room">
          物件
        </nuxt-link>
        <nuxt-link to="/overview">
          会社概要
        </nuxt-link>
        <nuxt-link to="/privacy_policy">
          プライバシーポリシー
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  mixins: {
    homeScrollTop: Function
  },
  computed: {
    meta() {
      return this.$store.state.meta
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

header {
  font-family: 'Roboto', sans-serif;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  > div {
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    background-color: #fff;
    display: flex;
    height: 80px;
    margin: 0 auto;
    max-width: $containerWidth;
    padding: 0 32px;
    transition: padding-top 0.5s, padding-bottom 0.5s;

    @media (max-width: 700px) {
      height: 60px;
      padding: 16px;
    }
  }

  .blog-title {
    margin-right: 32px;

    @media (max-width: 700px) {
      margin-right: 16px;
    }

    h1 {
      color: #666;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  nav {
    flex-shrink: 0;

    @media (max-width: 500px) {
      display: none;
    }
  }

  a {
    border-color: lighten($primary, 40%);
    color: #757575;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;

    &:hover {
      color: #555;
      border-color: #555;
    }

    &.nuxt-link-active {
      padding-bottom: 4px;
      border-bottom: 2px solid;
    }

    & + a {
      margin-left: 32px;

      @media (max-width: 700px) {
        margin-left: 16px;
      }
    }
  }
}
</style>
