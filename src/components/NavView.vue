<template>
   <section class="w-full h-auto lg:h-[600px]">

    <div class="w-full h-auto lg:h-1/5 flex flex-col lg:flex-row justify-between items-center font-normal text-xl text-[#0cb52]">

       <div class="w-full lg:w-1/12 flex justify-between">
        <router-link to="#"><img src="https://doctime.com.bd/images/logo/doctime_title_logo_tm.svg" alt="" class="w-64"></router-link>
        <button class="block lg:hidden"><i class="fa-solid fa-bars"></i></button>
       </div>

       <div class="font-roboto w-full lg:w-11/12 flex flex-col lg:flex-row justify-evenly items-start lg:items-center">
         <router-link to="#" v-for="nav in navigationsPath" :key="nav">{{nav}}</router-link>
         <router-link to="#" class="w-full flex justify-center items-center lg:block lg:w-auto  lg:px-6 py-0.5 lg:bg-gradient-to-r lg:from-blue-500/60 lg:to-blue-600/80 lg:rounded-2xl rounded-none lg:shadow-lg lg:shadow-blue-400 border lg:border-0"> <span class="text-white"><i class="fa-solid fa-lock"></i></span> Login</router-link>
       </div>

   </div>


   <div class="w-full h-auto lg:h-4/5 flex flex-col lg:flex-row justify-between">

     <div class="w-full h-full  lg:w-1/2 flex flex-col space-y-14 items-start">

      <div class="prose max-w-none">
          <h1>Instant video consultation from the best Doctors</h1>
          <p>Download and register on our app for free and feel safe for all your family</p>
       </div>

       <div class="flex justify-between space-x-3 text-lg">
           
           <router-link to="#" class="flex justify-evenly items-center bg-gradient-to-r from-blue-600/60 to-blue-700/75 text-white w-72 h-16 rounded-lg">
            <span><i class="fa-solid fa-display"></i></span>
            Find a Doctor now
            <span><i class="fa-solid fa-angle-right"></i></span>
           </router-link>

       </div>
        
       <div class="w-full flex justify-start space-x-4">
          <a href="#"><img src="https://doctime.com.bd/images/logo/play_store.svg" alt="" class="w-36"></a>
          <a href="#"><img src="https://doctime.com.bd/images/logo/apple.svg" alt="" class="w-36"></a>
       </div>

     </div>

     <div class="w-full lg:w-1/2 relative hidden lg:block">
        <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" class="w-full aspect-video rounded-lg">
     </div>

   </div>

   </section>
</template>

<script>
export default {
    name:'NavView',
    setup(){
        const navigationsPath=['How DocTime Works','For Doctors','DocTime for Enterprises','About Us','FAQs'];
        return {
           navigationsPath
        }
    }

}
</script>

     
      <router-link to="#"><img src="https://doctime.com.bd/images/logo/doctime_title_logo_tm.svg" alt="" class="w-48"></router-link>
       <router-link to="#" v-for="nav in navigationsPath" :key="nav">{{nav}}</router-link>