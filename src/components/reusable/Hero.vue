<template>
    <section class="dty-hero--section" :style="'background-color:'+pageHero.background">
        <div class="dty--wrapper" style="overflow:visible;">
            <div class="dty-hero-content animateds fadeInLeft">

                <ul class="dty--breadcrumb" v-if="pageHero.hasBreadcumb">
                    <li><a href="/">Home</a></li>
                    <li><img src="../../assets/svg/breadcrumb.svg" /></li>
                    <li><p>{{ pageHero.page }}</p></li>
                </ul>
                
                <h1>{{ pageHero.title }}</h1>
                <p>{{ pageHero.description}}</p>        
            </div>

            <div class="dty-hero-image animateds fadeInRight">
                <img :src="require(`../../assets/images/${pageHero.image}`)" />
            </div>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'Hero',
    props: ['pageHero'],

    mounted () {
        
    }

  }

</script>

<style>

ul.dty--breadcrumb {display: block;float: none;margin-bottom: 10px;width: auto;height: 20px;font-size: 10pt;text-align: left;}
ul.dty--breadcrumb > li {width: auto;display: block;float: left;height: 100%;margin-right: 5px;}
ul.dty--breadcrumb > li > a {line-height: 17pt;width: auto;height: auto;font-size: 10pt;color: #2196f3;letter-spacing: 0.45px;}
ul.dty--breadcrumb > li > img {width: 14pt;margin-top: 2px;}
ul.dty--breadcrumb > li > p {font-size: 10pt;color: #384850;line-height: 18pt;margin: 0;letter-spacing: 0.45px;}

.dty-hero--section {height: 450px;margin: 0px;overflow: hidden;width: 100%;border-bottom: none;background-position: center right;background-color: #f6f6f8;padding: 50px 0 60px;}
.dty-hero-content {width: 360px;height: auto;margin-top: 8vh;float: left;}
.dty-hero-content span {}
.dty-hero-content h1 {font-size: 22pt;color: #101010;letter-spacing: 0.15px;line-height: 35pt;margin-bottom: 10px;font-weight: 700;text-align: left;}
.dty-hero-content p {font-size: 13pt;color: #384850;letter-spacing: 0.15px;line-height: 23pt;font-weight: 400;margin-bottom: 20px;text-align: left;padding: 0;margin: 0;}
.dty-hero-image {width: calc(100% - 360px);height: 450px;overflow: hidden;float: right;}
.dty-hero-image img {height: 100%;}

</style>
