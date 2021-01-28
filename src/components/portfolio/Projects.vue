<template>
    <section class="dty--projects">
        <div class="dty--wrapper">
            <ul class="dpts--title">
                <li><span>Our Picks</span></li>
                <li><span>Logos</span></li>
                <li><span>App Design</span></li>
                <li><span>Web Design</span></li>
                <li><span>Banners</span></li>
                <li><span>Illustrations</span></li>
            </ul>

            <ul class="dpts--projects-box">
                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/01.jpg" />
                    </div>
                    <div class="content">
                        Food Delivery
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/02.jpg" />
                    </div>
                    <div class="content">
                        Mobile App
                    </div>
                </li>
                
                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/03.jpg" />
                    </div>
                    <div class="content">
                        Pets on Mobile
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/04.jpg" />
                    </div>
                    <div class="content">
                        iOS Application
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/05.jpg" />
                    </div>
                    <div class="content">
                        User Profile
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/06.jpg" />
                    </div>
                    <div class="content">
                        Ecommerce Website
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/07.jpg" />
                    </div>
                    <div class="content">
                        Dashboard Design
                    </div>
                </li>

                <li>
                    <div class="image">
                        <img src="../../assets/portfolio/08.jpg" />
                    </div>
                    <div class="content">
                        Corporate Training
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'Projects'
  }

</script>

<style>

.dty--projects {padding: 5px 0;overflow: hidden;}
ul.dpts--title {display: flex;align-items: stretch;width: 75%;margin: 35px auto;height: auto;}
ul.dpts--title > li {text-align: center;flex-grow: 1;height: auto;padding: 10px;}
ul.dpts--title > li > span {display: inline-block;width: auto;padding: 10px 30px;background-color: #f6f6f8;border: 1px solid #e2e2e2;border-radius: 45px;font-size: 10pt;cursor: pointer;font-weight: 500;}

ul.dpts--projects-box {width: 100%;margin: 35px auto;display: flex;flex-wrap: wrap;}
ul.dpts--projects-box > li {height: auto;overflow: hidden;flex: calc(25% - 60px);max-width: calc(25% - 40px);padding: 0 5px;margin: 15px;cursor: pointer;}
ul.dpts--projects-box > li > .image {border: 1px solid #e2e2e2;border-bottom: none;overflow: hidden;border-radius: 7px 7px 0 0;}
ul.dpts--projects-box > li > .image img {vertical-align: middle;width: 100%;}
ul.dpts--projects-box > li > .content {width: calc(100% - 2px);height: 50px;line-height: 35pt;background-color: #f6f6f8;color: #000;font-size: 12pt;letter-spacing: 0.25px;border-radius: 0 0 7px 7px;border: 1px solid #e2e2e2;border-top: none;}

</style>
