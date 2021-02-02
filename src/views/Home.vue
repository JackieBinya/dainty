<template>

  <div>
    <Navigation />
    <Hero :pageHero="pageHero" />

    <Subscription />
    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';
  import Hero from '../components/reusable/Hero.vue';

  import Subscription from '../components/reusable/Subscription.vue';
  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      Hero,

      Subscription,
      PreFooter,
      Footer
    },

    data() {
      return {
        pageHero : {
          hasBreadcumb: false,
          background: '#f6f6f8',
          page: 'Home',
          title: 'Consectetur adipisicing elit aliquam asperiores.',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis qui temporibus ipsam cupiditate magni exercitationem aliquam asperiores facere, quisquam id recusandae veniam sed consequatur, suscipit cum!',
          image: 'home.svg'
        }
      }
    }
  }

</script>

<style scoped>



</style>
