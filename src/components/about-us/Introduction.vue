<template>
    <section class="dty-about--intro">
        <div class="dty--wrapper">            
            <ul>
                <li>
                    <div class="image">
                        <img src="../../assets/about/intro-1.png" />
                    </div>
                    <div class="content">
                        <h3>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus.</h3>
                        
                        <p>Vestibulum vehicula tempor nulla, sed hendrerit urna interdum in. Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla.</p>

                        <p>Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum.</p>

                        <p>Morbi vestibulum id tellus commodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.</p>

                    </div>
                </li>
                <li>
                    <div class="image">
                        <img src="../../assets/about/intro-2.png" />
                    </div>
                    <div class="content">
                        <h3>Fusce ut velit laoreet, tempus arcu eu, molestie tortor.</h3>
                        
                        <p>Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'Introduction',
  }

</script>

<style>

section.dty-about--intro {width: 100%;height: auto;padding: 85px 0;background-color: #f5f5f5;border-top: 1px solid #dcdcdc;box-shadow: inset 0px 0px 10px rgb(0 0 0 / 10%);}
section.dty-about--intro ul {width: auto;height: auto;}
section.dty-about--intro ul > li {width: 100%;height: auto;padding-bottom: 85px;overflow: hidden;}
section.dty-about--intro ul > li > .image {width: 42%;float: left;margin-right: 55px;text-align: left;}
section.dty-about--intro ul > li > .image img {width: 80%;}
section.dty-about--intro ul > li > .content {width: calc(95% - (42% + 65px));float: left;text-align: left;}
section.dty-about--intro ul > li > .content h3 {font-size: 26pt;margin-bottom: 10px;letter-spacing: -0.55px;font-weight: 100;color: #000;}
section.dty-about--intro ul > li > .content p {font-size: 12pt;color: #424242;letter-spacing: 0.15px;line-height: 21pt;font-weight: 400;margin: 0;margin-bottom: 20px;text-align: left;}

section.dty-about--intro ul > li:last-child {padding: 0 !important;}
section.dty-about--intro ul > li:last-child > .image {float: right;margin-left: 55px;margin-right: 0;}
section.dty-about--intro ul > li:last-child > .image img {width: 80%;}



</style>
