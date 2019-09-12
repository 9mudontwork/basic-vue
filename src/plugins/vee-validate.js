import Vue from "vue";
import VeeValidate from "vee-validate";

const veeValidationConfig = {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
};

Vue.use(VeeValidate, veeValidationConfig);

export default VeeValidate;
