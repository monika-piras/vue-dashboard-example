<template>
  <div class="container">

    <h4>ADD USER PAGE</h4>

   <form-component/>

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
 
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
h4 {
  margin: 30px;
}

.buttonStyle {
  position: absolute;
  right: 0;
  top: 0;
}

/deep/ .form-row > .col,
.form-row > [class*="col-"] {
  text-align: left;
}

/deep/.container {
  max-height: 100px !important;
}
</style>

