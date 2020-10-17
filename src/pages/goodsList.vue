<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span='19'>
                categroy
            </el-col>
            <el-col :span="5">
                map + fal
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs'
export default {
    components: {
        crumbs
    }
}
</script>

<style lang='less'>
@import '../assets/css/products/index.less';
</style>