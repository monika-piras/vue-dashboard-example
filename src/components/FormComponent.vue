<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-2" label="Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Surname:" label-for="input-2b">
                <b-form-input id="input-2b" v-model="form.surname" required placeholder="Enter Surname"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
            </b-form-group>

            <b-form-group label="Gender:">
                <b-form-radio-group v-model="form.gender">
                    <b-form-radio name="some-radios" value="male">Male</b-form-radio>
                    <b-form-radio name="some-radios" value="female">Female</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
export default {
  name: "FormComponent",
  props:{
      user:Object
  },
  data() {
    return {
      form: {
        name: this.user.name,
        surname: this.user.surname,
        email: this.user.email,
        gender: this.user.gender
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.surname = "";
      this.form.gender = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>