<template>
  <div class="page-style">
    <h1>Contacts</h1>
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

</style>

