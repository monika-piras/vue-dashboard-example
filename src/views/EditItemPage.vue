<template>
  <div class="margin-page-style">
      <h3>Edit Item Page</h3>
      <form-product-component v-if="this.productEditDetail" v-bind:editItem="this.productEditDetail"/>
  </div>
</template>

<script>
import FormProductComponent from "@/components/FormProductComponent.vue";

export default {
name: "EditItemPage",
components: {
  FormProductComponent
},

computed: {
    paramID() {
      return this.$route.params.id;
    },
    productEditDetail() {
      return this.$store.getters["productsStore/getProductDetails"](
        this.paramID
      );
    }
  }
}

</script>

<style lang="scss" scoped>
.margin-page-style {
  margin: 15px;
}
</style>

