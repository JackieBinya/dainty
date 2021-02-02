<template>

  <div>
    <Navigation />
    <Hero :pageHero="pageHero" />

    <Introduction />
    <CountDown />

    <Subscription />
    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';
  import Hero from '../components/reusable/Hero.vue';

  import Introduction from '../components/about-us/Introduction.vue';
  import CountDown from '../components/about-us/CountDown.vue';

  import Subscription from '../components/reusable/Subscription.vue';
  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      Hero,

      Introduction,
      CountDown,

      Subscription,
      PreFooter,
      Footer
    },

    data() {
      return {
        pageHero : {
          hasBreadcumb: true,
          page: 'About Us',
          background: '#fff',
          title: 'Non minima nihil quibusdam eaque.',
          description: 'st adipisci ipsam doloremque dicta et a, aliquam, debitis ratione perspiciatis incidunt animi atque, nulla dignissimos! Nulla impedit, mollitia quam dolor, odit, obcaecati sapiente necessitatibus incidunt vero omnis.',
          image: 'about-us.svg'
        }
      }
    }
  }


</script>


<style scoped>

  

</style>