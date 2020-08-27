<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-2 no-padding">
          <navigation-component/>
      </div>
      <div class="col-10 no-padding">
        <header></header>
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

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);


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
  max-width: 100%;
  padding: 0;
  margin: 0;
}
.no-padding {
  padding:0px;
}
header {
  background-color: #3964b3;
  border-top: 41px solid #3964b3;
}
.row {
  width: 100%;
}
</style>
