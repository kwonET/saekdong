<template>
    <div id="charm-save" class="charm-container" ref="printMe">
        <img src="../../assets/charm.png" alt="">
        <div class="charm-content">
            <div class="mini-container">
                <!-- <div class="mini-rect"></div> -->
                <div class="mini-shape">
                    <img class="element" :src="require(`../../assets/pngreplace/Spr_${imgName[2]}.png`)" alt="">
                </div>
                <div class="mini-wish" > 
                    <span class="black">{{ userWish }}</span> 
                </div>
            </div>
            <div class="charm-text">
                <span class="red" v-if="this.language=='ko'">당신의 염원은<br> 곧 이루어질 것입니다.<br> 색동 요술나라는<br> 당신의 앞날을 축복합니다</span>
                <span class="red" v-if="this.language=='en'">Your wish will come<br> true soon. You have<br> the blessing of Saekdong<br> Magic Land for your future.</span>
            </div>
        </div>
    </div>
</template>