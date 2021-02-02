<template>
  <section class="dty--teams">

      <h4>Dainty Team Members</h4>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

      <ul class="section1">
          <li>
              <div class="dtsteam dts-team--1" :style="'background-image:url('+require(`../../assets/team/team-1.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Khaled Ghareeb</h3>
                        <p>General Manager</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
                <div class="trigle"></div>
              </div>
          </li>
          <li>
              <div class="dtsteam dts-team--2" :style="'background-image:url('+require(`../../assets/team/team-2.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Emiliano Vittoriosi</h3>
                        <p>Business Dev. Manager</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                    <div class="trigle"></div>
                </div>
                <div class="trigle"></div>
              </div>

              <div class="dtsteam dts-team--3" :style="'background-image:url('+require(`../../assets/team/team-3.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Zahir Namane</h3>
                        <p>Account Manager</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
              </div>
          </li>
      </ul>

    <!-- Section 2 -->
    
    <ul class="section2">
        <li>
            <div class="dtsteam dts-team--4" :style="'background-image:url('+require(`../../assets/team/team-4.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Amin RK</h3>
                        <p>Account Manager</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
            </div>

            <div class="dtsteam dts-team--5" :style="'background-image:url('+require(`../../assets/team/team-5.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Daniel Logchies</h3>
                        <p>Digital Producer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>

                <div class="trigle"></div>
            </div>

            <div class="dtsteam dts-team--6" :style="'background-image:url('+require(`../../assets/team/team-6.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Josha Rawson-Harris</h3>
                        <p>Account Manager</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
            </div>

            <div class="dtsteam dts-team--7" :style="'background-image:url('+require(`../../assets/team/team-7.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Bannon Morrissy</h3>
                        <p>Digital Marketing</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>

                <div class="trigle"></div>
            </div>

            <div class="dtsteam dts-team--8" :style="'background-image:url('+require(`../../assets/team/team-8.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Taylor Hernandez</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>

                <div class="trigle"></div>
            </div>
        </li>

        <li>
            <div class="dtsteam dts-team--9" :style="'background-image:url('+require(`../../assets/team/team-9.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Stefan Stefancik</h3>
                        <p>Content Producer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>

                <div class="trigle"></div>
            </div>

            <div class="dtsteam dts-team--10" :style="'background-image:url('+require(`../../assets/team/team-10.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Satya Gujjar</h3>
                        <p>Developer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>

                <div class="trigle"></div>
            </div>


            <div class="dtsteam dts-team--11" :style="'background-image:url('+require(`../../assets/team/team-11.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Zahir Namane</h3>
                        <p>Graphics Designer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
                
                <div class="trigle2"></div>
                <div class="trigle"></div>
            </div>


            <div class="dtsteam dts-team--12" :style="'background-image:url('+require(`../../assets/team/team-12.jpg`)+ ')'">
                <div class="contain">
                    <div class="text">
                        <h3>Silviu Beniman Tofan</h3>
                        <p>Developer</p>
                    </div>
                    <div class="contact">
                        <img src="../../assets/svg/twitter.svg" />
                    </div>
                </div>
            </div>
        </li>
    </ul>

  </section>
</template>

<script>

  export default {
    name: 'OurTeams'
  }

</script>

<style>


section.dty--teams ul.section2 {width: 1170px;margin: 0px auto;height: auto;overflow: hidden;}
section.dty--teams ul.section2 > li {height: auto;width: 50%;float: left;}
section.dty--teams ul.section2 > li:first-child {width: 40%}
section.dty--teams ul.section2 > li:last-child {width: 60%}

/* team 4 */
section.dty--teams ul.section2 > li > .dts-team--4 .contain {bottom: 0;-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);}
section.dty--teams ul.section2 > li > .dts-team--4 {width: auto;margin-left: 25%;height: 255px;background-repeat: no-repeat;background-size: cover;background-position: top;position: relative;z-index: 99;}

