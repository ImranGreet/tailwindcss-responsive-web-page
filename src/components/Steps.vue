<template>
   <section class="w-full lg:w-4/5 mx-auto">

      <div class="flex flex-col justify-between items-center prose max-w-none">
           <h3 class="text-2xl lg:text-6xl">Three easy steps!</h3>
           <p class="text-lg">You don't need to wait physically hours in hospital to see a doctor.
             You can join the online queue immediately, while you can continue doing other tasks at home or office.</p>
      </div>

      <div class="w-full flex flex-col lg:flex-row justify-between">

         <div class="w-full lg:w-1/2 mx-auto">
            <img src="https://images.unsplash.com/photo-1541591708423-9001fe827349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" class="w-full">
         </div>

         <div class="w-full lg:w-1/2 flex justify-between">
             <div class="hidden w-1/4 lg:flex flex-col justify-evenly text-gray-600/70">
                  <h1 class="text-8xl">1</h1>
                  <h1 class="text-8xl">2</h1>
                  <h1 class="text-8xl">3</h1>
             </div>

             <div class="w-1/4 flex flex-col justify-evenly">
                <button class="w-24 h-16 rounded-md bg-gradient-to-r from-blue-600/70 to-blue-600/25 text-2xl text-stone-800/75"><i class="fa-solid fa-magnifying-glass"></i></button>
                <button class="w-24 h-16 rounded-md bg-gradient-to-r from-blue-600/70 to-blue-600/25 text-2xl text-stone-800/75"><i class="fa-solid fa-video"></i></button>
                <button class="w-24 h-16 rounded-md bg-gradient-to-r from-blue-600/70 to-blue-600/25 text-2xl text-stone-800/75"><i class="fa-solid fa-prescription"></i></button>
             </div>

             <div class="w-1/2 flex flex-col justify-evenly">
                  <div class="" v-for="step in stepProperties" :key="step.id">
                    <h1 class="text-2xl">{{step.title}}</h1>
                    <p class="text-justify">{{step.text}}</p>
                  </div>
             </div>
         </div>

      </div>
   </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Steps",
    setup(){
        const textMessage =ref("You don't need to wait physically hours in hospital to see a doctor.You can join the online queue immediately, while you can continue doing other tasks at home or office.");
        const stepProperties =ref([
            {
                id:1,
                
                title:'Search your Doctor!',
                text:'Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.',
                photo:'https://doctime.com.bd/images/welcome/phone_farme.webp',
            },
             {
                id:2,
                title:'Consult live on VideoCall',
                text:'Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.',
                photo:'https://doctime.com.bd/images/welcome/phone_farme.webp'
            },
            {
                id:3,
                title:'Instant Prescription',
                text:'Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.',
                photo:'https://doctime.com.bd/images/welcome/phone_farme.webp'
            }
        ]);
        return {
          textMessage,
          stepProperties
        }
    }

}
</script>

