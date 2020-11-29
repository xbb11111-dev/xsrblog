<template>
  <div id="app">
    <Tab :tabs="tabs" v-model="value" />
    <div class="content-container">
      <div v-if="value === 0">Tab{{value}}</div>
      <div v-else-if="value === 1">Tab{{value}}</div>
      <div v-else>Tab{{value}}</div>
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
import Tab from "./components/Head .vue";

export default {
  name: "App",
  components: {
    Tab,
  },
  data() {
    return {
      tabs: ["Investment", "Operation", "Function"],
      value: 0,
    };
  },
};
</script>

<style>
html {
  background-color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content-container {
  font-size: 48px;
  color: #fff;
}
</style>
