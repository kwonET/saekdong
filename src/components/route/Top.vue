<template>
    <div id="stick" :style="userStyle" style>
      <div class="wish-stick">
        <img id="element" :src="require(`../../assets/pngreplace/Spr_${imgName[0]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[1]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[2]}.png`)" alt="">
        <!-- 임의의 도형들 21개-->
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[0]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[1]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[2]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[3]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[4]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[5]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[6]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[7]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[8]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[9]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[10]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[11]}.png`)" alt="">
<img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[12]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[13]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[14]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[15]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[16]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[17]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[18]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[19]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[20]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,
            'heart_b_p':bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${randomName[21]}.png`)" alt="">
      </div>
    </div>
</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import NextBtn from '../common/NextBtn.vue'

export default {
    data(){
        return{
            bottom_point:false,
            bottom_between:false,
            mid_point:false,
            mid_between:false,
            userName: "",
            message: "",
            recvList: [],
            BtnKorTxt:'보내기',

            point:["A-2","A-8","B-4","B-6","C-5","A-10"],
            //c-1 뜨는 문제 + c-2, c-8
            between:["A-1","A-3","A-4","B-2","B-5","B-7","B-8","B-10","B-11","C-1","C-2","C-3","C-4","C-7","C-8"],
            //a-5 ~ b-1 살짝 뜸 + c-9
            none:["A-5","A-6","A-7","A-9","A-11","B-1","B-3","C-6","C-9","C-10"],
            imgName:['C-10','C-10','B-9'],
            randomName:["A-1","A-3","A-4","B-2","B-5","B-7","B-8","B-10","B-11","C-1","C-2","C-3","C-4","C-7","C-8","A-5","A-6","A-7","A-9","A-11","B-1","B-3","C-6","C-9",],
            bottom_point:false,
            bottom_between:false,
            mid_point:false,
            mid_between:false,
        }
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
              '--r':this.paletteColor[0][10],
              '--g':this.paletteColor[1][10],
              '--b':this.paletteColor[2][10],
          }
      }
  },
    created(){
        this.connect();
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
    },
    mounted(){
        //하트가 첫번째로 쌓이는 경우 2
        if(this.imgName[2]=="B-9"){
            if((this.point).includes(this.imgName[1])){
                this.bottomHeartP();
            }
            else if((this.between).includes(this.imgName[1])){
                this.bottomHeartB();
            }
            else if((this.none).includes(this.imgName[1])){
                this.bottomHeartN();
            }
        }  
        //하트가 두번째로 쌓이는 경우 1
        else if(this.imgName[1]=="B-9"){
            if((this.point).includes(this.imgName[0])){
                this.midHeartP();
            }
            else if((this.between).includes(this.imgName[0])){
                this.midHeartB();
            }
            else if((this.none).includes(this.imgName[0])){
                this.midHeartN();
            }
        }  
    },
    methods:{
        sendMessage (e) {
            this.send()
            this.message = '전송'
        },    
        send() {
            console.log("Send message:" + this.message);
            if (this.stompClient && this.stompClient.connected) {
                const msg = { 
                    userName: this.userName,
                    content: this.message 
                };
                this.stompClient.send("/receive", JSON.stringify(msg), {});
            }
        },    
        connect() {
            const serverURL = "https://dorothymagic.com:8080/api"
            let socket = new SockJS(serverURL);
            this.stompClient = Stomp.over(socket);
            console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
            this.stompClient.connect(
                {},
                frame => {
                // 소켓 연결 성공
                this.connected = true;
                console.log('소켓 연결 성공', frame);
                // 서버의 메시지 전송 endpoint를 구독합니다.
                // 이런형태를 pub sub 구조라고 합니다.
                this.stompClient.subscribe("/topic/magicStick", res => {
                    console.log('구독으로 받은 메시지 입니다.', res.object1);
                    // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
                    this.recvList.push(JSON.parse(res.object1));
                    this.recvList.push(JSON.parse(res.object2));
                    this.recvList.push(JSON.parse(res.object3));
                });
                },
                error => {
                // 소켓 연결 실패
                console.log('소켓 연결 실패', error);
                this.connected = false;
            });
        },
                bottomHeartP(){
            this.bottom_between=false;
            this.bottom_point=true; 
        },
        bottomHeartB(){
            this.bottom_between=true;
            this.bottom_point=false;
        },
        bottomHeartN(){
            this.bottom_between=false;
            this.bottom_point=false;
        },
        midHeartP(){
            this.mid_between=false;
            this.mid_point=true; 
        },
        midHeartB(){
            this.mid_between=true;
            this.mid_point=false;
        },
        midHeartN(){
            this.mid_between=false;
            this.mid_point=false;
        },
    },
    components:{
        NextBtn,
    }
}
</script>

<style>
body{
    margin:0;
}
#stick{
    position: absolute;
    top:0;
    left:0;
    width:4000px;
    height:2400px;
}
.wish-stick{
    width:100%;
    height:100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
#element{
    width:50%;
}
.stick{
    width:50%;
}
/* 하트 */
.heart_b_p{
    margin-top:-3.5%;
}
.heart_b_b{
    margin-top:-1.3%;
}
.heart_m_p{
    margin-top:-3.5%;
}
.stick{
    margin: 0%;
}
</style>