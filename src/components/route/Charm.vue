<template>
<div id="charm" :style="userStyle" style>
        <div class="text-container" data-html2canvas-ignore="true">
            <div class="text-show">
                <h3 v-if="this.language=='ko'">이 순간, 색동요술봉의 힘으로 당신의 염원이 세계에 녹아 들어 작동하기 시작했습니다!</h3>
                <h3 v-if="this.language=='en'">Your wish has now become the part of the world with the power of Saekdong Magic Wand!</h3>
            </div>
        </div>

        <div class="charm-container" ref="printMe">
            <img src="../../assets/charm.png" alt="">
            <div class="charm-content">
                <div class="mini-container">
                    <div class="mini-rect"></div>
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

        <div class="btn-container" data-html2canvas-ignore="true">
            <div class="btn1">
                <SaveBtn v-if="this.language=='ko'" v-bind:propsdata="SaveKorTxt" v-on:toNext="makePDF()"></SaveBtn>
                <SaveBtn v-if="this.language=='en'" v-bind:propsdata="SaveEngTxt" v-on:toNext="makePDF()"></SaveBtn>
            </div>
            <div class="btn2">
                <!-- 다음버튼 -->
                <NextBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage()"></NextBtn>
                <NextBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage()"></NextBtn>
            </div>
        </div>
    </div>
</template>

<script>
import NextBtn from '../common/NextBtn.vue'
import SaveBtn from '../common/SaveBtn.vue'

export default {
    data(){
        return{
            SaveKorTxt:'부적 저장하기',
            SaveEngTxt:'Save the Charm',
            BtnKorTxt:'탑 보러 가기',
            BtnEngTxt:'See my tower',
            userObj:{},
            userWish:'',
            imgName:['C-2','A-8','B-9'],
        };
    },
    computed:{
        language(){
            return this.$store.state.language;
        },
        timeColor(){
            return this.$store.state.time_color;
        },
        weatherColor(){
            return this.$store.state.weather_color;
        }, 
        paletteColor(){
            return this.$store.state.palette;
        },
        userStyle(){
            return{
                //home = 0번째
                '--r':this.paletteColor[0][9],
                '--g':this.paletteColor[1][9],
                '--b':this.paletteColor[2][9],
            }
        }
    },
    methods:{
        toNextPage(){
            this.$router.replace('/tower');
        },
        makePDF(){
            var node = document.getElementsByClassName('charm-container');
                htmlToImage.toPng(node)
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    document.body.appendChild(img);
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
            /*
            htmlToImage.toPng(document.getElementsByClassName('charm-container'))
                .then(function (dataUrl) {
                    download(dataUrl, 'my-charm.png');
                });
                */
        },
        /*
        makePDF (selector = '.charm-container') {
			this.$window.html2canvas = html2canvas //Vue.js 특성상 window 객체에 직접 할당해야한다.
			let that = this
			let pdf = new jsPDF('p', 'mm', 'a4')
			let canvas = pdf.canvas
			const pageWidth = 210 //캔버스 너비 mm
			const pageHeight = 295 //캔버스 높이 mm
			canvas.width = pageWidth

			let ele = document.querySelector(selector)
			let width = ele.offsetWidth // 셀렉트한 요소의 px 너비
			let height = ele.offsetHeight // 셀렉트한 요소의 px 높이
			let imgHeight = pageWidth * height/width // 이미지 높이값 px to mm 변환

			if(!ele){
				console.warn(selector + ' is not exist.')
				return false
			}

			html2canvas(ele, {
				onrendered: function(canvas) {
					let position = 0
					const imgData = canvas.toDataURL('image/png')
					pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight, undefined, 'slow')

					//Paging 처리
					let heightLeft = imgHeight //페이징 처리를 위해 남은 페이지 높이 세팅.
					heightLeft -= pageHeight
					while (heightLeft >= 0) {
						position = heightLeft - imgHeight
						pdf.addPage();
						pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight)
						heightLeft -= pageHeight
					}

					pdf.save(that.propTitle.toLowerCase() +'.pdf')
				},
            });	
        
		},*/
    },
    
    components:{
        NextBtn,
        SaveBtn
    },  
    created(){
        if(localStorage.key(localStorage.length-1)!='loglevel:webpack-dev-server'){
            this.userWish=localStorage.key(localStorage.length-1);
        }
        else{
            this.userWish=localStorage.key(localStorage.length-2);
        }
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
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
    background-color: rgb(var(--r),var(--g),var(--b));
}
.text-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width:80%;
    height:30%;
    margin-left:10%;
    margin-top:0%;
}
/* .text-show{
    width:100%;
    height:100%;
} */
h3{
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
    top:22%;
    left:20%;
    width:60%;
    height:50%;
    z-index: 1;
}
.charm-content{
    width:100%;
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
    /* width: 400px;
    height: 400px; */

    width:100%;
    height:40%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.mini-wish{
    position: absolute;
    z-index: 100;

    height:10%;
    width:100%;
    top: 32%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.black{
    margin:0 auto;
    font-style: medium;
    font-weight: 500;
    font-size: 3.1vw;
    line-height: 2rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FF0600;
}
.charm-text{
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:39%;
    left:20%;
    width:60%;
    height:50%;
}
.red{
    margin:0 auto;

    font-style: medium;
    font-weight: 500;
    font-size: 3.1vw;
    line-height: 2rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FF0600;
}
.btn-container{
    display: flex;
    flex-direction: column;

}

</style>