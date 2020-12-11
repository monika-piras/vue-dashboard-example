<template>
  <div class="page-style">
    <h1>Products</h1>

    <div class="row">
      <div class="col-sm-3" v-for="item in items">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" :src="item.image" style="width:18rem;">
            <h5 class="card-title">{{item.title}}</h5>

            <div class="card-content">
              <!-- <p class="card-text">{{item.description}}</p> -->
              <!-- <h6>Category: {{item.category}}</h6> -->
              <h6>Condition: {{item.condition}}</h6>
              <div>
                <button @click="goToItemDetail()" class="btn btn-primary button-style">See More</button>
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
    goToItemDetail() {
      this.$router.push('itemDetailPage');
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

