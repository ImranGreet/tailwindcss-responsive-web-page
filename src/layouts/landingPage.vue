<template>
  <section class="max-w-desktop-layouts  mx-auto px-3 lg:px-0 flex flex-col justify-between items-center space-y-16">
    <NavView/>
    <!-- <HeroSection/> -->
    <whyDoctime/>
    <JustIn/>
    <WhyUseDoc/>
    <Steps/>
    <MainService/>
    <Features/>
    <AvailableSpecialities/>
    <DoctorsSignUp/>
    <BenifitsOfJoining/>
    <Ratings/>
    <Paralex />
    <Questions/>
    <postYourQuery/>
    <Footer/>
  </section>
</template>

<script>
import NavView from '@/components/NavView.vue'
import HeroSection from '@/components/HeroSection.vue'
import whyDoctime from '@/views/whyDoctime.vue'
import JustIn from '@/views/justIn.vue'
import WhyUseDoc from '@/views/WhyUseDoc.vue'
import Steps from '@/components/Steps.vue'
import MainService from '@/views/MainService.vue'
import Features from '@/views/Features.vue'
import AvailableSpecialities from '@/views/AvailableSpecialities.vue'
import DoctorsSignUp from '@/components/DoctorsSignUp.vue'
import BenifitsOfJoining from '@/components/BenifitsOfJoining.vue'
import Paralex from '@/components/Paralex.vue'
import Questions from '@/components/Questions.vue'
import postYourQuery from '@/components/postYourQuery.vue'
import Ratings from '@/components/Ratings.vue'
import Footer from '@/views/Footer.vue'
export default {
    name:"userLayouts",
    components:{
        NavView,
        HeroSection,
        whyDoctime,
        JustIn,
        WhyUseDoc,
        Steps,
        MainService,
        Features,
        AvailableSpecialities,
        DoctorsSignUp,
        BenifitsOfJoining,
        Paralex,
        Questions,
        postYourQuery,
        Ratings,
        Footer
    }

}
</script>

