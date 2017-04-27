<template>
  <div>
    <div style="float:left;margin-left:10px">
      <el-button :plain="true" @click="open">打开消息提示</el-button>
    </div>
    <div style="float:left;margin-left:10px">
      <el-button @click="open2">点击打开对话框</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$message('这是一条消息提示');
    },
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>