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
        title: 'Tenetur voluptates expedita!',
        description: 'Aperiam soluta nesciunt sunt veniam commodi, quia saepe esse voluptatum id. Perspiciatis error maxime neque aliquam corrupti asperiores, laborum expedita sunt, possimus, beatae et consectetur.',
        image: 'pricing.svg'
      }
    }
  }


</script>


<style scoped>



</style>