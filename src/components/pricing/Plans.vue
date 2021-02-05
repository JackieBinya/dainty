<template>
    <section class="dty--plans">
        <div class="dty--wrapper">
            <ul>
                <li>
                    <div class="icon">
                        <img src="../../assets/svg/smartphone.svg" />
                    </div>
                    <div class="content">
                        <h4>Core</h4>
                        <p>Perfect for all your ongoing designs needs with a dedicated designer.</p>
                        <span>View Pricing <img src="../../assets/svg/arrow-right-blue.svg" /></span>
                    </div>
                    <div class="pricing">
                        <ul>
                            <li>$</li>
                            <li>99</li>
                            <li>/mo</li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div class="icon">
                        <img src="../../assets/svg/package.svg" />
                    </div>
                    <div class="content">
                        <h4>Plus</h4>
                        <p>Perfect for website design and getting more graphic design jobs done at the same time.</p>
                        <span>View Pricing</span>
                    </div>
                    <div class="pricing">
                        <ul>
                            <li>$</li>
                            <li>299</li>
                            <li>/mo</li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div class="icon">
                        <img src="../../assets/svg/shopping-bag.svg" />
                    </div>
                    <div class="content">
                        <h4>Enterprise</h4>
                        <p>Got multiple jobs on the go at once? Need us to do designs for you to sell to your clients? Enterprise is your best fit.</p>
                        <span>View Pricing </span>
                    </div>
                    <div class="pricing">
                        <ul>
                            <li>$</li>
                            <li>599</li>
                            <li>/mo</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Plans'
}
</script>

<style>


section.dty--plans {
    height: auto;
    margin: 0px;
    overflow: hidden;
    width: 100%;
    border-bottom: none;
    background-position: center right;
    background-color: #fff;
    padding: 55px 0;
}

section.dty--plans ul {
    width: 70%;
    height: auto;
    margin: 0px auto;
}

section.dty--plans ul > li {
    padding: 30px 0;
    border-bottom: 1px solid #efefef;
    height: 110px;
}

section.dty--plans ul > li > .icon {
    width: 15%;
    height: 100%;
    float: left;
    text-align: center;
}

section.dty--plans ul > li > .icon img {
    width: 50px;
    opacity: 0.6;
}

section.dty--plans ul > li > .content {
    width: calc(70% - 70px);
    float: left;
    height: 100%;
    text-align: left;
    margin: 0 35px;
}

section.dty--plans ul > li > .content h4 {
    font-size: 20pt;
    line-height: 20pt;
    letter-spacing: 0.25px;
}

section.dty--plans ul > li > .content p {
    margin: 0;
    padding: 0;
    letter-spacing: 0.15px;
    margin-top: 9px;
}

section.dty--plans ul > li > .content span {
    color: #2196f3;
    font-size: 12pt;
    display: block;
    margin-top: 10px;
}

section.dty--plans ul > li > .pricing {
    width: 15%;
    height: 100%;
    float: right;
}

section.dty--plans ul > li > .pricing > ul {
    width: auto;
    height: auto;
    text-align: center;
    margin-top: 42px;
}

section.dty--plans ul > li > .pricing > ul > li {
    border: none;
    padding: unset;
    float: left;
    line-height: 20pt;
    color: #9e9e9e;
    height: auto;
}

section.dty--plans ul > li > .pricing > ul > li:nth-child(2) {
    font-size: 24pt;
    font-weight: 100;
    margin: 0 3px;
    color: #2196f3;
}

section.dty--plans ul > li:last-child {
border: none;}

section.dty--plans ul > li > .content span {
    color: #2196f3;
    font-size: 12pt;
    margin-top: 10px;
    display: inline-block;
    cursor: pointer;
}

section.dty--plans ul > li > .content span img {width: 20px; float: right; margin-left: 5px;}

section.dty--plans ul > li:hover {cursor:pointer; background-color:#eee;}

section.dty--plans ul > li:hover > .content span {text-decoration: underline;}

</style>