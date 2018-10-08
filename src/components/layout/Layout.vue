<template>
  <div class="container">
    <header class="text-center">
      <h1 class="py-2">My app</h1>
    </header>
    <main class="jumbotron">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style lang="scss">
</style>
