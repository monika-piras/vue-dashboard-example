<template>
  <div class="margin-style">
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
.margin-style {
    margin: 15px;
}
</style>


