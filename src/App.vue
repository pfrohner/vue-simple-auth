<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
  import Layout from './components/layout/Layout'

  export default {
    name: 'app',
    components: {
      Layout
    }
  }
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

#app {
  max-width: 720px;
  margin: 0 auto;
}
</style>
