<template>
    <div class="container">
        <div v-if="productDetail">
            <h4> ITEM DETAIL PAGE </h4>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img class="card-img-top" v-bind:src="productDetail.image" style="width:18rem;">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">

                    <h3 class="card-title">{{productDetail.title}}</h3>

                    <div class="card-content">
                        <p class="card-text">
                            {{productDetail.description}}
                        </p>
                        <h6>Category: {{productDetail.category}}</h6>
                        <h6>Condition:
                            <span style="color:green;">{{productDetail.condition ? "new" : "used"}}</span>
                        </h6>
                        <h6 style="color:red;">Price: {{productDetail.price}}</h6>
                        <div>
                            <button @click="editItem(productDetail.id)" class="btn btn-primary button-style">
                                <b-icon icon="pencil" scale="1.5" class="icon-style"></b-icon>
                                Edit item</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "ItemDetailPage",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    editItem(id) {
      this.$router.push("/editItemPage/" + id);
    }
  },
  computed: {
    paramID() {
      return this.$route.params.id;
    },
    productDetail() {
      return this.$store.getters["productsStore/getProductDetails"](
        this.paramID
      );
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  margin: 30px;
}
/deep/.container {
  max-height: 100px !important;
}
.icon-style {
  margin-right: 10px;
}
</style>
