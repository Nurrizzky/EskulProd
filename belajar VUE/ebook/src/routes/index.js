// createRouter untuk membuild/menginerate
// create web history
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";


// Menampung Path atau url yang akan digunakan pada aplikasi
const routes = [
   {
      // path / url
      path: '/',
      // nama route ketika dipanggil di .vue nya
      name: 'home',
      // tampilan yang akan dimunculkan
      component: Home
   }
];

// generate route yang telah didefinisikan di routes
const router = createRouter({
   history: createWebHistory(),
   routes
});

// export agar bisa digunakan/dipanggil di file lain
export default router;