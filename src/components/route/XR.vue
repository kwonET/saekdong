<template>
  <div id="xr">
    <div class="text-container">
        <img class="carousel" src="../../assets/xr_1.png" alt="">
        <h3 v-if="this.language=='ko'">바닥마커를 인식해주세요</h3>
        <h3 v-if="this.language=='en'">Read the QR code on the floor.</h3>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        language(){
            return this.$store.state.language;
        },
    },
    methods:{
        toNextPage(){
            this.$router.replace('/stick');
        },
    },
}
</script>

<style>
body{
    margin:0;
}
#xr{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}
.text-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:30%;
    /* height:58%;
    margin-top:-30%; */
}
h3{
    margin:0 auto;

    font-style: medium;
    font-weight: 400;
    font-size: 4.2vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -2px;

    color: #000000;

    position: absolute;
    top:13.5%;
    left:10%;
    right:10%;
    width:80%;
    height:10%;
    z-index: 100;
}
.carousel{
    position: absolute;
    top:10%;
    left:10%;
    right:10%;
    width:80%;
    height:10%;
    z-index: 0;
}
.wish-top{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:70%;
}
</style>