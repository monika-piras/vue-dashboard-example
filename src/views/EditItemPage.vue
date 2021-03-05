<template>
  <div class="margin-page-style">
    <h3>Edit Item Page
      <button @click="goBack(productEditDetail.id)" class="btn btn-secondary button-style">
        <b-icon icon="chevron-left" scale=".8" class="icon-style"></b-icon>Go Back</button>
    </h3>

    <form-product-component v-if="this.productEditDetail" v-bind:editItem="this.productEditDetail" />
  </div>
</template>

<script>

import FormProductComponent from "@/components/FormProductComponent.vue";

export default {
  name: "EditItemPage",
  components: {
    FormProductComponent
  },
  methods: {
    goBack(id) {
      this.$router.push("/itemDetailPage/" + id);
    }
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
};
</script>

<style lang="scss" scoped>

h3 {
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