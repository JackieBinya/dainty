<template>
    <section class="dty-about--countdown">
        <div class="dty--wrapper">
            <ul>
              
              <li>
                <h3>We are an online consulting team</h3>
                <p>Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris.</p>
                <span>
                  <p>See How we works</p>
                  <img src="../../assets/svg/right.svg" />
                </span>
              </li>

              <li>

                <div class="dac--left">
                  <div class="image">
                    <img src="../../assets/svg/layers.svg" />
                    <p>Deep knowledge<br />of Design</p>
                  </div>
                  <div class="countdown">
                    <h4>12</h4>
                    <p>Years of<br />Experience</p>
                  </div>
                </div>

                <div class="dac--right">
                  <div class="countdown">
                    <h4>13k</h4>
                    <p>Happy Clients</p>
                  </div>
                  <div class="image">
                    <img src="../../assets/svg/certificate.svg" />
                    <p>Certified<br />Programmers</p>
                  </div>
                </div>

              </li>
            </ul>

        </div>
    </section>
</template>

<script>

  export default {
    name: 'CountDown',
  }

</script>

<style>

section.dty-about--countdown {width: 100%;height: auto;padding: 75px 0;border-bottom: 1px solid #dcf1e8;}
section.dty-about--countdown ul {width: auto;height: auto;}
section.dty-about--countdown ul > li:first-child {text-align: left; width: 40%; margin-right: 5%; margin-top: 11%;}
section.dty-about--countdown ul > li {width: 50%;float: left;text-align: center;}
section.dty-about--countdown ul > li:first-child > h3 {    font-size: 40pt;
margin-bottom: 25px;
letter-spacing: -0.55px;
font-weight: 700;
color: #000;}
section.dty-about--countdown ul > li:first-child > p {font-size: 12pt;color: #424242;letter-spacing: 0.15px;line-height: 21pt;font-weight: 400;margin: 0;margin-bottom: 30px;text-align: left;}

section.dty-about--countdown ul > li:first-child span {overflow: hidden;display: block;width: 180px;background: rgb(33 150 243);border: 1px solid #1479ca;border-radius: 45px;text-align: left;height: auto;color: #fff;padding: 13px;cursor: pointer;padding-left: 20px;}

section.dty-about--countdown ul > li:first-child span p {display: block;margin: 0px;padding: 0px;line-height: 24pt;float: left;font-size: 10pt;letter-spacing: 0.25px;text-transform: uppercase;}

section.dty-about--countdown ul > li:first-child span img {display: block;margin-left: 15px;width: 22px;margin-top: 4px;float: left;}

section.dty-about--countdown ul > li:last-child {text-align: center; width: 45%; margin-left: 5%; float: right;}
section.dty-about--countdown ul > li:last-child .dac--left {width: calc(50% - 15px);margin-right: 15px;float: left;}
section.dty-about--countdown ul > li:last-child .dac--left .image {width: 100%;height: 370px;margin-bottom: 30px;background-color: #000;background-image: url(../../assets/about/deep-design.jpg);background-repeat: no-repeat;background-size: cover;color: #fff;position: relative;}

section.dty-about--countdown ul > li:last-child .dac--left .image::after {content: '';width: 100%;height: 100%;position: absolute;top: 0;left: 0;background-color: #00000042;z-index: 9;}
section.dty-about--countdown ul > li:last-child .dac--left .image img {width: 30px;background-color: #fff;border: 20px solid #fff;border-radius: 50%;margin-top: 90pt;position: relative;z-index: 99;}
section.dty-about--countdown ul > li:last-child .dac--left .image p {margin: 0;padding: 0;text-transform: uppercase;font-size: 10pt;letter-spacing: 0.55px;line-height: 17pt;font-weight: 600;margin-top: 10px;position: relative;z-index: 99;}
section.dty-about--countdown ul > li:last-child .dac--left .countdown {width: 100%;height: 235px;background-color: #2196f369;}
section.dty-about--countdown ul > li:last-child .dac--left .countdown h4 {font-size: 45pt;font-weight: 700;text-align: center;color: #1479ca;padding-top: 60px;}
section.dty-about--countdown ul > li:last-child .dac--left .countdown p {margin: 0px;padding: 0px;text-transform: uppercase;font-size: 10pt;font-weight: 600;}
section.dty-about--countdown ul > li:last-child .dac--right {width: calc(50% - 15px);margin-left: 15px;float: left;}
section.dty-about--countdown ul > li:last-child .dac--right .countdown {width: 100%;height: 235px;background-color: #2196f369;margin-bottom: 30px;margin-top: 65px;}
section.dty-about--countdown ul > li:last-child .dac--right .countdown h4 {font-size: 45pt;font-weight: 700;text-align: center;color: #1479ca;padding-top: 65px;}
section.dty-about--countdown ul > li:last-child .dac--right .countdown p {margin: 0px;padding: 0px;text-transform: uppercase;font-size: 10pt;font-weight: 600;}
section.dty-about--countdown ul > li:last-child .dac--right .image {width: 100%;height: 370px;margin-bottom: 15px;background-color: #000;background-image: url(../../assets/about/certified.jpg);background-repeat: no-repeat;background-size: cover;color: #fff; position: relative;}
section.dty-about--countdown ul > li:last-child .dac--right .image::after {content: '';width: 100%;height: 100%;position: absolute;top: 0;left: 0;background-color: #00000042;z-index: 9;}section.dty-about--countdown ul > li:last-child .dac--right .image img {width: 30px;background-color: #fff;border: 20px solid #fff;border-radius: 50%;margin-top: 90pt;position: relative; z-index: 99;}
section.dty-about--countdown ul > li:last-child .dac--right .image p {margin: 0;padding: 0;text-transform: uppercase;font-size: 10pt;letter-spacing: 0.55px;line-height: 17pt;font-weight: 600;margin-top: 10px;position: relative; z-index: 99;}




</style>
