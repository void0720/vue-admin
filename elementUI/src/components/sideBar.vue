<template>
    <div class="side">
        <el-menu default-active="2" @open="handleOpen" @close="handleClose" theme="dark" unique-opened router>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>组件展示</template>
                <el-menu-item index="form">表单</el-menu-item>
                <el-menu-item index="dialog">对话框</el-menu-item>
                <el-menu-item index="steps">步骤条</el-menu-item>
                <el-menu-item index="table">表格</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-menu-item index="3-4">选项4</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'navo',
    data() {
        return {
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {

    }
}
</script>
<style media="screen">
    .el-menu {
        border-radius: 0;
    }

    .side {
        overflow: auto;
        text-shadow: 3px 3px 7px #000;
        background-color: #324157;
        float: left;
    }
    .side .el-menu-item,.side .el-submenu__title{
        height: 50px;
        line-height: 50px;
    }
</style>
