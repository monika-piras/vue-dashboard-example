<template>
  <div>
    <form @submit="checkForm">

      <div class="form-group align-left">
        <label class="left font-weight-style" for="inlineFormInput1">Title&nbsp;
          <span class="red">&#42;</span>
        </label>
        <input type="text" class="form-control mb-2" id="inlineFormInput1" v-model="title" placeholder="title">
        <div class="text-red-style" v-if="isErrorTitle">Title required.</div>
      </div>

      <div class="form-group align-left">
        <label class="left font-weight-style" for="inlineFormInput2">Description&nbsp;
          <span class="red">&#42;</span>
        </label>
        <textarea name="message" class="form-control mb-2" id="inlineFormInput2" v-model="description" placeholder="description"></textarea>
        <div class="text-red-style" v-if="isErrorDescription">Description required.</div>
      </div>

      <div class="text-left mb-3">
        <div class="form-group align-left font-weight-style">
          Category
        </div>
        <div class="form-group form-check inline align-left">
          <input type="checkbox" class="form-check-input" id="smartphone" value="smartphone" v-model="checkedCategories">
          <label for="romantic" class="form-check-label">Smartphones</label>
        </div>
        <div class="form-group form-check inline align-left">
          <input type="checkbox" class="form-check-input" id="games" value="games" v-model="checkedCategories">
          <label for="comic" class="form-check-label">Games</label>
        </div>
        <div class="form-group form-check inline align-left">
          <input type="checkbox" class="form-check-input" id="tv" value="tv" v-model="checkedCategories">
          <label for="adventure" class="form-check-label">TV</label>
        </div>
        <div class="form-group form-check inline align-left">
          <input type="checkbox" class="form-check-input" id="home" value="home" v-model="checkedCategories">
          <label for="adventure" class="form-check-label">Home</label>
        </div>
        <div class="form-group form-check inline align-left">
          <input type="checkbox" class="form-check-input" id="christmas" value="christmas" v-model="checkedCategories">
          <label for="adventure" class="form-check-label">Christmas</label>
        </div>
      </div>

      <div class="form-group align-left">
        <label class="left font-weight-style" for="inlineFormInput2">Price</label>
        <textarea name="message" class="form-control mb-2" id="inlineFormInput2" v-model="price" placeholder="price"></textarea>
      </div>

      <div class="form-group align-left">
        <label for="inlineFormInput5" class="font-weight-style">Image&nbsp;
          <span class="red">&#42;</span>
        </label>
        <div class="input-image-display">
          <input type="text" class="form-control mb-2 input-width" id="inlineFormInput5" v-model="image" placeholder="image url">
          <span class="span-margin">or</span>
          <input type="file" class="input-button" id="avatar" name="avatar" @change="onFileChanged" accept="image/png, image/jpeg">
        </div>

        <div class="text-red-style" v-if="isErrorImage">Image required.</div>
      </div>

      <!-- Default switch -->
      <h6 class="text-left font-weight-style">Condition</h6>
      <div class="form-group align-left custom-control custom-switch">

        <input type="checkbox" class="custom-control-input" id="customSwitches" v-model="condition">

        <label class="custom-control-label" for="customSwitches" v-if="condition">NEW</label>
        <label class="custom-control-label" for="customSwitches" v-else>USED</label>

      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-2">Add Product</button>
      </div>

    </form>
  </div>
</template>

<script>
// import Star from "@/components/Star.vue";
export default {
  name: "FormProductComponent",
  components: {
    // Star
  },
  props: {},
  data: function() {
    return {
      title: null,
      isErrorTitle: false,
      description: null,
      isErrorDescription: false,
      checkedCategories: [],
      price: null,
      condition: true,
      image: null,
      isErrorImage: false,
      imageBase64: null,
      id: Math.random() * 10
    };
  },

  methods: {
    onFileChanged(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        // console.info("data read:", reader.result);
        this.imageBase64 = reader.result;
      };

      reader.onerror = error => {
        console.error("Error reading image: ", error);
      };
    },

    checkForm: function(event) {
      event.preventDefault();

      if (this.isFormInvalid()) {
        return;
      }
      this.save();
      this.resetForm();
    },

    isFormInvalid() {
      this.compileErrors();
      return this.formHasErrors();
    },

    resetForm() {
      this.title = "";
      this.description = "";
      this.image = "";
    },
    resetErrors() {
      this.isErrorTitle = false;
      this.isErrorDescription = false;
      this.isErrorImage = false;
    },
    compileErrors() {
      this.resetErrors();

      if (!this.title || !this.hasMinLength(this.title, 5)) {
        this.isErrorTitle = true;
      }
      if (!this.description || !this.hasMinLength(this.description, 5)) {
        this.isErrorDescription = true;
      }
      if (!this.image && !this.imageBase64) {
        this.isErrorImage = true;
      }
    },
    formHasErrors() {
      var risultato = false;
      if (this.isErrorTitle || this.isErrorDescription || this.isErrorImage) {
        risultato = true;
      }
      return risultato;
    },
    hasMinLength(paramToCompare, length) {
      return paramToCompare.length >= length;
    },
    save() {
      const product = {
        title: this.title,
        description: this.description,
        categories: this.checkedCategories,
        price: this.price,
        condition: this.condition,
        image: this.image ? this.image : this.imageBase64,
        id: this.id
      };

      if (this.title) {
        this.$store.dispatch("productsStore/addProduct", product);
        this.$router.push("/products/");
      } else {
        console.log("No update Product");
      }
    }
  }
};
</script>


<style scoped>
.left {
  float: left;
}
.align-left {
  text-align: left;
}
.text-red-style {
  color: red;
}

.text-left {
  text-align: left;
}

.inline {
  display: inline;
  margin-right: 1rem;
}
.input-image-display {
  display: -webkit-box;
}
.input-width {
  width: 25%;
}
.span-margin {
  margin: 20px;
}
.input-button {
  line-height: 2.1;
}
.switch-margin {
  margin: 40px;
}

.red {
  color: red;
}

.text-left {
  text-align: left;
}
.font-weight-style {
  font-weight: 700;
}
</style>