<template>
   <div class="container d-flex justify-content-center">
      <!-- v-for : loop data di books disimpan per-item-nya di book (as) data tiap itemnya dikirim ke props bernama book yang ada di CardComponent -->
     <CardComponent v-for="data in filteredBook" :book="data"/>
   </div>
 </template>
 
 <script>
 import CardComponent from '@/components/Card.vue';
 import axios from 'axios';
 
 export default {
   name: "HomePage",
   components: {
     CardComponent,
   },
   data() {
      return {
         books: []
      }
   },
   props: {
      textSearch: {
         type: String
      }
   },
   computed: {
      // computed ini variabel yang isinya bakal berubah ubah jika suatu variabel lainnya mengalami perubahan 
      filteredBook() {
         // jika textSearch tidak ada isinya, gunakan data dari books
         if (!this.textSearch) {
            return this.books;
         }
         // jika ada textSearch, books difilterisasi sesuai yang dicari 
         // toLowerCase agar teks di book.title dan di textSearch sama sama huruf besar agar huruf besar kecil dipencarian tidak berpengaruh
         // includes sama seperti LIKE 
          return this.books.filter(book => book.title.toLowerCase().includes(this.textSearch.toLowerCase()))
      }
   },
   mounted() {
      // axios.httpMethod("endPoint")
      axios.get("http://localhost:5555/books")
      // .then: jika berhasil mengambil data maka akan melakukan aksi di dalam then
      .then(Response => {
         // ketika berhasil, data dari db yang diambil axios akan disimpan ke dalam sebuah variabel/properti
         this.books = Response.data;
         console.log(this.books);
      })
      // catch : melakukan sesuatu jika axios gagal mengambil data
      .catch(err => {
         console.log(err);
      })
   }
 };
 </script>
 