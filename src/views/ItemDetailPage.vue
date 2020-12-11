<template>
    <div class="container">
        <h4> ITEM DETAIL PAGE </h4>

        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/I/8102bJ9WgwL._AC_UL320_.jpg" style="width:18rem;">
                    </div>
                </div>
            </div>
            <div class="col-sm-6">

                <h3 class="card-title">HP - PC 14s-fq0037nl Notebook</h3>

                <div class="card-content">
                    <p class="card-text">
                        HP - PC 14s-fq0037nl Notebook, AMD 3020e, RAM 4 GB, eMMC 64 GB, Grafica AMD Radeon, Windows 10 Home S, Schermo 14" HD SVA, USB-C, HDMI, Webcam TrueVision 720p, RJ-45, Nero
                    </p>
                    <h6>Category: Laptop</h6>
                    <h6>Condition: <span style="color:green;">New</span> </h6>
                    <h6 style="color:red;">Price: $400</h6>
                    <div>
                        <button class="btn btn-warning button-style">
                            <b-icon icon="cart2" scale="1.5" class="icon-style"></b-icon>
                        Add to Cart</button>
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
  methods: {},
  computed: {}
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
