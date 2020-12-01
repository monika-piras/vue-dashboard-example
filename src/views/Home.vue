<template>
  <div class="home">
    <img alt="Vue logo" :src="url">

    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>

    <button @click="handleOnclick()">Promise</button>

    <template>
      <div>
        <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
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

      options: {},
      series: [44, 55, 41, 17, 15]
    };
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
