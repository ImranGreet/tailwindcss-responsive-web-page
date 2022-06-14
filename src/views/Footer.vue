<template>

 <section class="w-full h-auto lg:h-[400px] flex flex-col lg:flex-row justify-between items-center">

   <div class="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between border-0 lg:border-r border-gray-600/20">

     <div class="flex flex-col gap-y-5 text-gray-800/75">
        <router-link to="#"><img src="https://doctime.com.bd/images/logo/doctime_title_logo_tm.svg" alt="" class="w-36"></router-link>
        <a href="tel:01912444216" class="text-xl lg:text-2xl"> <span class="inline-block"><i class="fa-solid fa-phone"></i></span> 01912444216</a>
        <a href="mailto:imranhossain1208@gmail.com" class="text-xl lg:text-2xl"> <span class="inline-block"><span class="inline-block"><i class="fa-solid fa-envelope"></i></span></span> imranhossain1208@gmail.com</a>
        <div class="flex justify-start gap-x-6 text-xl lg:text-2xl">
          <a href="#" class="text-blue-700"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="text-blue-600/75"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="text-rose-800/75"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="text-red-600"><i class="fa-brands fa-youtube"></i></a>
        </div>
     </div>

     <div class="mt-16 lg:mt-0 flex flex-col justify-between gap-y-5 text-xl lg:text-2xl lg:pr-16">
         <router-link to="#" v-for="user in users" :key="user" class="text-gray-800/75 hover:text-blue-800/80">{{user}}</router-link>
     </div>

   </div>

   <div class="w-full lg:w-1/2  flex flex-col lg:flex-row justify-around">
     <div class="flex flex-col justify-between gap-y-5 text-2xl">
         <router-link to="#" v-for="doctor in doctors" :key="doctor" class="text-gray-800/75 hover:text-blue-800/80">{{doctor}}</router-link>
     </div>

     <div class="text-start border-0 lg:border-l border-gray-700/20 pl-0 lg:pl-8">
        <h1 class="text-4xl mb-4">Download our App</h1>
        <div class="flex flex-col justify-between gap-y-3">
          <a href="#"><img src="https://doctime.com.bd/images/logo/play_store.svg" alt="" class="w-48 h-14"></a>
           <a href="#"><img src="https://doctime.com.bd/images/logo/apple.svg" alt="" class="w-48 h-14"></a>
           <a href=""><img src="https://doctime.com.bd/images/logo/browser.svg" alt="" class="w-48 h-14"></a>
        </div>
     </div>

   </div>

 </section>

</template>

<script>
import { ref } from 'vue'

export default {
    name:"Footer",
    setup(){
        const users = ref(['About Us','How It Works','Features','Blog','Contact Us']);
        const doctors = ref(["For Doctors", "DocTime for Enterprises", "Terms & Conditions","Privacy Policy", "FAQs"]);
        return {
          users,doctors
        }
    }

}
</script>

