import { createApp } from 'vue'
import App from '@/index.vue'
import router from '@/router/index'
import VueProgressBar from "@aacassandra/vue3-progressbar";

// Create Vue Instance
const app = createApp(App)

app.config.productionTip = false

/********************************************************************************************
 * @Description
 *  vue3-progressbar 사용 (https://morioh.com/p/eb30fc4e199e)
 ********************************************************************************************/
 const options = {
  //color: "#c90000",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "2s", // speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  inverse: false,
};

app.use(VueProgressBar, options)
/********************************************************************************************/

app.use(router)
app.mount('#app')