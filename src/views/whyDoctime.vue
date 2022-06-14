<template>
  <section class="w-full h-[600px]">
    <div class="w-full  h-4/5 flex justify-between">

        <div class="w-full lg:w-1/3 h-full ">
            <h1 class="text-3xl lg:text-4xl mb-12 text-center lg:text-left ">Why use DocTime ?</h1>
            <div class="w-full h-full flex flex-col justify-evenly">

                <div v-for="(why,index) in whyDoc" :key="why.id" class="flex flex-col justify-between">

                    <div class="flex ">
                        <span class="text-4xl mr-4 text-blue-500">{{index+1}}</span>
                        <p class="text-xl">{{why.description}}</p>
                    </div>

                    <div class="w-[0.75px] h-12 bg-blue-600 ml-1.5 mt-3"></div>

                </div>

            </div>

        </div>

        <div class="w-3/5 h-full lg:block hidden">
                <img :src="whyPhoto" alt="" class="w-full aspect-video">
        </div>

   </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"whyDoctime",
    setup(){
        const whyPhoto =ref("https://doctime.com.bd/images/welcome/mobile_hand.webp");
        const whyDoc=ref([
            {
                id:1,
                description:"Access hundreds of certified and trusted doctors and specialists at anytime from anywhere"
            },
            {
                id:2,
                description:"Improve your and loved ones' health andwellbeing, without having to queue or travel"
            },
            {
                id:3,
                description:"Access your past consultations and prescriptions at any time, and even get your medicine delivered"
            }
            ]);
        return {
            whyDoc,whyPhoto

        }
    }

}
</script>

