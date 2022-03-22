<template>
<div id="app2">
    <div class="text-container">
        <span>앞쪽에 펼쳐진<br> 색동 나라의 풍경 속에서<br> 당신의 요술봉을 확인해보세요.</span>
    </div>
    <spinner :loading="LoadingStatus"></spinner>
  </div>
</template>

<script>
import Spinner from "../common/Spinner.vue"
import bus from "../utils/bus.js"

export default {
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

</style>