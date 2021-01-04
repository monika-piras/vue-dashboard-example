<template>
  <div class="page-style">
    <h1>Products</h1>

<button @click="addProduct()">Add Product</button>
    <div class="row">
      <div class="col-sm-3" v-for="item in items">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" :src="item.image" style="width:18rem;">
            <h5 class="card-title">{{item.title}}</h5>

            <div class="card-content">
              <h6>Condition: {{item.condition}}</h6>
              <div>
                <button @click="goToItemDetail(item.id)" class="btn btn-primary button-style">Description</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProductsPage",
  components: {},
  data() {
    return {
      items: []
    };
  },
  methods: {
    goToItemDetail(id) {
      this.$router.push("/itemDetailPage/" + id);
    },
    addProduct() {
      this.$router.push("/addProductPage/");
    }
  },

  created: function() {
    this.items = this.$store.getters["productsStore/getProducts"];
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
h5 {
  font-weight: 600;
  margin: 20px;
}
.page-style {
  padding: 20px;
}
img {
  height: 200px;
}
.card {
  margin-bottom: 1.5rem;
}
.card-title {
  min-height: 48px;
}

.button-style {
  margin-top: 10px;
}
</style>

