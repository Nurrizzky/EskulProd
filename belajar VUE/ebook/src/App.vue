<template>
  <div>
    <!-- namanya sesuai dengan components: (bawah) -->
     <!-- @bisa untuk Event, kalau nama @ nya gaada di list event js, maka dia sebuah emmit -->
    <NavBar @textSearch="handleSearchEmit" />
    <!-- menampilkan pages sesuai dengan url/path yang diakses -->
     <!-- Mengirim props bernama textSearch dari data local bernama textSearch -->
    <router-view :textSearch="textSearch"></router-view>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    // inisialize components yang sudah di import agar bisa 
    components: {
      NavBar
    },
    data() {
      return {
        textSearch: ""
      }
    },
    methods: {
      handleSearchEmit(textSearchFromEmit) {
        // data yang dikirim emit, disimpan sebagai data local file ini
        this.textSearch = textSearchFromEmit;
      }
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