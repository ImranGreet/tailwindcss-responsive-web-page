<template>
  <section class="w-full h-auto lg:h-[600px]  flex flex-col-reverse lg:flex-row justify-between items-center prose max-w-none">
       <div class="w-full lg:w-1/2 text-center space-y-16">
         <h1 class="text-center lg:text-left text-2xl lg:text-5xl">Main DocTime services</h1>
         <p class="text-left">{{text1}}</p>
         <p class="text-left">{{text2}}</p>
      </div>

      <div class="w-full lg:w-1/2 h-96">
         <img :src="photo" alt="" class="w-full h-full object-contain">
      </div>

  </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name:"MainService",
    setup(){
        const text1=ref("DocTime is an online medical service app where patients can get 24/7 video consultation from doctors. DocTime uses 256 bit encryption to secure the video consultation. Patient can keep their previous consultation history and view online prescriptions.");
        const text2 =ref("Doctor can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using latest technologies.");
        const photo =ref("https://doctime.com.bd/images/welcome/man_slep.webp")
        return{
            text1,
            text2,
            photo
        }
    }

}
</script>

