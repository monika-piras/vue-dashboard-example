<template>
  <div>
    <md-table v-model="searched" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start"></div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Surname" md-sort-by="surname">{{ item.surname }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Person Age" md-sort-by="age">{{ item.age }}</md-table-cell>
        <md-table-cell md-label="" md-sort-by="">
          <button type="button" class="btn btn-outline-primary btn-sm" v-on:click="edit(item)">Edit</button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

export default {
  name: "TableSearchComponent",
  data: () => ({
    search: null,
    searched: []
  }),
  methods: {
    searchOnTable() {
      this.searched = this.$store.getters["usersStore/search"](this.search);
    },
    edit(paramUser) {
      this.$router.push({ name: "userDetailPage", params: { paramUser } });
    }
  },
  created: function() {
    this.searched = this.$store.getters["usersStore/getUsers"];
  }
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}

/deep/ .md-table-head,
.md-numeric {
  text-align: center;
}

/deep/ .md-table-content {
  max-width: 90% !important;
  height: 100% !important;
  max-height: 100% !important;
}
</style>