// App.vue
<template>
    <div id="app">
        <!-- <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">about</router-link></li>
        </ul> -->
        <router-view></router-view> <!-- 컴포넌트 렌더링 -->
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        console.log(this.$router)
    },
}
</script>

<style>
*{
    font-family: 'Gothic A1', 'Source Han Sans', 'Noto Sans KR', 'Helvetica Neue', 'Arial', sans-serif;
    
}
</style>
