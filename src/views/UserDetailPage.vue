<template>
  <div class="container">
    <div class="margin-page-style">
      <h4> USER DETAIL PAGE
        <button @click="goBack()" class="btn btn-secondary button-style">
          <b-icon icon="chevron-left" scale=".8" class="icon-style"></b-icon>Go Back</button>
      </h4>

      <form-component v-if="this.user" v-bind:user="this.user" />
    </div>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "UserDetailPage",
  components: {
    FormComponent
  },
  props: {},
  data() {
    return {
      user: Object
    };
  },
  methods: {
    goBack() {
      this.$router.push("/contacts");
    }
  },

  created() {
    this.user = this.$route.params.paramUser;

    if (this.user == null) {
      return this.$router.push("contacts");
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 30px 0;
}
.button-style {
  float: left;
}
.icon-style {
  margin-right: 10px;
}

/deep/.container {
  max-height: 100px !important;
}

.margin-page-style {
  margin: 15px;
}
</style>