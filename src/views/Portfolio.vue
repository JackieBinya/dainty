<template>

  <div>
    <Navigation />
    <Hero :pageHero="pageHero" />

    <Projects />
    <Clients />

    <Subscription />
    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';
  import Hero from '../components/reusable/Hero.vue';

  import Projects from '../components/portfolio/Projects.vue';
  import Clients from '../components/portfolio/Clients.vue';

  import Subscription from '../components/reusable/Subscription.vue';
  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      Hero,

      Projects,
      Clients,

      Subscription,
      PreFooter,
      Footer
    },

    data() {
      return {
        pageHero : {
          hasBreadcumb: true,
          background: '#f6f6f8',
          page: 'Portfolio',
          title: 'Consequuntur enim ratione sequi aperiam.',
          description: 'Id ab modi fuga deleniti consequuntur enim ratione sequi aperiam quae animi odio itaque illum sapiente nesciunt cum odit, perferendis facere officia possimus qui consequuntur enim ratione sequi aperiam consequuntur enim ratione sequi aperiam.',
          image: 'portfolio.svg',
        }
      }
    }
  }


</script>


<style scoped>



</style>