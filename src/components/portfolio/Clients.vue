<template>
  <section class="dty--clients" :style="{ backgroundImage: 'url('+require(`../../assets/images/pencil-line.png`)+')'}">
      <div class="dty--wrapper">
          <h3>They already have trusted Dainty</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <ul>
              <li>
                  <img src="../../assets/images/logo1.png" />
                  <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>
                  <div class="dty--client-box">
                      <div class="image">
                          <img src="../../assets/images/client1.png" />
                      </div>
                      <div class="content">
                          <h3>Joel Barwick</h3>
                          <p>condimentum maximus</p>
                      </div>
                  </div>
              </li>

              <li>
                  <img src="../../assets/images/logo2.png" />
                  <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>
                  <div class="dty--client-box">
                      <div class="image">
                          <img src="../../assets/images/client2.png" />
                      </div>
                      <div class="content">
                          <h3>Oliver Johnson</h3>
                          <p>Maecenas non laoreet</p>
                      </div>
                  </div>
              </li>

              <li>
                  <img src="../../assets/images/logo3.png" />
                  <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.</p>
                  <div class="dty--client-box">
                      <div class="image">
                          <img src="../../assets/images/client3.png" />
                      </div>
                      <div class="content">
                          <h3>Alex Sheldon</h3>
                          <p>lobortis porttitor</p>
                      </div>
                  </div>
              </li>
          </ul>

      </div>
  </section>
</template>

<script>

  export default {
    name: 'Clients'
  }

</script>

<style>

.dty--clients {width: 100%;height: auto;padding: 75px 0;border-bottom: 1px solid #dcf1e8;border-top: 1px solid #dcf1e8;background-repeat: no-repeat;background-size: contain;}
.dty--clients h3 {font-size: 26pt;text-align: center;letter-spacing: -0.55px;color: #424e58;font-weight: 200;line-height: 35pt;}
.dty--clients p {color: #6b6b6b;font-size: 13pt;line-height: 20pt;text-align: center;margin: 5px auto;width: 65%;}
.dty--clients ul {display: flex;align-items: stretch;width: 85%;margin: 0px auto;height: auto;padding: 60px 0;padding-bottom: 0;}
.dty--clients ul > li {margin: 25px 35px;text-align: left;flex-grow: 1;height: auto;}
.dty--clients ul > li > img {height: 105px;margin-bottom: 20px;}
.dty--clients ul > li > p {color: #424242;font-size: 12pt;line-height: 20pt;text-align: left;margin: 0;width: auto;}
.dty--clients ul > li > .dty--client-box {width: 100%;height: 65px;overflow: hidden;margin-top: 35px;}
.dty--clients ul > li > .dty--client-box .image {width: 45px;height: 45px;float: left;margin-right: 15px;overflow: hidden;border-radius: 100%;}
.dty--clients ul > li > .dty--client-box .image img {width: 100%;}
.dty--clients ul > li > .dty--client-box .content {width: auto;float: left;text-align: left;}
.dty--clients ul > li > .dty--client-box .content h3 {text-align: left;font-size: 15pt;letter-spacing: 0px;font-weight: 600;line-height: 20pt;margin-top: -2px;color: #2196f3;}
.dty--clients ul > li > .dty--client-box .content p {text-align: left;font-size: 10pt;letter-spacing: 0.35px;font-weight: 100;line-height: 16pt;color: #ababab;margin: 0;width: auto;}

</style>
