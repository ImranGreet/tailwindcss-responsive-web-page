<template>
  <section class="w-full  bg-[url('https://images.unsplash.com/photo-1600195077077-7c815f540a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80')] lg:h-96 h-auto bg-no-repeat bg-cover bg-fixed ">

      <div class="w-full mx-auto h-full bg-red-50/50 ">

         <div class="w-4/5 h-full mx-auto flex flex-col lg:flex-row justify-center items-center">
              
           <div>
           <h1 class="text-2xl lg:text-4xl">Download and register on zour App for free and feel safe for all your family</h1>
           <p>To download the app on your mobile, go the Play Store or open your camera and point it towards the QR code</p>
        </div>

       <div class="flex flex-col lg:flex-row justify-center">
         <div class="w-36 lg:w-96">
             <img class="w-full" :src="QRCode" alt="">
         </div>
         <div class="flex flex-col justify-center items-center gap-y-7 ">
              
              <a href="#" v-for="appLink in appStore" :key="appLink.id"><img class="w-36 lg:w-64" :src="appLink.Store"  :alt="appLink.alt" ></a>
         </div>
        </div>
      </div>
      </div>

      
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Paralex",
    setup(){
        const QRCode =ref("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png");
        const appStore =ref([
            {
                id:1,
                Store:"https://doctime.com.bd/images/logo/play_store.svg",
                alt:"google store"
            },
            {
                id:2,
                Store:"https://doctime.com.bd/images/logo/apple.svg",
                alt:"Apple store"
            },
            {
                id:3,
                Store:"https://doctime.com.bd/images/logo/browser.svg",
                alt:"web store"
            }
        ]);
        return{
          appStore,
          QRCode
        }
    }

}
</script>

