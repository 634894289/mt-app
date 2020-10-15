<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container :nav='iStyleList'/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mMenu from '@/components/index/menu'
import mLife from '@/components/index/life'
import mContainer from '@/components/index/container'
export default {
  data () {
    return {
      iStyleList: {
        title: '有格调',
        list: [
          {
            tab: 'all',
            text: '全部'
          },
          {
            tab: 'food',
            text: '约会聚餐'
          },
          {
            tab: 'spa',
            text: '丽人SPA'
          },
          {
            tab: 'movie',
            text: '电影演出'
          },
          {
            tab: 'travel',
            text: '品质出游'
          }
        ]
      }
    }
  },
  components: {
    mMenu,
    mLife,
    mContainer
  }
}
</script>

<style lang='less'>
    @import '../assets/css/index/index.less';
</style>
