<template>

  <div>
    <Navigation />
    <Hero 
      :title="title" 
      :description="description"
      :image="image" />

    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';
  import Hero from '../components/reusable/Hero.vue';

  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      Hero,

      PreFooter,
      Footer
    },

    data() {
      return {
        title: 'Non minima nihil quibusdam eaque.',
        description: 'st adipisci ipsam doloremque dicta et a, aliquam, debitis ratione perspiciatis incidunt animi atque, nulla dignissimos! Nulla impedit, mollitia quam dolor, odit, obcaecati sapiente necessitatibus incidunt vero omnis.',
        image: 'about-us.svg'
      }
    }
  }


</script>


<style scoped>

  

</style>