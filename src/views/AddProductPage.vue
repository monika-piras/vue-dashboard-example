<template>
  <div class="margin-page-style">
      <h4>ADD PRODUCT PAGE</h4>
      
      <form-product-component/>
  </div>
</template>



<script>
import FormProductComponent from "@/components/FormProductComponent.vue";

export default {
  name: "AddProductPage",
  components: {
    FormProductComponent
}
}
</script>
<style lang="scss" scoped>
.margin-page-style {
    margin: 15px;
}
</style>


