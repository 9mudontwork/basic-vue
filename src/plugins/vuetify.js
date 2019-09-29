import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        aaa: "#000000"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
