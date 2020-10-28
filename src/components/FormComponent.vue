<template>
  <div>

    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>

    <b-form @submit="onSubmit" v-else>

      <b-form-group label-cols-sm="3" id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.fname" :state="validationName" required placeholder="Enter name"></b-form-input>

        <b-form-invalid-feedback :state="validationName">
          Your Name must be 2-20 characters long.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group label-cols-sm="3" id="input-group-2" label="Surname:" label-for="input-2b">
        <b-form-input id="input-2b" v-model="form.lname" :state="validationSurname" required placeholder="Enter Surname"></b-form-input>

        <b-form-invalid-feedback :state="validationSurname">
          Your Surname ID must be 2-20 characters long.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group label-cols-sm="3" id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" :state="validationEmail" type="email" required placeholder="Enter email"></b-form-input>

        <b-form-invalid-feedback :state="validationEmail">
          Your Email is incorrect.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group label-cols-sm="3" label="Gender:">
        <b-form-radio-group class="pt-2" v-model="form.gender">
          <b-form-radio name="some-radios" value="male">Male</b-form-radio>
          <b-form-radio name="some-radios" value="female">Female</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  name: "FormComponent",
  props: {
    user: Object
  },
  data() {
    return {
      isLoading: false,

      form: {
        fname: "",
        lname: "",
        email: "",
        gender: ""
      }
    };
  },
  created: function() {
    console.log("created");

    if (this.user) {
      this.fillForm();
    }
  },
  methods: {
    fillForm() {
      (this.form.fname = this.user.name),
        (this.form.lname = this.user.surname),
        (this.form.email = this.user.email),
        (this.form.gender = this.user.gender);
    },
    onSubmit(evt) {
      if (
        this.validationName &&
        this.validationSurname &&
        this.validationEmail
      ) {
        this.isLoading = true;

        var newUser = {
          name: this.form.fname,
          surname: this.form.lname,
          email: this.form.email,
          gender: this.form.gender,
          id: this.user.id
        };

        if (this.user) {
          this.$store
            .dispatch("usersStore/updateUser", newUser)
            .then(response => {
              this.$root.$bvToast.toast("Contact successfully updated", {
                title: `Success`,
                variant: "success",
                solid: true
              });
              this.$router.push("contacts");
            })
            .catch(err => {
              this.isLoading = false;

              this.$root.$bvToast.toast("Error updating contact", {
                title: `Error`,
                variant: "warning",
                solid: true
              });
              console.error("Error updating contact");
            });
        } else {
          this.$store
            .dispatch("usersStore/addUser", newUser)
            .then(response => {
              this.$root.$bvToast.toast("Contact successfully added", {
                title: `Success`,
                variant: "success",
                solid: true
              });
              this.$router.push("contacts");
            })
            .catch(err => {
              this.isLoading = false;

              this.$root.$bvToast.toast("Error adding contact", {
                title: `Error`,
                variant: "warning",
                solid: true
              });
              console.error("Error adding contact");
            });
        }
      }

      evt.preventDefault();
    }
  },

  computed: {
    validationName() {
      return this.form.fname.length > 1 && this.form.fname.length <= 20;
    },
    validationSurname() {
      return this.form.lname.length > 1 && this.form.lname.length <= 20;
    },
    validationEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.form.email);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .form-row > .col,
.form-row > [class*="col-"] {
  text-align: left;
}
</style>
