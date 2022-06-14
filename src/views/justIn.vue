<template>
  <section class="w-full h-auto lg:h-[600px] flex flex-col lg:flex-row justify-center lg:justify-between">
     <div class="w-full lg:w-3/5">
          <p class="text-center lg:text-left text-xl">Get medical help</p>
          <h1 class="text-3xl lg:text-6xl text-center lg:text-left mb-12">Just in few taps!</h1>

          <div class="flex flex-col lg:flex-row gap-8 justify-between">
              <div v-for="path in pathOfServices" :key="path.id" class="flex flex-col  justify-center items-center lg:items-start gap-y-4">
                  <img class="w-16 h-16 rounded-full" :src="path.icon" :alt="path.description">
                  <h1 class="text-2xl font-normal text-blue-600/75">{{path.title}}</h1>
                  <p class="font-normal text-base leading-relaxed">{{path.description}}</p>
              </div>
          </div>

     </div>

     <div class="w-2/5 lg:flex lg:flex-col lg:justify-center lg:items-center  hidden">
        <img class="h-96 rounded-full" :src="doctorPhoto" alt="">
     </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
    name:"justin",
    setup(){
        const doctorPhoto=ref("https://doctime.com.bd/images/welcome/nilima.webp")
        const pathOfServices = ref([
             {
                 id:1,
                 title:"Easy to use",
                 icon:"https://doctime.com.bd/images/welcome/just_in_few_taps/soccer-gear.svg",
                 description:"Get the best user experience on DocTime App. Search for a doctor and get an instant consultation.You can join the online queue immediately, while you can continue doing other tasks at home or office."
             },
               {
                 id:2,
                 title:"AnyTime",
                 icon:"https://doctime.com.bd/images/welcome/just_in_few_taps/signs.svg",
                 description:"Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation and prescription whenever you need. Patients and doctors can keep their previous consultation history and view online prescriptions."
             },
               {
                 id:3,
                 title:"Trusted",
                 icon:"https://doctime.com.bd/images/welcome/just_in_few_taps/shield.svg",
                 description:"DocTime's experienced doctors, specialists and therapists are selected carefully. Safety and quality is at the heart of everything we do. Each doctor is certified, registered, and operates to the highest clinical standards. DocTime uses 256 bit encryption to secure the video consultation."
             }
        ]);
        return {
         pathOfServices,doctorPhoto
        }
    }

}
</script>

