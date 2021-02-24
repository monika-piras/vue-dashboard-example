<template>
  <div class="page-style">
    <div class="h1-style">
      <h1 class="h1-style-mobile">Products</h1>
      <div>
        <button class=" btn btn-primary add-button-style" @click="addProduct()">Add Product</button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3" v-for="item in items">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" :src="getImagePath(item.image)" style="width:18rem;">
            <h5 class="card-title">{{item.title}}</h5>

            <div class="card-content">
              <h6>Condition: {{item.condition ? "new" : "used"}}</h6>
              <span></span>
              <div>
                <button @click="goToItemDetail(item.id)" class="btn btn-outline-primary button-style">Description</button>
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
    getImagePath(localPath) {
      return process.env.VUE_APP_URL + localPath;
    },
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
.h1-style {
  position: relative;
}
.add-button-style {
  position: absolute;
  right: 0;
  top: 0;
}

@media only screen and (max-width: 992px) {
  .h1-style {
    margin-bottom: 20px;
  }
  .h1-style-mobile {
    font-size: 1.5rem;
  }
}
</style>