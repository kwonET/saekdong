<!--carousel 틀만 잡고 구체적인 작업은 진행하지 않았습니다. 이 파일은 후에 코드리뷰 받도록 하겠습니다. -->

<template>
<div id="app">
    <div class="container">
        <carousel>
            <slide id=carslide class="slide1">
                Slide 1 Content
            </slide>
            <slide id=carslide class="slide2">
                Slide 2 Content
            </slide>
            <slide id=carslide class="slide3">
                Slide 3 Content
            </slide>
            <slide id=carslide class="slide4">
                Slide 4 Content
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
#app{
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color: #FDD170;
}
.container{
    text-align: center;
    margin: 31.8575vh auto;
}
.carslider {
    margin:auto 14.0187vw;
    width:100%;
    border: black;
    text-align: center;
}

</style>