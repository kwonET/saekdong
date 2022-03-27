<template>
<div id="play2">
    <div class="text-container">
        <span v-if="this.language=='ko'">이제 앞쪽에 펼쳐진<br> 색동 나라의 풍경속에서<br> 당신의 요술봉을 확인해 보세요</span>
        <span v-if="this.language=='en'">Now let’s check out your magic wand<br> in the scenery of Saekdong Land coming next.</span>
    </div>
    <div class="num-container">
        <span> {{ percent }} %</span>
    </div>
    <spinner :loading="LoadingStatus"></spinner>
</div>
</template>

<script>
import Spinner from "../common/Spinner.vue"
import bus from "../utils/bus.js"

export default {
    date(){
        return {
            percent:100,
        }
    },
    components:{
        Spinner,
    },
    data(){
        return {
            LoadingStatus:true,
        }
    },
    methods:{
        startSpinner(){
            this.LoadingStatus=true;
        },
        endSpinner(){
            this.LoadingStatus=false;
        }
    },
    computed:{
        language(){
            return this.$store.state.language;
        },
    },
    mounted() {
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.replace('/charm');
        }, 2000);
    },
    // created(){
    //     bus.$on('start:spinner', this.startSpinner);
    //     but.$on('end:spinner',this.endSpinner);
    // },
    // beforeDestroy(){
    //     bus.$off('start:spinner'),
    //     bus.$off('end:spinner');
    // }
}
</script>

<style>
body{
    margin:0;
}
#play2{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: #19A5E2;
}
.text-container{
    height:45%;
    display:flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    margin-top:20%;
}
.num-container{
    display:flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    margin:0 auto;
}
span{
    margin:0 auto;

    font-style: medium;
    font-weight: 500;
    font-size: 5.3075vw;
    line-height: 4rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FFFFFF;
}
</style>