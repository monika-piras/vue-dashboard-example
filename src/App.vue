<template>
  <div id="app" class="container">
    <div class="row no-margin">
      <div class="col-12 paddingCol-style">
        <header class="headerStyle">
          <router-link to="/" class="navbar-brand">VUE DASHBOARD</router-link>
          <!-- only mobile -->
          <div class="d-block d-sm-none">
            <div class="buttonMenuStyle">
              <b-button class="app-button-style" v-b-toggle.sidebar-backdrop>
                <b-icon-justify></b-icon-justify>
              </b-button>
            </div>
          </div>
        </header>
      </div>
    </div>

    <div class="row row-full-height no-margin">
      <div class="col-sm-2 d-none d-sm-block no-padding">
        <navigation-component/>
      </div>

      <div class="col-xs-12 col-sm-10 no-padding">
        <router-view/>
      </div>
    </div>

    <!-- sidebar mobile menu -->
    <b-sidebar id="sidebar-backdrop" backdrop shadow>
      <b-form-group>
        <navigation-component/>
      </b-form-group>

      <button type="button" aria-label="Close" class="close closeStyle text-dark">
        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="x" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x b-icon bi">
          <g>
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
          </g>
        </svg>
      </button>
    </b-sidebar>

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
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html,
body {
  height: 100%;
  overflow: auto;
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

.no-margin {
  margin: 0;
}

.paddingCol-style {
  padding: 0;
}

.headerStyle {
  text-align: left;
  background-color: rgb(33, 44, 61);
  border-top: 10px solid rgb(33, 44, 61);
  position: relative;
}

.buttonMenuStyle {
  position: absolute;
  top: 5px;
  left: 7px;
}

.app-button-style {
  background-color: transparent;
  border: none;
}

.app-button-style:hover {
  background-color: transparent;
  border: none;
}

.app-button-style:focus,
.app-button-style:active {
  background-color: transparent;
  border: none;
  outline: none;
}

.navbar-brand {
  margin: 10px;
  color: white !important;
  text-decoration: none !important;
}

.row-full-height {
  height: 100%;
}

.b-sidebar-header {
  display: none !important;
}

.px-3,
.py-2 {
  padding: 1rem 0 !important;
}

#sidebar-backdrop {
  max-width: 80% !important;
}

.closeStyle {
  position: absolute;
  top: 20px;
  right: -45px;
  color: #fff !important;
  opacity: 1;
}

@media only screen and (max-width: 568px) {
  html{
    font-size: 14px;
  }
  .headerStyle {
    text-align: center;
  }
}
</style>