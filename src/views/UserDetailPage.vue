<template>
  <div class="container">
    <h4> USER DETAIL PAGE </h4>

    <form-component v-if="this.user" v-bind:user="this.user" />
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
    
    if(this.user == null){
      return this.$router.push('contacts');
    }
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
</style>
