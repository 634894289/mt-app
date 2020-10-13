<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <nav-bar />
        </el-col>
    </el-row>
</template>

<script>
import geo from './geo'
import navBar from './navBar'
export default {
  components: {
    geo,
    navBar
  }
}
</script>

<style lang="less">
    @import '../../assets/css/public/header/topbar.less';
</style>
