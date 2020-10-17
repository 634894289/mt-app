<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{curPosition}}美团</el-breadcrumb-item>
            <el-breadcrumb-item>{{curPosition}}{{goods}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            curPosition: state => state.position
        }),
        goods() {
            return this.$route.params.name;
        }
    }
}
</script>

<style lang='less'>
    
</style>