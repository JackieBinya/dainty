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
        title: 'Cumque praesentium quasi labore.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis qui temporibus ipsam cupiditate magni exercitationem aliquam asperiores facere, quisquam id recusandae veniam sed consequatur, suscipit cum!',
        image: 'team.svg'
      }
    }
  }


</script>


<style scoped>

  

</style>