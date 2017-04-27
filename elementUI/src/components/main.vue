<template>
    <div class="main">
        <div style="padding:10px">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
.main {
    float: left;
    overflow: auto;
}
</style>
