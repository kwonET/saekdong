<template>
  <swiper
    v-bind="swiperOptions"
    class="intro-swiper"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
    v-for="(intro, index) in intros"
    :key="`${movie.id}-${index}`">
    <introItem :introData="intro"> <introItem>
    </swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data:{
        swipeOptions:{
            navigation:true,
            pagination:true,

            slidesPerView:6,
            slidesPerGroup:6,
            spaceBetween:10,
            breakpoints:{
                375:{
                    slidesPerView:1,
                },
                425:{
                    slidesPerView:2,
                    slidesPerGroup:2,
                },
                768:{
                    slidesPerView:3,
                    slidesPerGroup:3,
                },
                1024:{
                    slidesPerView:4,
                    slidesPerGroup:4,
                },
                1400:{
                    slidesPerView:5,
                    slidesPerGroup:5,
                }
            }
        }
    }
  };
</script>