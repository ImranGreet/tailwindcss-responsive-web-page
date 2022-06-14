<template>
  <section class="prose max-w-none w-full h-auto lg:h-screen flex flex-wrap justify-between items-center">
       <div class="w-full lg:w-[30%] flex flex-col  lg:flex-row justify-center items-center lg:items-start lg:justify-between " v-for="feature in features" :key="feature.id">
           <div class="w-1/5 self-center lg:self-start">
               <img class="w-4/6 h-24 " :src="feature.icon" alt="">
           </div>
           <div class="w-4/5">
               <h1 class="text-xl lg:text-3xl font-semibold">{{feature.title}}</h1>
               <p class="leading-relaxed">{{feature.description}}</p>
           </div>
       </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Features",
    setup(){
        const features =ref([
            {
                id:1,
                title:"Verified doctors",
                icon:"https://doctime.com.bd/images/icons/verified__doctors.svg",
                description:"Every doctors on DocTime platform are BMDC certified. We verify relevant information before the doctor can consult any patient."
            },
            {
                id:2,
                title:"Instant video consultation",
                icon:"https://doctime.com.bd/images/icons/instant__video__consultation.svg",
                description:"Most of our consultations starts within 10 minutes of making payment. The video call is secured by 256 bit encryption"
            },
             {
                id:3,
                title:"Instant electronics prescription",
                icon:"https://doctime.com.bd/images/icons/Instant_electronics_prescription.svg",
                description:"As soon as the consultation is complete, doctor will provide the electronic prescription for the patient to download instantly or later."
            },
              {
                id:4,
                title:"Easy payment options",
                icon:"https://doctime.com.bd/images/icons/easy__payment.svg",
                description:"Patient can make payment online using our secured payment gateway partner by bKash, Rocket, Nagad, debit card, credit cards and many more."
            },
             {
                id:5,
                title:"Better consultation quality",
                icon:"https://doctime.com.bd/images/icons/better__consultation__quality.svg",
                description:"Our doctors are committed to provide the best service by spending enough time required for the consultation. We constantly improve our service from the rating and feedback provided by patients."
            },
             {
                id:6,
                title:"Health history",
                icon:"https://doctime.com.bd/images/icons/health__history.svg",
                description:"Patient can get their consultation history and previous prescription digitally just in few taps."
            },
             {
                id:7,
                title:"Super fast support",
                icon:"https://doctime.com.bd/images/icons/super__fast__support.svg",
                description:"Our dedicated customer service team is available to assist you resolving any issues or answering any queries. We are happy to help."
            },
            {
                id:8,
                title:"Medicine delivered to your doorstep",
                icon:"https://doctime.com.bd/images/icons/medicine__delivered.svg",
                description:"We work very closely with our partners to deliver medicine at your doorstep."
            },
             {
                id:9,
                title:"Medicine reminder",
                icon:"https://doctime.com.bd/images/icons/mobile__reminder.svg",
                description:"Do not worry about taking your medicine on time. DocTime App will remind you."
            }
        ]);
        return {
         features
        }
    }

}
</script>

