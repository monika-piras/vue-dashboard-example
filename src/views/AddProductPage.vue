<template>
<div class="container">
  <div class="margin-page-style">

    <h4>ADD PRODUCT PAGE
      <button @click="goBack()" class="btn btn-secondary button-style button-style-mobile">
        <b-icon icon="chevron-left" scale=".8" class="icon-style"></b-icon>Go Back</button>
    </h4>

    <form-product-component/>
  </div>
</div>
</template>

<script>

import FormProductComponent from "@/components/FormProductComponent.vue";

export default {
  name: "AddProductPage",
  components: {
    FormProductComponent
  },
  methods: {
    goBack() {
      this.$router.push("/products");
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 30px 0;
}
.margin-page-style {
  margin: 15px;
}
.button-style {
  float: left;
}
.icon-style {
  margin-right: 10px;
}

</style>