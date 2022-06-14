<template>
  <section class="w-full flex flex-col lg:flex-row justify-between space-y-3 prose max-w-none">
     <div class="w-full lg:w-3/5 space-y-4">
          <h1 class="text-4xl">Benefits of joining</h1>
          <p v-for="advance in advances" :key="advance.id">{{advance.text}}</p>
     </div>
     <div class="w-full lg:w-2/5 space-y-5">
        <h1 class="text-4xl">Benifits</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas quos quasi, est possimus inventore facilis molestias, at dolores explicabo sapiente. Cumque quos earum tempore illum repellendus at doloribus rem omnis consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, nemo doloremque omnis libero excepturi illo, a quaerat incidunt, modi quas qui! Excepturi, repellat. Rerum voluptatum ipsa maiores cumque fuga numquam dolores voluptatem! </p>
     </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name:"BenifitsOfJoining",
    setup(){
        const advances= ref([
            {
                id:1,
                text:"Doctors can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using our latest technology."
            },
            {
                id:2,
                text:"You will be at the forefront of digital healthcare innovations providing accessible patient care for all."
            },
             {
                id:3,
                text:"You will be working independently, making autonomous medical decisions, and supported by our DocTime technical team who are here to assist both patient and yourself when you’re on session or outside sessions."
            }
        ]);
        return {
          advances
        }
    }

}
</script>

