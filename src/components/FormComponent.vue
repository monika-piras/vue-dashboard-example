<template>
  <div>
    <div class="text-center" v-if="isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>

    <b-form @submit="onSubmit" v-else>

      <b-form-group label-cols-sm="3" class="font-weight-style" id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.fname" :state="isFormNameValid" placeholder="Enter name"></b-form-input>

        <b-form-invalid-feedback :state="isFormNameValid">
          Your Name must be 2-20 characters long.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group label-cols-sm="3" class="font-weight-style" id="input-group-2" label="Surname:" label-for="input-2b">
        <b-form-input id="input-2b" v-model="form.lname" :state="isFormSurnameValid" placeholder="Enter Surname"></b-form-input>

        <b-form-invalid-feedback :state="isFormSurnameValid">
          Your Surname ID must be 2-20 characters long.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group label-cols-sm="3" class="font-weight-style" id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" :state="isFormEmailValid" type="email" placeholder="Enter email"></b-form-input>
        <b-form-invalid-feedback :state="isFormEmailValid">
          Your Email is incorrect.
        </b-form-invalid-feedback>

      </b-form-group>

      <b-form-group class="mt-2 font-weight-style" label="Gender:">
        <b-form-radio-group class="pt-2" v-model="form.gender">
          <span class="font-weight-radio">
            <b-form-radio name="some-radios" value="male">Male</b-form-radio>
            <b-form-radio name="some-radios" value="female">Female</b-form-radio>
          </span>

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
      isSubmitted: false,

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
      evt.preventDefault();
      this.isSubmitted = true;

      if (
        this.validationName &&
        this.validationSurname &&
        this.validationEmail
      ) {
        this.isLoading = true;

        if (this.user) {
          var newUser = {
            name: this.form.fname,
            surname: this.form.lname,
            email: this.form.email,
            gender: this.form.gender,
            id: this.user.id
          };

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
          var newUser = {
            name: this.form.fname,
            surname: this.form.lname,
            email: this.form.email,
            gender: this.form.gender,
            id: Math.random() * 100
          };

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
    },

    isFormNameValid() {
      return !this.isSubmitted && !this.form.fname ? null : this.validationName;
    },
    isFormSurnameValid() {
      return !this.isSubmitted && !this.form.lname
        ? null
        : this.validationSurname;
    },
    isFormEmailValid() {
      return !this.isSubmitted && !this.form.email
        ? null
        : this.validationEmail;
    }
  }
};
</script>

<style lang="scss" scoped>

.font-weight-style {
  font-weight: 700;
}
.font-weight-radio {
  font-weight: 400;
}
.form-row {
  display: block;
  margin: 0;
}

/deep/.col-form-label {
  float: left;
  text-align: left;
}

.invalid-feedback {
  margin: 0.5rem;
}
.bv-no-focus-ring {
  text-align: left;
}
</style>