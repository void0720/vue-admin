<template>
    <div class="wraper">
        <nav-bar></nav-bar>
        <side-bar></side-bar>
        <o-main></o-main>
    </div>
</template>

<script>
import navBar from './components/navBar.vue'
import sideBar from './components/sideBar.vue'
import oMain from './components/main.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        navBar,
        sideBar,
        oMain
    }
}
</script>
<style>
    .wraper{
        overflow: hidden;
        min-width: 1050px;
    }
</style>
