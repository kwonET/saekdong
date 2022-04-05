<!--알림창-->
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: top;
}
.modal-container {
  width: 82.0093vw;
  height: 8.0994vh;
  margin: 12.3110vh auto;
  padding: 24px;
  /* padding: 5px 10px; */
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;  
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  display:flex;
  justify-content: center;
  align-items: center ;
}
.modal-header{
  /* font-family: Gothic A1; */
  font-style: normal;
  font-weight: bold;  
  font-size: 1.4039vh;
  /* line-height: 1.7279vh;
  letter-spacing: -0.2336vw; */
  /* display:flex; */
  color: #FF337A;
  margin:0 auto;
}
.contain{
  margin: 0 auto;
  /* width:71.2617vw;
  height:3.4557vh; */
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.modal-header h3{
  text-align: left;
}
.modal-header .icon{
  /* max-width:20px; */

  margin-right:3.2710vw;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
