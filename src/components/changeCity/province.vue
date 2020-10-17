<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select :list="province" title='省份' :value='curProvince' :isShow="provinceActive" @change_active="changePActive" @change='changeProvice'/>
    <m-select :list="city" title='城市' :value='curCity' :isShow="cityActive" @change_active="changeCActive" @change='changeCity'/>
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="(item,index) in searchList" :key="index" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mSelect from "./select";
export default {
  components: {
    mSelect
  },
  data() {
    return {
      loading: false,
      provinceActive: false,
      cityActive: false,
      curProvince: "省份",
      curCity: "城市",
      province: [
          "山东",
          "甘肃",
          "江苏",
          "北京",
          "云南",
          "海南",
          "浙江",
          "上海",
          "天津",
          "陕西",
          "新疆",
          "贵州",
          "安徽",
          "澳门",
          "湖南",
          "河北",
          "香港",
          "辽宁",
          "四川",
          "宁夏",
          "吉林",
          "福建",
          "湖北",
          "广东",
          "重庆",
          "山西",
          "江西",
          "黑龙江",
          "青海",
          "河南",
          "台湾",
          "内蒙古",
          "西藏",
          "广西"
        ],
      city: ["哈尔滨", "梅州"],
      searchList: ["哈尔滨", "梅州"],
      searchWord: ''
    };
  },
  methods: {
    changePActive(flag) {
      this.provinceActive = flag;
      if (this.cityActive && flag) {
        this.cityActive = false;
      }
    },
    changeCActive(flag) {
      this.cityActive = flag;
      if (this.provinceActive && flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    changeProvice(val) {
      this.curProvince = val;
    },
    changeCity(val) {
      this.curCity = val;
    }
  }
};
</script>

<style lang='less'>
@import "../../assets/css/changecity/iselect.less";
</style>
