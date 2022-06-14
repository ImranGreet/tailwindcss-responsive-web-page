<template>
    <section class="w-full flex justify-between">

       <div class="w-1/2 relative flex justify-start flex-col items-start">
          <h1 class="text-textColor-default font-semibold text-6xl tracking-wider">{{headline}}</h1>
          <p class="text-2xl font-normal text-[#3b4966]">{{headingMessage}}</p>

          
            <button class="w-1/2 bg-gradient-to-r from-sky-700 to-sky-300 flex justify-between px-4 py-3.5 rounded-lg">
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg></span> <p>Find a doctor now </p> <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg></span>
            </button>
          
            <div class="w-1/2 flex justify-center items-center">
                 <span class="w-[45%] h-[0.75px] bg-textColor-default"></span>
                 <span>Or</span>
                 <span class="w-[45%] h-[0.75px] bg-textColor-default"></span>
            </div>

            <div class="w-1/2 flex justify-evenly items-center">
                 <router-link to="#" class="w-1/2"><img src="https://doctime.com.bd/images/logo/play_store.svg" alt="" class="w-1/2"></router-link>
                 <router-link to="#"><img src="https://doctime.com.bd/images/logo/apple.svg" alt=""></router-link>
            </div>

       </div>
       <div class="w-1/2">
         <iframe class="w-full h-[415px] rounded-xl" src="https://www.youtube.com/embed/FXpIoQ_rT_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:'HeroSection',
    setup(){
        const headline= ref("Instant video consultation from the best Doctors");
        const headingMessage =ref("Download and register on our app for free and feel safe for all your family");
        return {
          headline,headingMessage
        }
    }

}
</script>

