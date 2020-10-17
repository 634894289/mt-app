<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title='热门城市:' :list='hotList' />
        </el-row>
        <el-row>
            <hot title='最近访问:' :list='recentList' />
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>

<script>
import province from '@/components/changeCity/province'
import hot from '@/components/changeCity/hot'
import categroy from '@/components/changeCity/categroy'
export default {
  components: {
    province,
    hot,
    categroy
  },
  data () {
    return {
      hotList: ["哈尔滨", "梅州"],
      recentList: ["哈尔滨", "梅州"]
    }
  }
}
</script>

<style lang='less'>

</style>
