<template>
  <section class="w-full h-auto lg:h-[600px] prose max-w-none">
        <div class="w-full text-center">
            <h1 class="text-4xl">More than 90% of users</h1>
            <h3 class="text-2xl">gave us 5 star ratings</h3>
        </div>

        <div class="w-full flex flex-col lg:flex-row justify-between">

            <div class="w-full lg:w-1/2 flex flex-col justify-between">
                  <h1 class="text-8xl font-bold text-center text-blue-700/70">4.8</h1>
                  <p class="after:content-['*'] text-center">out of 5 rating</p>
                  <div class="text-center">
                    <span v-for="rate in ratings" :key="rate" class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                  </div>
                  <div class="flex flex-col justify-between">
                      
                        <div class="flex gap-x-2">
                            <span>5</span>
                            <span class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                            <div class="w-52 h-4 bg-blue-600 rounded-xl"></div>
                        </div>

                      <div class="flex gap-x-2">
                            <span>4</span>
                            <span class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                            <div class="w-36 h-4 bg-blue-600 rounded-xl"></div>
                        </div>

                        <div class="flex gap-x-2">
                            <span>3</span>
                            <span class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                            <div class="w-24 h-4 bg-blue-600 rounded-xl"></div>
                        </div>

                        <div class="flex gap-x-2">
                            <span>2</span>
                            <span class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                            <div class="w-16 h-4 bg-blue-600 rounded-xl"></div>
                        </div>

                        <div class="flex gap-x-2">
                            <span>1</span>
                            <span class="text-yellow-800"><i class="fa-solid fa-star"></i></span>
                            <div class="w-8 h-4 bg-blue-600 rounded-xl"></div>
                        </div>

                  </div>
                  <h4 class="before:content-['*']">Source:Google Play ratings collected during March 2021</h4>
            </div>

            <div class="w-full lg:w-1/2 rounded-md">
               <img src="https://doctime.com.bd/images/welcome/video__thumbnail__image.webp" alt="" class="w-full rounded-md object-contain cursor-pointer">
            </div>

        </div>
  </section>
</template>

<script>
export default {
    name:"Ratings",
    setup(){
        const ratings =5;
        return {
          ratings
        }
    }

}
</script>

