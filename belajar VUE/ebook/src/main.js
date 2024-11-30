import { createApp } from 'vue'
import App from './App.vue'
// import route/index.js untuk menyambungkan app dengan routingnya
import router from './routes'

// Memanggil Framework bootstrap agar bisa digunakan
import "bootstrap/dist/css/bootstrap.css"  // CSS
import "bootstrap" // JS
import { useRouter } from 'vue-router'

// proses pengambungan app vue dengan routingnya : use(router)
createApp(App).use(router).mount('#app')
// #app adalah id yang ada di div public/index.html
