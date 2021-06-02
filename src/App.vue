<template>
  <div id="app">
    <div class="container">
      <div class="logo">
        <h1>Controle de Livros</h1>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(99, 61, 143);
}

.logo {
  font-size: 50px;
  color: white;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}

.logo h1 {
  text-shadow: 0.1em 0.1em 0.2em black;
}
</style>
