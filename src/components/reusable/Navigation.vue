<template>
  <nav id="navbar">
    <div class="dty--wrapper">
      <div class="dty-nav--logo">
        <router-link to="/"><img src="../../assets/images/logo.png" /></router-link>
      </div>

      <div class="dty-nav--action">
        <span class="dty-btn-gradient">Try us for free</span>
      </div>
      
      <ul class="dty-nav--menu">
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li><router-link to="/about-us">About Us</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>

      
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'Navigation',

    mounted() {

      var isScrolling;
      var header = document.getElementById('navbar');

      // Listen for scroll events
      window.addEventListener('scroll', function ( event ) {

          // Clear our timeout throughout the scroll
          window.clearTimeout( isScrolling );
          header.classList.add('_hdrscrl');

          // Set a timeout to run after scrolling ends
          isScrolling = setTimeout(function() {
              header.classList.remove('_hdrscrl');

          }, 150);

          // sticky navigation
          if (this.scrollY > 95) {
            header.classList.add('dty-nav--sticky');
          }else {
            header.classList.remove('dty-nav--sticky');
          }

      }, false);


    }
  }

</script>

<style>

nav {width: 100%;height: 80px;color: #fff;border-bottom: 1px solid #e8e8e8;background-color: #fff;box-shadow: 0px 0px 0px rgba(0,0,0,0);}
.dty-nav--sticky {position: fixed;z-index: 999999;}
._hdrscrl {box-shadow: 0px 2px 5px rgba(0,0,0,0.10);}

.dty--wrapper {width: 1170px;height: auto;overflow: hidden;margin: 0px auto;transition: all .5s ease;-moz-transition: all .5s ease;-webkit-transition: all .5s ease;-o-transition: all .5s ease;}

.dty-nav--logo {float: left;width: 190px;height: 65px;overflow: hidden;margin-top: 12px;}
.dty-nav--logo a {border: none !important;}
.dty-nav--logo img {width: 120px;}
ul.dty-nav--menu {width: auto;margin: 0px auto;height: 68px;position: relative;margin-top: 12px;float: right;padding: 0px;list-style-type: none;}
ul.dty-nav--menu > li {width: auto;height: auto;float: left;position: relative;}
ul.dty-nav--menu > li > a {display: block;width: auto;height: 34px;padding: 16px 20px;color: rgba(0, 0, 0, 0.9);font-size: 13pt;font-weight: 200;text-decoration: none;border-bottom: 2px solid transparent;}
.dty-nav--action {width: 200px;height: 45px;float: right;margin-top: 15px;}
.dty-btn-gradient {display: block;background: rgb(33 150 243);border: 1px solid #1479ca;width: 120px;border-radius: 45px;text-align: center;height: auto;color: #fff;padding: 13px;cursor: pointer;}


</style>
