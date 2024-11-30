<template>
  <div>
    <!-- namanya sesuai dengan components: (bawah) -->
    <NavBar />
    <!-- menampilkan pages sesuai dengan url/path yang diakses -->
    <router-view></router-view>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    // inisialize components yang sudah di import agar bisa 
    components: {
      NavBar
    }
  }
</script>
<!-- <input type="text" v-model="name">
    <h1>Nama saya adalah {{ name }}</h1>
    <h1>Hello {{ name.toUpperCase() }} Selamat Datang</h1> -->
    <!-- // import { ref } from "vue";

// export default {
//   setup() {
//     const name = ref("Muhammad Nur Rizky");
//     return { name };
//   }
// } -->