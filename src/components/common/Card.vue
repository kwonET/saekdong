<template>
<div class="card">
    <div id="arrow" class="prev"> 
        <i class="fa-solid fa-chevron-left" v-if="currentIndex!=0" @click="prevCard()"></i>
    </div>
    <div class="incard">
        <div class="img" :style="backgroundImage"></div>
        <div class="description" v-if="this.language=='ko'">{{ item.description[0] }}</div>
        <div class="description" v-if="this.language=='en'">{{ item.description[1] }}</div>
    </div>
    <div id="arrow" class="next">
        <i class="fa-solid fa-chevron-right" v-if="currentIndex!=3" @click="nextCard()"></i>  
    </div>
</div>

</template>

<script>
export default {
    props:[
        'item',
        'active'
    ],
    computed:{
        language(){
            return this.$store.state.language;
        },  
        backgroundImage(){  
            return {'background-image':'url(' + require('../../assets'+this.item.img) + ')'};
        },
        currentIndex() {
            return this.$store.getters.currentIndex;
        },
    },
    methods:{
        prevCard(){
            this.$store.commit('prevCard');
        },
        nextCard(){
            this.$store.commit('nextCard');
        }
    },
    mounted() {
      this.$el.addEventListener('prevCard', event => this.prevCard(event));
      this.$el.addEventListener('nextCard', event => this.nextCard(event));
    }
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
}
#arrow{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 80px;
    color: #474A57;
    opacity: 70%;
}
.prev{
    padding-left:30px;
    padding-right:20px;
    flex-grow: 3;
}
.next{
    padding-right:30px;
    padding-left:20px;
    flex-grow:3;
}
.incard{
    flex-basis: 70%;
    flex-grow:4;
    position:relative;

    // width:50%;
    height:600px;
    background-color: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    // overflow: hidden;
}

.img{
    /* img 사이즈 조정 */
    width:100%;
    height:600px;
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
    position:absolute;
    z-index: 1;
}
.description{
    position:absolute;
    z-index: 2;
    // position:absolute;
    // top:calc(100% - 450px);
    // padding:70px 150px;
    width:calc(100% - 200px);
    // height:40px;
    font-size:40px;
    color:#333;     
    
}
i{  
    position:absolute;
    z-index:3
}
</style>