<template>

  <div>
    <Navigation />
    <Hero :pageHero="pageHero" />

    <Plans />
    <Faqs />

    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';
  import Hero from '../components/reusable/Hero.vue';

  import Plans from '../components/pricing/Plans.vue';
  import Faqs from '../components/pricing/Faqs.vue';


  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      Hero,

      Plans,
      Faqs,

      PreFooter,
      Footer
    },

    data() {
      return {
        pageHero : {
          hasBreadcumb: true,
          background: '#f6f6f8',
          page: 'Pricing',
          title: 'Tenetur voluptates expedita!',
          description: 'Aperiam soluta nesciunt sunt veniam commodi, quia saepe esse voluptatum id. Perspiciatis error maxime neque aliquam corrupti asperiores, laborum expedita sunt, possimus, beatae et consectetur.',
          image: 'pricing.svg',
        }
      }
    }
  }


</script>


<style scoped>



</style>