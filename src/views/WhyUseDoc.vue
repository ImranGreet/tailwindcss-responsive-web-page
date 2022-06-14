<template>
  <section class="flex flex-col lg:flex-row justify-between items-center  w-full h-auto lg:h-[800px] gap-y-10">
       <div class="w-full lg:w-1/2">
          <img :src="photoShow" alt="">
       </div>
       <div class="w-full lg:w-1/2">
           <h1 class="text-2xl lg:text-6xl mb-8 text-center lg:text-left">When to use DocTime</h1>
           <div class="flex flex-col justify-between gap-y-8">
                <div v-for="why in whyToUse" :key="why.id" class="space-y-2">
                    <h1 class="text-2xl">{{why.title}}</h1>
                    <p>{{why.description}}</p>
                </div>
           </div>
       </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"whyUseDoc",
    setup(){
        const photoShow =ref("https://doctime.com.bd/images/welcome/head_pain.webp");
        const whyToUse =ref([
            {
                id:1,
                title:"Common health issue",
                description:"Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day."
            },
             {
                id:2,
                title:"Specialist advice",
                description:"Sometimes it’s helpful to see a specialist when you want. And get educational advice, pre- screening, monitoring and follow-ups. For maternal and infant health care, chronic diseases such as diabetes, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialities are available on DocTime."
            },
              {
                id:3,
                title:"Mental health and wellbeing",
                description:"In a fast paced world, it is important to monitor and protect your mental health and wellbeing. Doctors can help you stay healthy whether you have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression."
            }
        ])
        return {
           photoShow,
           whyToUse
        }
    }

}
</script>

