<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="" srcset="">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input placeholder="" v-model="searchVal" @focus="focus" @blur="blur"></el-input>
          <el-button icon="el-icon-search" @click="search" type="primary"></el-button>
          <dl class="hotPlace"  v-if="isHotPlace">
            <dt>热门搜索</dt>
            <template v-for="(item ,index) in hotList">
              <dd  :key="index"><router-link :to="{name: 'goods', params:{name:item}}">{{item}}</router-link></dd>
            </template>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <template v-for="(item, index) in searchList" >
              <dd :key="index"><router-link :to="{name: 'goods', params:{name:item}}">{{item}}</router-link></dd>
            </template>
          </dl>
        </div>
        <p class="suggest">
         <template v-for="(item, index) in suggestList" >
            <a href="#" :key="index">{{item}}</a>
          </template>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: '',
      isFocus: false,
      hotList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店', '7天连锁酒店'],
      searchList: ['火锅', '火锅自助餐', '火锅重庆'],
      suggestList: ['京东第一温泉度假村', '99旅馆连锁', '尚客优快捷酒店', '7天连锁酒店']
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchVal
    },
    isSearchList () {
      return this.isFocus && this.searchVal
    }
  },
  methods: {
    search () {
      console.log(1)
    },
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    }
  }
}
</script>

<style lang="less">
</style>
