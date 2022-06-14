<template>
  <section class="w-full prose max-w-none">
        <h1 class="text-2xl lg:text-5xl">Available specialties</h1>
        <div class="flex flex-wrap justify-between items-center">
              <div v-for="special in specialities" :key="special.id" class="text-xl">
                   <ul class="space-y-4 list-none">
                       <li v-for="cat in special.specialities" :key="cat" > 
                       <span class="inline-block text-lime-500 font-bold">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {{cat}}</li>
                   </ul>
              </div>
        </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"AvailableSpecialities",
    setup(){
        const specialities = ref([
            {
                id:1,
                specialities:["General Physician","Pediatrics / Child Care","Gynaecology","Neurology / Brain","Pulmonology / Lungs","Herbal medicine"]
            },
             {
                id:2,
                specialities:["Gastroenterology","Cardiology / Heart","Ophthalmology / Eye","Dentistry / Dental Care"," Endocrinology / Diabetes","Occupational therapy"]
            },
            {
                id:3,
                specialities:["Nephrology / Kidney","Obstetrics","Ophthalmology / Eye","ENT / Ear, Nose and Throat","Parasitology","Podiatry","Oncology"]
            },
             {
                id:4,
                specialities:["Psychiatry","Rheumatology","Urology","Chiropractic","Dermatology","Vascular Surgery"]
            }
        ]);
        return {
          specialities
        }
    }

}
</script>

