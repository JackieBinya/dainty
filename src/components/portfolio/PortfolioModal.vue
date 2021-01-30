<template>
    <div class="dty-portfolio--modal" v-if="item.visible">        
        <span @click="closeModal">close</span>
        <div class="modal-box" :style="'background-image:url('+ require(`../../assets/portfolio/${item.image}`) + ')'"></div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioModal',
    props: ['item'],

    methods: {
        closeModal () {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

.dty-portfolio--modal {
    height: 100% !important;
    position: fixed !important;
    width: 100% !important;
    top: 0 !important;
    left: 0 !important;
    box-sizing: border-box !important;
    color: #fff !important;
    background: rgba(255, 255, 255, 0.8) !important;
    z-index: 99999999;
    transition: all 0.5s ease-in !important; text-align: center; overflow: hidden;}

.dty-portfolio--modal .modal-box {
    width: 100%;
    height: 100%;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    margin: auto auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;margin-top: 6vh;}

span {color: #fff;
    font-size: 16pt;
    cursor: pointer;
    width: 25px;
    height: 25px;
    background-color: #000;
    display: block;
    position: absolute;
    right: 1%;
    top: 1%;
    overflow: hidden;
    padding: 5px;
    border-radius: 50%;}


</style>