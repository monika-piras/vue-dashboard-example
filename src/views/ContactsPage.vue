<template>
  <div class="page-style">
    <div class="h1-style">
      <h1 class="h1-style-mobile">Contacts</h1>
      <button type="button" class="btn btn-primary buttonStyle" @click="addUser()">Add User</button>
    </div>

    <table-search-component/>
  </div>
</template>

<script>
// @ is an alias to /src

import TableSearchComponent from "@/components/TableSearchComponent.vue";

export default {
  name: "ContactsPage",
  components: {
    TableSearchComponent
  },
  methods: {
    addUser() {
       this.$router.push('addUserPage');
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
.h1-style {
  position: relative;
}
.page-style {
  padding: 20px;
}
.buttonStyle {
  position: absolute; 
  right: 0; 
  top: 0; 
}
@media only screen and (max-width: 992px) {
  .h1-style {
    margin-bottom: 20px;
  }
  .h1-style-mobile {
    font-size: 1.5rem;
  }
}
</style>

