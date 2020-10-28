<template>
  <div class="page-style">
    <div style="position: relative;">
      <h1>Contacts</h1>
      <button @click="addUser()" class="buttonStyle">Add user</button>
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
.page-style {
  padding: 20px;
}
.buttonStyle {
  position: absolute; 
  right: 0; 
  top: 0; 
}
</style>

