<template>
<div id="charm">
    <div class="text-container">
        <h3 v-if="this.language=='ko'">이 순간, 색동요술봉의 힘으로 당신의 염원이<br> 세계에 녹아 들어 작동하기 시작했습니다!</h3>
        <h3 v-if="this.language=='en'">Your wish has now become the part of the world<br> with the power of Saekdong Magic Wand!</h3>
    </div>
    <div class="charm-container">
        <img src="../../assets/charm.png" alt="">
        <div class="charm-content">
            <div class="mini-container">
                <div class="mini-rect"></div>
                <div class="mini-shape">
                </div>
                <div class="mini-wish">make money</div>
            </div>
            <div class="charm-text">
                <span v-if="this.language=='ko'">당신의 염원은<br> 곧 이루어질 것입니다.<br> 색동 요술나라는<br> 당신의 앞날을 축복합니다</span>
                <span v-if="this.language=='en'">Your wish will<br> come true soon.<br> You have the blessing<br> of Saekdong Magic Land for your future.</span>
            </div>
        </div>
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
     mounted() {
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.replace('/weather');
        }, 2000);
    },
}
</script>

<style>
body{
    margin:0;
}
#charm{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: #19A5E2;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.text-container{
    height:60%;
    margin-top:-30%;
}
h3{
    margin:0 auto;

    font-style: medium;
    font-weight: 400;
    font-size: 4.4393vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FFFFFF;
}


img{
    position: absolute;
    top:25%;
    left:20%;
    width:60%;
    height:50%;
    z-index: 1;
}

.mini-container{
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    top:35%;
    left:20%;
    width:60%;
    height:50%;
}
.mini-rect{
    position: absolute;
    z-index: 2;
    width: 60%;
    height: 45%;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 22px;
}
.mini-shape{
    position: absolute;
    z-index: 100;
    width: 200px;
    height: 200px;
    top:10%;

    background: rgb(0, 255, 191);
    border-radius: 50%;
}
.mini-wish{
    position: absolute;
    z-index: 100;
    top: 35%;
    font-size:30px;
}
.charm-text{
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:40%;
    left:20%;
    width:60%;
    height:50%;
}
span{
    margin:0 auto;

    font-style: medium;
    font-weight: 500;
    font-size: 2.9vw;
    line-height: 2rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FF0600;
}
</style>