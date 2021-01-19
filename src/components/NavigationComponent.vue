<template>
  <nav class="navbar navbar-light bg-light">
    <router-link to="/" class="navbar-brand">VUE DASHBOARD</router-link>

    <ul class="navbar-nav navigationMobileHidden">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <b-icon icon="house" scale="1.5" class="icon-style"></b-icon>
          <span class="label-responsive">HOME</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacts" class="nav-link">
          <b-icon icon="people" scale="1.5" class="icon-style"></b-icon>Contacts</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/products" class="nav-link">
          <b-icon icon="cart" scale="1.5" class="icon-style"></b-icon>Products</router-link>
      </li>
    </ul>

    <div>
      <b-button class="buttonMobile" v-b-toggle.sidebar-1>
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <b-icon icon="house" scale="1.5" class="icon-style"></b-icon>
                <span class="label-responsive">HOME</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacts" class="nav-link">
                <b-icon icon="people" scale="1.5" class="icon-style"></b-icon>Contacts</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                <b-icon icon="cart" scale="1.5" class="icon-style"></b-icon>Products</router-link>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>

  </nav>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #92abcf !important;
  font-weight: 600 !important;
  width: 100%;
  margin: 0;
}
.nav-link {
  color: #92abcf !important;
  font-weight: 400 !important;
  width: 100%;
  padding-left: 3rem;

  .icon-style {
    margin-right: 20px;
  }

  &.router-link-exact-active {
    background-color: #fff;
    cursor: pointer;
    color: rgb(33, 44, 61) !important;

    .icon-style {
      color: rgb(33, 44, 61) !important;
    }
  }
}
nav {
  background-color: rgb(33, 44, 61) !important;
  justify-content: flex-start;
  height: 100%;
  flex-direction: column;
  padding: 0;

  ul {
    width: 100%;
  }

  .navbar-brand {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.nav-item {
  text-align: left;
}
.buttonMobile {
  display: none;
}
@media (min-width: 576px) {

}
@media only screen and (min-width: 768px) {
 
}

@media only screen and (max-width: 992px) {
   .buttonMobile {
    display: block;
    margin-bottom: 20px;
  }
  .navigationMobileHidden {
    display: none;
  }
  .navbar-brand {
    font-size: 14px;
  }
}

</style>
