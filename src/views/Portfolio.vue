<template>

  <div>
    <Navigation />

    <div class="space"></div>

    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';

  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,
      PreFooter,
      Footer
    }
  }


</script>


<style scoped>

  .space {    width: 100%;
    height: 750px;}

</style>