<template>
    <div class="page-style">
        <h1>Products</h1>

        <div class="row">
            <div class="col-sm-6" v-for="item in items">
                <div class="card">
                    <div class="card-body">
                        <img class="card-img-top" :src="item.image" style="width:18rem;">
                        <h5 class="card-title">{{item.nameProduct}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <button class="btn btn-primary">Discover More</button>
                    </div>
                </div>
            </div>

        </div>

        <!-- <table class="table" v-for="item in items">

            <tbody>
                <tr>
                    <th scope="row">{{item.id}}</th>
                    <td>
                        <b-card-group>
                            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                                <b-row no-gutters>
                                    <b-col md="6">
                                        <b-card-img :src="item.image" alt="Image" class="rounded-0">{{}}</b-card-img>
                                    </b-col>
                                    <b-col md="6">

                                        <b-card-body :title="item.nameProduct">
                                            <b-card-text> {{item.description}} </b-card-text>
                                        </b-card-body>
                                    </b-col>
                                </b-row>
                            </b-card>

                        </b-card-group>
                    </td>
                </tr>

            </tbody>
        </table> -->

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
  methods: {},

  created: function() {
    this.items = this.$store.getters["productsStore/getProducts"];
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
.page-style {
  padding: 20px;
}
</style>