/* team 5 */
section.dty--teams ul.section2 > li > .dts-team--5 .contain {right: 0; left: unset;}
section.dty--teams ul.section2 > li > .dts-team--5 {width: auto;height: 305px;background-repeat: no-repeat;background-size: cover;background-position: top;position: relative;z-index: 99;margin-top: 25%;}
section.dty--teams ul.section2 > li > .dts-team--5 .trigle {border-bottom: 80px solid transparent;border-left: 80px solid #FFFFFF;left: 0;top: 0;position: absolute;}

/* team 6 */
section.dty--teams ul.section2 > li > .dts-team--6 {width: auto;height: 305px;background-repeat: no-repeat;background-size: cover;background-position: top;position: relative;z-index: 99;}

/* team 7 */
section.dty--teams ul.section2 > li > .dts-team--7 .contain {right: 0; left: unset;}
section.dty--teams ul.section2 > li > .dts-team--7 {width: auto;height: 305px;background-repeat: no-repeat;background-size: cover;background-position: top;position: relative;z-index: 99;}
section.dty--teams ul.section2 > li > .dts-team--7 .trigle {border-top: 80px solid transparent;border-left: 80px solid #FFFFFF;left: 0;bottom: 0; position: absolute;}

/* team 8 */
section.dty--teams ul.section2 > li > .dts-team--8 .contain {right: -1px; left: unset;bottom:2px;-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);}
section.dty--teams ul.section2 > li > .dts-team--8 {width: auto;height: 255px;background-repeat: no-repeat;background-size: cover;background-position: top;position: relative;
z-index: 99;margin-left: 17%;}
section.dty--teams ul.section2 > li > .dts-team--8 .trigle {border-top: 80px solid transparent;border-left: 80px solid #FFFFFF;left: 0;bottom: 0; position: absolute;}


/* team 9 */
section.dty--teams ul.section2 > li > .dts-team--9 {width: auto;margin-right: 20%;height: 375px;background-repeat: no-repeat;background-size: cover;background-position: center;
position: relative;z-index: 99;}
section.dty--teams ul.section2 > li > .dts-team--9 .contain {bottom: 120px;-webkit-clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);
clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);}
section.dty--teams ul.section2 > li > .dts-team--9 .trigle {border-bottom: 80px solid transparent;border-right: 80px solid #FFFFFF;right: 0;top: 0;position: absolute;}

/* team 10 */
section.dty--teams ul.section2 > li > .dts-team--10 {width: auto;margin-right: 8%;height: 375px;background-repeat: no-repeat;background-size: cover;background-position: center;
position: relative;z-index: 99;}
section.dty--teams ul.section2 > li > .dts-team--10 .contain {bottom: 0px;right: 0;left: unset;}
section.dty--teams ul.section2 > li > .dts-team--10 .trigle {border-bottom: 80px solid transparent;border-right: 80px solid #FFFFFF;right: 0;top: 0;position: absolute;}

/* team 11 */
section.dty--teams ul.section2 > li > .dts-team--11 {width: auto;margin-right: 20%;height: 417px;background-repeat: no-repeat;background-size: cover;background-position: center;
position: relative;z-index: 99;}
section.dty--teams ul.section2 > li > .dts-team--11 .contain {bottom: unset;-webkit-clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);
clip-path: polygon(0 0, 0 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 100% 0);top: 0;}
section.dty--teams ul.section2 > li > .dts-team--11 .trigle {border-bottom: 80px solid transparent;border-right: 80px solid #FFFFFF;right: 0;top: 0;position: absolute;}
section.dty--teams ul.section2 > li > .dts-team--11 .trigle2 {border-top: 80px solid transparent;border-right: 80px solid #FFFFFF;right: 0;bottom: 0;top: unset;position: absolute;}

/* team 12 */
section.dty--teams ul.section2 > li > .dts-team--12 {width: auto;margin-right: 31%;height: 375px;background-repeat: no-repeat;background-size: cover;background-position: center;
position: relative;z-index: 99;}
section.dty--teams ul.section2 > li > .dts-team--12 .contain {bottom: 2px;right: 0;left: unset;}


/* previous */

section.dty--teams ul.section1 > li > .dts-team--2 .contain {
-webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);
clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0);}
section.dty--teams ul.section1 > li > .dts-team--3 .contain {left: unset; bottom: 0; right: 0;}

.dtsteam .contain {position: absolute;bottom: 25px;left: 0;width: auto;background-color: #fff;padding: 15px 25px;height: 60px;overflow: hidden;}
.dtsteam .contain::before {content: '';position: absolute;top: 0;left: 0;width: 5px;height: 100%;background-color: #2196f3;}
.dtsteam .contain .text {width: 75%;float: left;height: 100%;text-align: left;font-size: 10pt;letter-spacing: 0.25px;font-weight: 500;}
.dtsteam .contain .text h3 {font-size: 12pt;margin-top: 7px;line-height: 22pt;}
.dtsteam .contain .text p {padding: 0;margin: 0;}
.dtsteam .contain .contact {width: 25%;float: right;height: 100%;text-align: center;}
.dtsteam .contain .contact img {width: 25px;padding: 22px;}

section.dty--teams {width: 100%;height: auto;overflow: hidden;padding: 75px 0;}
section.dty--teams h4 {font-size: 26pt;text-align: center;letter-spacing: -0.55px;color: #424e58;font-weight: 200;line-height: 35pt;}
section.dty--teams h5 {color: #6b6b6b;font-size: 13pt;line-height: 20pt;text-align: center;margin: 5px auto;width: 65%;}

section.dty--teams ul.section1 {width: 1170px;margin: 0px auto;height: auto;padding-top: 75px; overflow: hidden; margin-top: 80px;}
section.dty--teams ul.section1 > li:first-child {width: 60%;float: left;}
section.dty--teams ul.section1 > li {height: 550px;}
section.dty--teams ul.section1 > li > .dts-team--1 {width: 100%;height: 100%;background-repeat: no-repeat;background-size: cover;background-position: center;position: relative;z-index: 99;}

section.dty--teams ul.section1 > li > .dts-team--1 .trigle {border-bottom: 80px solid transparent;border-left: 80px solid #FFFFFF;left: 0;top: 0;position: absolute;}
section.dty--teams ul.section1 > li:last-child {float: right;width: 40%;}
section.dty--teams ul.section1 > li > .dts-team--2 {width: 100%;height: 360px;background-repeat: no-repeat;background-size: cover;background-position: center;margin-top: -90px;position: relative;z-index: 99;}
section.dty--teams ul.section1 > li > .dts-team--2 .trigle {    border-bottom: 80px solid transparent;border-right: 80px solid #FFFFFF;right: 0;top: 0;position: absolute;}
section.dty--teams ul.section1 > li > .dts-team--3 {width: 75%;height: 280px;background-repeat: no-repeat;background-size: cover;background-position: center;position: relative;z-index: 99;}

</style>
