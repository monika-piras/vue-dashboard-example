<template>
  <div class="container">
    <div class="margin-page-style">

      <h4>ADD USER PAGE
        <button @click="goBack()" class="btn btn-secondary button-style">
          <b-icon icon="chevron-left" scale=".8" class="icon-style"></b-icon>Go Back</button>
      </h4>

      <form-component/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "AddUserPage",
  components: {
    FormComponent
  },
  methods: {
    goBack() {
      this.$router.push("/contacts");
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
h4 {
  margin: 30px 0;
}
.buttonStyle {
  position: absolute;
  right: 0;
  top: 0;
}
.button-style {
  float: left;
}
.icon-style {
  margin-right: 10px;
}

/deep/ .form-row > .col,
.form-row > [class*="col-"] {
  text-align: left;
}

/deep/.container {
  max-height: 100px !important;
}

.margin-page-style {
  margin: 15px;
}
</style>