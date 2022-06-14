<template>
  <section class="w-full h-auto lg:h-[120vh]  bg-[url('https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-fixed bg-no-repeat bg-cover bg-center">

    <div class="w-full h-full bg-gradient-to-r from-blue-400/25 to-blue-700/60 flex flex-col justify-center items-center">

        <div class="w-11/12 lg:w-4/5  py-8 mx-auto bg-gray-800/30 lg:rounded-lg flex flex-col justify-center items-center space-y-16">

          <div class="prose max-w-none text-center w-4/5 text-white">
              <h1 class="text-white">Get in touch with us</h1>
              <p>We're here to help. Send your query or question below and provide us with as much details as possible.We will answer your query as soon as possible. We aim to reply to your query within 24 hours.</p>
          </div>

          <form action="#" method="post" class="w-4/5 mx-auto space-y-5">

           <div class="w-full flex flex-col lg:flex-row justify-between space-y-3 lg:space-y-0">

             <div class="w-full lg:w-[45%]">
              <label for="name" class="sr-only">name</label>
              <input type="text" name="" id="" placeholder="Full Name" class="w-full rounded-lg bg-gray-100 border-0">
            </div>

            <div class="w-full lg:w-[45%]">
              <label for="email" class="sr-only">email</label>
              <input type="email" name="" id="" placeholder="Email" class="w-full rounded-lg bg-gray-100 border-0">
            </div>

           </div>

           <div class="w-full">
              <label for="subject" class="sr-only">subject</label>
              <input type="text" name="" id="" placeholder="Subject" class="w-full rounded-lg bg-gray-100 border-0">
            </div>

            <div class="w-full">
              <label for="Message" class="sr-only">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Your Message ..." class="w-full rounded-lg bg-gray-100 border-0 resize-none"></textarea>
            </div>

            <div class="self-start">
              <button class="bg-gradient-to-r from-blue-400 to-blue-800 px-6 py-1.5 rounded-2xl text-white">Save</button>
            </div>


          </form>

        </div>

    </div>
    
  </section>
</template>

<script>
export default {
    name:"postYourQuery",
    setup(){
        return {

        }
    }

}
</script>

