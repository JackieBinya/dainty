<template>
  <section class="dty--subscription" :style="{ backgroundImage: 'url('+require(`../../assets/images/particles.png`)+')'}">
    <div class="dty--wrapper dty--wrapper--650px">
      <h3>Don’t miss<br />our future updates!</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta molestias repellat officia. Quos consequuntur fugit reprehenderit error tempora laborum alias! Suscipit dignissimos reiciendis odio tenetur sapiente excepturi</p>

      <div class="dty-subtn--form">
        <input type="text" placeholder="E-mail Address" />
        <span class="dty-btn--subtn">Join</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Subscription'
  }
</script>

<style>

.dty--subscription {width: 100%;height: auto;padding: 75px 0;background-color: #fff;background-position: center;background-repeat: no-repeat;background-size: contain;overflow: hidden}
.dty--subscription h3 {font-size: 32pt;text-align: center;letter-spacing: -0.55px;color: #424e58;font-weight: 200;line-height: 35pt;}
.dty--subscription p {color: #31495d;font-size: 13pt;line-height: 23pt;text-align: center;padding: 20px 0;}
.dty--subscription .dty-subtn--form {width: 60%;height: 50px;border: 1px solid #2196f3;border-radius: 45px;margin: 0px auto;overflow: hidden;text-align: left;}
.dty--subscription .dty-subtn--form input {font-family: "DM Sans", Arial, Tahoma, sans-serif;border: none;width: 60%;display: block;height: 100%;padding-left: 25px;float: left;font-size: 12pt;}

.dty--subscription .dty-subtn--form span.dty-btn--subtn {width: calc(100% - (61% + 27px));border-radius: 45px;background-color: #2196f3;height: calc(112% - 12px);margin-top: 3px;
display: block;float: left;text-align: center;font-size: 13pt;color: #fff;line-height: 33pt;cursor: pointer;}
    


</style>
