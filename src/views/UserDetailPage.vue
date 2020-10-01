<template>
  <div class="container">
    USER DETAIL PAGE

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
<style scoped>

</style>