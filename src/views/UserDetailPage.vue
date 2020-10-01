<template>
  <div class="container">
      USER DETAIL PAGE

    <form-component v-bind:user="this.user"/>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "UserDetailPage",
  components: {
    FormComponent
  },
  props: {},
  data() {
    return {
      user: Object
    };
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