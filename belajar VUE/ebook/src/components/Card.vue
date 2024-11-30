<template>
   <div class="card w-25 mx-3 shadow">
      <div class="card-header d-flex align-items-center border-bottom bg-info">
         <span class="avatar text-bg-primary avatar-lg fs-5">{{ Array.from(data.title)[0] }}</span>
         <div class="ms-3">
            <h6 class="mb-0 fs-sm">{{ data.title }}</h6>
            <span class="text-muted fs-sm">{{ data.author }}</span>
         </div>
      </div>
      <div class="card-body">
         {{ data.synopsis }}
      </div>
   </div>
</template>

<script>
   export default {
      name: "CardComponent",
      // wadah data yang dikirim dari pages yang dikirim dari luar untuk digunakan untuk components
      props: {
         // nama Variabel
         data: {
            // tipe data
            type: Object,
            // wajib disii apa ngga ketika componentnya dipanggil
            required: true
         }
      }  
   }
</script>