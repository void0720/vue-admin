<template>
    <div>
        <div>
        <el-steps :space="200" :active="1">
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    </div>
    <br />
    <hr>
    <div>
        <el-steps :space="100" :active="1">
        <el-step title="步骤 1" icon="edit"></el-step>
        <el-step title="步骤 2" icon="upload"></el-step>
        <el-step title="步骤 3" icon="picture"></el-step>
    </el-steps>
    </div>
    </div>
</template>