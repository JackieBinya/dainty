<template>
  <nav>
    <div class="dty--wrapper">
      <div class="dty-nav--logo">
        <router-link to="/"><img src="../../assets/images/logo.png" /></router-link>
      </div>

      <div class="dty-nav--action">
        <span class="dty-btn-gradient">Try us for free</span>
      </div>
      
      <ul class="dty-nav--menu">
        <li><router-link to="/">Pricing</router-link></li>
        <li><router-link to="/">About Us</router-link></li>
        <li><router-link to="/">Team</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>

      
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'Navigation'
  }

</script>

<style>

nav {width: 100%;height: 80px;position: fixed;z-index: 9999;color: #fff;top: 0px;border-bottom: 1px solid #e8e8e8;background-color: #fff;}
.dty--wrapper {width: 1170px;height: auto;overflow: hidden;margin: 0px auto;transition: all .5s ease;-moz-transition: all .5s ease;-webkit-transition: all .5s ease;-o-transition: all .5s ease;}

.dty-nav--logo {float: left;width: 190px;height: 65px;overflow: hidden;margin-top: 12px;}
.dty-nav--logo img {width: 120px;}
ul.dty-nav--menu {width: auto;margin: 0px auto;height: 50px;position: relative;margin-top: 12px;float: right;padding: 0px;list-style-type: none;}
ul.dty-nav--menu > li {width: auto;height: auto;float: left;position: relative;}
ul.dty-nav--menu > li > a {display: block;width: auto;height: auto;padding: 16px 20px;color: rgba(0, 0, 0, 0.9);font-size: 13pt;font-weight: 200;text-decoration: none;}
.dty-nav--action {width: 200px;height: 45px;float: right;margin-top: 15px;}
.dty-btn-gradient {display: block;background: rgb(33,206,249);border: 1px solid #04acd6;width: 120px;border-radius: 45px;text-align: center;height: auto;color: #fff;padding: 13px;cursor: pointer;}


</style>
