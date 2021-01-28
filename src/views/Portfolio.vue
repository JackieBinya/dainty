<template>

  <div>
    <Navigation />

    <div class="space">
      I am Portfolio page
    </div>

    <Clients />

    <Subscription />
    <PreFooter />
    <Footer />
  </div>

</template>

<script>
  
  import Navigation from '../components/reusable/Navigation.vue';

  import Clients from '../components/portfolio/Clients.vue';

  import Subscription from '../components/reusable/Subscription.vue';
  import PreFooter from '../components/reusable/PreFooter.vue';
  import Footer from '../components/reusable/Footer.vue';

  export default {
    components: {
      Navigation,

      Clients,

      Subscription,
      PreFooter,
      Footer
    }
  }


</script>


<style scoped>

  .space {    width: 100%;
    height: 650px;
    text-align: center;
    padding-top: 185px;}

</style>