<template>
  <section class="flex flex-col lg:flex-row justify-between mt-24 items-center prose max-w-none">
      
      <div class="w-full lg:w-1/2  text-center lg:text-left">
        <div class="flex flex-col justify-between space-y-2">
            <h1 class="text-2xl lg:text-5xl">Are you a qualified Doctor?</h1>
            <h3 class="text-lg font-semibold">Join the forefront of digital healthcare</h3>
            <p class="tracking-wide">{{msgForDoctor}}</p>
        </div>
        <div class="w-full">
            <p>Enroll yourself just in minutes!</p>
            <button class="bg-gradient-to-r from-blue-600 to-blue-300 w-2/3 mx-auto lg:w-36 shadow-xl rounded-lg px-6 py-2.5">Sign up now</button>
        </div>
      </div>

      <div class="w-full lg:w-1/2">
          <img class="w-4/5 mx-auto" :src="photo" alt="">
      </div>

  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"DoctorsSignUp",
    setup(){
        const photo =ref("https://doctime.com.bd/images/welcome/doctor_hand_on_phone.webp");
        const msgForDoctor =ref("Join DocTime network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.");

        return {
          photo,msgForDoctor
        }
    }

}
</script>

