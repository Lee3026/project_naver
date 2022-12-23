<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Apply></Apply>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header';
import Apply from './components/Apply';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Apply,
    Footer
  }
}

</script>

<style lang="scss">
#app {
  min-width: 1300px;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
