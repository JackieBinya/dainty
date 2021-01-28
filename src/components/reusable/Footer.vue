<template>
  <footer>
      <div class="dty-ftr--item ftr-grow ftritm--fchld">
        <img src="../../assets/images/logo.png" />

        <p>Unlimited graphics and web design request revisions for one monthly rate, no hourly biling or contract, cancel anytime.</p>
        <p>Start Today with a free trial!</p>

        <em>Copyright © 2021 Dainty. All rights reserverd.</em>
      </div>
      <div class="dty-ftr--item">
        <ul>
          <li>Company</li>
          <li>Why Choose Us</li>
          <li>Our Stories</li>
          <li>Portfolio</li>
          <li>Career</li>
        </ul>
      </div>
      <div class="dty-ftr--item">
        <ul>
          <li>Discover</li>
          <li>How It Works</li>
          <li>Pricing</li>
          <li>Team</li>
        </ul>
      </div>
      <div class="dty-ftr--item">
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Login</li>
        </ul>
      </div>
      <div class="dty-ftr--item">
        <ul>
          <li>Legal</li>
          <li>Term of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

footer {
    display: flex;
    align-items: stretch;
    width: 1170px;
    margin: 0px auto;
    background-color: #fff;
    height: auto;
    padding: 60px 0;
}

footer .dty-ftr--item {
    margin: 5px;
    text-align: left;
    flex-grow: 1;
    height: auto;
}

.ftr-grow {
    flex-grow: 1.5 !important;
}

.ftritm--fchld img {
    width: 150px;
}

.ftritm--fchld p {
    margin: 0px;
    padding: 0px;
    width: 315px;
    line-height: 17pt;
    font-size: 12pt;
    margin-bottom: 15px;
}

.ftritm--fchld em {
    font-size: 11pt;
    font-style: normal;
    color: #a2a2a2;
    line-height: 0px;
}

.dty-ftr--item ul {
}

.dty-ftr--item ul > li:first-child {
    font-weight: 700;
    font-size: 14pt;
    margin-bottom: 15px;
}

.dty-ftr--item ul > li {
    height: 30px;
    font-size: 12pt;
    cursor: pointer;
    margin-top: 5px;
}

.dty-ftr--item ul > li:hover {text-decoration: underline;}
.dty-ftr--item ul > li:first-child:hover {text-decoration: transparent;}





</style>
