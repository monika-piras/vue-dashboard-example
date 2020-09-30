<template>
  <div class="container">
      USER DETAIL PAGE
      {{this.user}}
  </div>
</template>

<script>
export default {
  name: "UserDetailPage",
  props: {},
  data() {
    return {
      user: Object
    };
  },
  components: {
  },
  created() {
     this.user = this.$route.params.paramUser;
     console.log('The Object is: ' + JSON.stringify(this.$route.params.paramUser));
  },
  methods: {
    
  },
  computed: {
   
  }
};
</script>
<style scoped>

</style>