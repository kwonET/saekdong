<template>
  <div class="card-list">
      <ul :style="listLength">
          <li v-for="(card, index) in cards"
            :key="index" :style="listPosition">
            <Card :item="card" 
                :active="index==currentIndex"/>
          </li>        
      </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
    data:()=>{
        return{
            touch:{
                startX:0, //터치 시작 지점
                endX:0 //터치 종료 지점
            }
        }
    },
    computed: {
      cards() {
        return this.$store.getters.cards;
      },
      currentIndex() {
        return this.$store.getters.currentIndex;
      },
      listLength() {
        return { width: this.cards.length * 100 + '%' };
      },
      // x축 방향으로 움직이게 함
      listPosition() {
        return { transform: 'translateX(-'+ this.currentIndex * 100 +'%)' };
      }
    },
    components: {
      Card
    },
    methods: {
      touchstart(event) {
        this.touch.startX = event.touches[0].clientX; //event로 좌표 파악
        this.touch.endX = 0;
      },
      touchmove(event) {
        this.touch.endX = event.touches[0].clientX;
      },
      touchend() {
        // 터치에 민감하지 않도록 해주는 if 문
        if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
          return;
          
        if(this.touch.endX < this.touch.startX)
          this.$store.commit('nextIndex');
        else
          this.$store.commit('prevIndex');
      }
    },
    mounted() {
      this.$el.addEventListener('touchstart', event => this.touchstart(event));
      this.$el.addEventListener('touchmove', event => this.touchmove(event));
      this.$el.addEventListener('touchend', () => this.touchend());
    }
}
</script>

<style lang="scss" scoped>
.card-list {
    // margin: 50px 20px;
    text-align: center;
    ul{
        display: flex;
        list-style: none;
        padding:0;
        // margin:14.0187vw;
    }
    li{
        width:100%;
        // margin:14.0187vw;
        transition: all .5s ease;
        margin:0 auto;
    }
    }
</style>