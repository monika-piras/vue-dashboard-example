<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-3">
          <navigation-component/>
      </div>
      <div class="col-9">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";

import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

// import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  components: {
    NavigationComponent
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
