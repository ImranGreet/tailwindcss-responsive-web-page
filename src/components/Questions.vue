<template>
  <section class="w-full flex flex-col justify-evenly items-center mb-4 prose max-w-none">
      <div class="text-center prose-stone">
          <h1 class="prose-stone">Have any questions?</h1>
          <p class="text-xl">Find below our frequently asked questions. If you have other questions please contact us.</p>
      </div>

      <div class="w-full flex flex-col justify-center items-center space-y-7 ">
         <div class="w-full" v-for="questionnaire in questionsStore" :key="questionnaire.id">
           
           <button class="w-full flex justify-between pb-3 border-b border-blue-400/75 text-xl lg:text-2xl">{{questionnaire.question}} 
             <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
             </span> 
            </button>

            <div class="w-full p-2 prose max-w-none">
                <p>{{questionnaire.answer}}</p>
            </div>
         </div>
      </div>

      <router-link to="#" class="no-underline px-8 py-1 rounded-2xl border border-gray-800 text-xl font-normal">View All FAQ's</router-link>
      
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"Questions",
    
    setup(){
        const questionsStore =ref(
            [
               {
                   id:1,
                   question:"What is DocTime?",
                   answer:"DocTime is an online based medical consultation service where doctors consult patients on video calls using DocTime app or website. The service is available 24/7 from anywhere."
               },
               {
                   id:2,
                   question:"What do we treat?",
                   answer:"Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it's helpful to see a specialist when you want. And get educational advice, pre-screening, monitoring and follow-ups. For maternal and infant health care, chronic diseases such as diabetes, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy. More than 20 different specialities are available on DocTime. Mental health and wellbeing In a fast paced world, it is important to monitor and protect your mental health and wellbeing. Doctors can help you stay healthy whether you have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression."
               }
               ,{
                   id:3,
                   question:"How does it work?",
                   answer:"Patients can register on our app and are able to take consultation from our verified doctors. Consultation is available for the app user and their family members. It works in 3 steps: - Search for your doctor by speciality and make payment online and pay the fees required by the doctor - Doctor makes a video call to do the consultation - Doctor uploads prescription and you download it"
               },
               {
                   id:4,
                   question:"Who provides consultation on DocTime?",
                   answer:"Only certified MBBS doctors can provide consultation via the DocTime app."
               },
               {
                   id:5,
                   question:"Are the registered doctors verified?",
                   answer:"Yes, all our panel of doctors are verified. We verify their registration with BMDC, we also check doctors national id / passport with selfie to make sure the qualified doctors are getting registered."
               }
            ]
    );
        return {
         questionsStore
        }
    }

}
</script>

