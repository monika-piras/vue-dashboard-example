<template>
  <div id="app" class="container">
    <div class="row row-style">
      <div class="col-2 no-padding">
        <navigation-component/>
      </div>
      <div class="col-10 no-padding">
        <header>
          <button class="btn button-header-style">
            <b-icon icon="cart2" scale="1.5" class="icon-header-style"></b-icon>
          </button>
        </header>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueApexCharts from "vue-apexcharts";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMaterial);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  components: {
    NavigationComponent
  },

  created: function() {
    this.$store.dispatch("usersStore/loadUsers");
    this.$store.dispatch("productsStore/loadProducts");
  }
};
</script>


<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}
.no-padding {
  padding: 0px;
}
header {
  background-color: rgb(33, 44, 61);
  border-top: 70px solid rgb(33, 44, 61);
  position: relative;
}
.button-header-style {
  position: absolute;
  right: 20px;
}
.icon-header-style {
  color: #fff;
}
.row-style {
  width: 100%;
  height: 100%;
}
body {
  height: 100%;
}
</style>
