<template>
   <div class="card w-25 mx-3 shadow">
      <div class="card-header d-flex align-items-center border-bottom bg-info">
         <span class="avatar text-bg-primary avatar-lg fs-5">{{ Array.from(book.title)[0] }}</span>
         <div class="ms-3">
            <h6 class="mb-0 fs-sm">{{ book.title }}</h6>
            <span class="text-muted fs-sm">{{ book.author }}</span>
         </div>
      </div>
      <div class="card-body">
         {{ book.synopsis }}
      </div>
   </div>
</template>

<script>
   export default {
      name: "CardComponent",
      // wadah book yang dikirim dari pages yang dikirim dari luar untuk digunakan untuk components
      props: {
         // nama Variabel
         book: {
            // tipe book
            type: Object,
            // wajib disii apa ngga ketika componentnya dipanggil
            required: true
         }
      }  
   }
</script>