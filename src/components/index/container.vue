<template>
  <div class="m-istyle">
    <dl @mousemove="over($event)">
      <dt>{{navList.title}}</dt>
      <dd v-for="(item, index) in navList.list" :class="{active: kind == item.tab}" :data-type='item.tab' :key="index">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow='never' >
          <img
            :src="item.src"
            class="image"
          />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price}}</span>
                    <span class="units">/人均</span>
                </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true
    }
  },
  computed: {
    navList () {
      return JSON.parse(JSON.stringify(this.nav))
    }
  },
  data () {
    return {
      kind: 'all',
      list: [
        {
          src: 'https://img.meituan.net/phoenix/eacd5b28fe4ce5dfeb9f1aca581d96f91003065.jpg@740w_416h_1e_1c',
          title: '蜜橙民宿 长乐宫 摩尔城 万达 海亮 将军衙署 简欧清新 鸟瞰全城全尺寸落地窗',
          subTitle: '整套1居室·可住2人 |长乐宫万达',
          price: '178'
        },
        {
          src: 'https://img.meituan.net/phoenix/95252431875fdd42cf165545c02a9909993644.jpg@740w_416h_1e_1c',
          title: '青城之恋（近火车站、维多利商圈、内蒙附院，可做饭洗衣）',
          subTitle: '整套1居室·可住3人 |新华广场/呼和浩特站',
          price: '210'
        }
      ]
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>

<style lang='less'>
@import "../../assets/css/index/artistic.less";
.product-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
