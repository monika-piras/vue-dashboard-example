<template>
  <div>
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

</style>

