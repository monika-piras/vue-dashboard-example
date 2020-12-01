<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <router-link to="/" class="navbar-brand">VUE DASHBOARD</router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <b-icon icon="house" scale="1.5" class="icon-style"></b-icon> HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">
            <b-icon icon="people" scale="1.5" class="icon-style"></b-icon>Contacts</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

    </nav>
  </div>

</template>

<script>
export default {
  name: "NavigationComponent",
  props: {}
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
  height: 191.5vh;
  flex-direction: column;
  padding: 0;

  ul {
    width: 100%;
  }

  .navbar-brand {
    margin-bottom: 30px;
  }
}
.nav-item {
  text-align: left;
}
</style>
