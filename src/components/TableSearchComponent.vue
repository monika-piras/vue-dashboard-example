<template>
  <div>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Surname" md-sort-by="surname">{{ item.surname }}</md-table-cell>
        <!-- <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell> -->
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <!-- <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell> -->
        <md-table-cell md-label="" md-sort-by="">
          <button v-on:click="edit(item)">Edit</button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

// const toLower = text => {
//   return text.toString().toLowerCase();
// };

// const searchByName = (items, term) => {
//   if (term) {
//     return items.filter(item => toLower(item.name).includes(toLower(term)));
//   }

//   return items;
// };

export default {
  name: "TableSearchComponent",
  data: () => ({
    search: null,
    searched: []
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = this.$store.getters["usersStore/search"](this.search);
    },
    edit(paramUser) {
      this.$router.push({ name: 'userDetailPage', params: {paramUser}});
    }
  },
  created: function() {
    this.searched = this.$store.getters["usersStore/getUsers"];
  },

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

/deep/ .md-card .md-table .md-theme-default {
    width: 100%;
    height: 100%;
    overflow: hidden;

}

/deep/ .md-content .md-table-content .md-scrollbar .md-theme-default {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>