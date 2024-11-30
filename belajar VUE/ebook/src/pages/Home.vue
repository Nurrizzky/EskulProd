<template>
   <div class="container d-flex justify-content-center">
      <!-- v-for : loop data di books disimpan per-item-nya di book (as) data tiap itemnya dikirim ke props bernama book yang ada di CardComponent -->
     <CardComponent v-for="data in books" :data="data"/>
   </div>
 </template>
 
 <script>
 import CardComponent from '@/components/Card.vue';
 import  axios  from 'axios';
 
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
 