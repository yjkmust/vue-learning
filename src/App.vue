<template>
    <div id="app">
        <router-view ></router-view>
    </div>
</template>

<script>
    import Login from './components/Login.vue'
    // import Main from './components/MainPage'

    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>
    html, body,
    #app {
        color: #2c3e50;
        width: 100%;
        height: 100%;
        margin: 0;
    }
</style>
