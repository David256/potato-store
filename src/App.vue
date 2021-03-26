<template>
  <div class="container">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: arial narrow;
  font-style: normal;
  font-weight: 400;
  src: url('assets/arial-narrow.ttf') format('truetype')
}

#app {
  font-family: 'Arial Narrow', Arial, sans-serif;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
