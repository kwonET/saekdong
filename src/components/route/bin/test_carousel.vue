<template>
<div id="intro">
    <div class="container">
        <carousel :perPage="1">
            <slide id=carslide class="slide1">
                여기 색동 요술봉은 <br>
                염원을 가진 사람을 도와 <br>
                그들의 소원을 이루어주는 <br>
                기적의 마법이 담겨 있습니다. <br>
            </slide>
            <slide id=carslide class="slide2">
                우선, <br>
                색동 요술 편지에 <br>
                당신의 염원을 작성하세요. <br>
            </slide>
            <slide id=carslide class="slide3">
                공간에 흩어져 있는 33개의 <br>
                색동 요술 도형은 <br>
                믿음 사랑 소망으로 <br>
                구성되어 있습니다. <br>
            </slide>
            <slide id=carslide class="slide4">
                선택한 3개의 도형이 모여 <br>
                당신의 요술봉이 탄생합니다. <br>
            </slide>
        </carousel>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
#intro{
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color: #FDD170;
}
.VueCarousel{
    text-align: center;
    margin: 31.8575vh auto;
    display: flex;
    background-image: url(/assets/carousel1.png);
    z-index: 0;
}
.VueCarousel-wrapper{
    width:250px;
    height:300px;
}
.VueCarousel-slide{
    font-style: normal;
    font-weight: 500;
    font-size: 4.2056vw;
    line-height: 5.2570vw;
    text-align: center;
    letter-spacing: -0.3505vw;

    color: #000000;
}
.slide1{
}
</style>