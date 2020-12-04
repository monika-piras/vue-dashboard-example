<template>
  <div class="home">
    <img alt="" :src="url">

    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>

    <!-- <button @click="handleOnclick()">Promise</button> -->

    <div>
      <h4 class="titleChartStyle">Chart User's Gender</h4>
      <apexchart @click="handleOnclick()" width="500" type="bar" :options="chartDataBar.chartOptions" :series="chartDataBar.series"></apexchart>
    </div>

    <div>
      <h4 class="titleChartStyle">Chart User's Age</h4>
      <apexchart @click="handleOnclick()" width="380" type="donut" :options="chartDataDonut.chartOptions" :series="chartDataDonut.series"></apexchart>
    </div>
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
      isLoading: false
    };
  },

  computed: {
    men() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var menList = personsList.filter(item => item.gender === "male");
      var allMen = menList.length;

      return allMen;
    },
    women() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var femaleList = personsList.filter(item => item.gender === "female");
      var allWomen = femaleList.length;

      return allWomen;
    },


    ageOver30() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var usersOver30 = personsList.filter(item => item.age > 30);
      var over30 = usersOver30.length;

      return over30;
    },

    ageUnder30() {
      var personsList = this.$store.getters["usersStore/getUsers"];
      var usersUnder30 = personsList.filter(item => item.age <= 30);
      var under30 = usersUnder30.length;
      
      return under30;
    },

    chartDataBar() {
      return {
        chartOptions: {
          chart: {
            width: 500,
            type: "bar"
          },
          xaxis: {
            categories: ["MEN", "WOMEN"]
          },

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
        },
        series: [
          {
            name: "number",
            data: [this.men, this.women]
          }
        ]
      };
    },
    chartDataDonut() {
      return {
        series: [this.ageOver30, this.ageUnder30],
        chartOptions: {
          chart: {
            width: 380,
            type: "donut"
          },
          labels: ["Age >30", "Age <30"],
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
/deep/ .apexcharts-canvas {
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
}
.titleChartStyle {
  margin: 30px 0 40px 0;
  text-transform: uppercase;
}
</style>
