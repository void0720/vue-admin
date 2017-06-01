<template>
    <div class="navTop">
        <el-row>
            <el-col :span="24">
                <div class="logoBar pull-left">
                    <span>adminUI</span>
                </div>
                <div class="grid-content el-menu--dark nav">
                    <span class="toggleScreen el-icon-menu"></span>
                    <el-menu theme="dark" :default-active="activeIndex" class="userBar pull-right text-center" mode="horizontal" @select="handleSelect">
                      <el-submenu index="2">
                        <template slot="title">
                            <span class="text-shadow">Hi，</span>
                            <span class="text-shadow">系统管理员</span>
                        </template>
                        <el-menu-item index="2-1">
                            <span class="glyphicon glyphicon-pencil"></span>
                            <span>修改密码</span>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <span class="glyphicon glyphicon-off"></span>
                            <span>退出系统</span>
                        </el-menu-item>
                      </el-submenu>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
    .grid-content {
      height: 60px;
    }
    .nav{
        line-height: 60px;
        color: #bfcbd9;
    }
    .toggleScreen{
        padding: 10px;
        margin-left: 20px;
        cursor: pointer;
    }
    .logoBar{
        height: 60px;
        width: 250px;
        text-align: center;
        text-shadow:3px 3px 7px #000;
        font-size: 16px;
        line-height: 60px;
        color: #bfcbd9;
    }
    .userBar{
        padding-right: 20px;
        line-height: 60px;
    }
    .text-shadow{
        text-shadow:3px 3px 7px #000;
    }
    .item {
      margin-top: 10px;
      margin-right: 40px;
    }
    .glyphicon{
        top: 2px;
    }
</style>
