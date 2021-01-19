<template>
  <div id="app" class="container">
    <div class="row row-style">
      <div class="col-sm-2  d-sm-block no-padding">
        <!-- d-none -->
        <navigation-component/>
      </div>
      <div class="col-xs-12 col-sm-10 no-padding">
        <header class="headerStyle">
          <!-- only mobile -->
          <!-- <div class="d-block d-sm-none">
          button menu</div> -->
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
.headerStyle {
  background-color: rgb(33, 44, 61);
  border-top: 70px solid rgb(33, 44, 61);
}

.row-style {
  width: 100%;
  height: 100%;
  margin: 0;
}
body {
  height: 100%;
}

@media only screen and (max-width: 992px) {

  // .headerStyle {
  //   display: none;
  // }
}
</style>
