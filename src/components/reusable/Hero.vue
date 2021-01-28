<template>
    <section class="dty-hero--section">
        <div class="dty--wrapper" style="overflow:visible;">
            <div class="dty-hero-content animateds fadeInLeft">
                <h1>{{ title }}</h1>
                <p>{{ description}}</p>        
            </div>

            <div class="dty-hero-image animateds fadeInRight">
                <img :src="require(`../../assets/images/${image}`)" />
            </div>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'Hero',
    props: ['title', 'description', 'image'],
    mounted () {
        
    }
  }

</script>

<style>


.dty-hero--section {height: 450px;margin: 0px;overflow: hidden;width: 100%;border-bottom: none;background-position: center right;background-color: #f6f6f8;padding: 50px 0 60px;}
.dty-hero-content {width: 360px;height: auto;margin-top: 8vh;float: left;}
.dty-hero-content h1 {font-size: 22pt;color: #101010;letter-spacing: 0.15px;line-height: 35pt;margin-bottom: 10px;font-weight: 700;text-align: left;}
.dty-hero-content p {font-size: 13pt;color: #384850;letter-spacing: 0.15px;line-height: 23pt;font-weight: 400;margin-bottom: 20px;text-align: left;padding: 0;margin: 0;}
.dty-hero-image {width: calc(100% - 360px);height: 450px;overflow: hidden;float: right;}
.dty-hero-image img {height: 100%;}

</style>
