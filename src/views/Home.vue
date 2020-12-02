<template>
  <div class="home">
    <img alt="" :src="url">

    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>

    <!-- <button @click="handleOnclick()">Promise</button> -->

    <template>
      <div>
        <apexchart @click="handleOnclick()" width="380" type="donut" :options="chartData.chartOptions" :series="chartData.series"></apexchart>
      </div>
    </template>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},

  data() {
    return {
      url: "",
      isLoading: false,

      hover: ''
    };
  },

  computed: {
    Men() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var menList = personsList.filter(item => item.gender === "male");
      var allMen = menList.length;

      return allMen;
    },
    Women() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var femaleList = personsList.filter(item => item.gender === "female");
      var allWomen = femaleList.length;

      return allWomen;
    },

    chartData() {
      return {
        series: [this.Men, this.Women],
        chartOptions: {
          chart: {
            width: 380,
            type: "donut"
          },
          labels: ["MEN", "WOMEN"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        }
      };
    }
  },
  methods: {
    retrieveImg() {
      return new Promise(function(resolve, reject) {
        console.log("get promise on click");

        setTimeout(function() {
          resolve(
            "https://cdn-img-q.facciabuco.com/83/dr3m935pp9-vaccata_a.jpg"
          );
        }, 3000);
      });
    },

    handleOnclick() {
      this.isLoading = true;

      this.retrieveImg().then(
        data => {
          console.log("promise resolved with ", data);
          this.isLoading = false;
          this.url = data;
        },
        err => {
          console.log("promise in error");
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.donutStyle {
}
/deep/ .apexcharts-canvas {
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
}
</style>
