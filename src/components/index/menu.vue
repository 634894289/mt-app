<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(index)" @mouseleave="menuLeave()">
                <i :class="item.icon"></i>
                {{item.title}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if='curDetail' class="detail" @mouseenter="detailEnter()" @mouseleave="detailLeave()">
            <template v-for="(item, index) in curDetail">
                <h4 :key="index">{{item.title}}</h4>
                <template v-for="(val, ind) in item.children" >
                    <span :key="ind + '_'">{{val}}</span>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      curDetail: null,
      menuList: [
        {
          title: '美食',
          icon: 'food',
          children: [
            {
              title: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '小吃快餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜',
                '香锅烤鱼',
                '粤港菜',
                '中式烧烤/烤串',
                '西北菜',
                '咖啡酒吧茶馆',
                '云贵菜',
                '东南亚菜',
                '海鲜',
                '素食',
                '台湾/客家菜',
                '创意菜',
                '汤/粥/炖菜',
                '蒙餐',
                '新疆菜',
                '其他美食',
                '京菜鲁菜'
              ]
            }
          ]
        },
        {
          title: '外卖',
          icon: 'takeout',
          children: [
            {
              title: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          title: '酒店',
          icon: 'hotel',
          children: [
            {
              title: '酒店',
              children: [
                '经济型',
                '舒适/三星',
                '高档/四星',
                '豪华/五星'
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    menuEnter (index) {
      this.clearTimer()
      this.curDetail = this.menuList[index].children
    },
    menuLeave () {
      this.timer = setTimeout(() => {
        this.curDetail = null
      }, 200)
    },
    detailEnter () {
      this.clearTimer()
    },
    detailLeave () {
      this.curDetail = null
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  }
}
</script>

<style>

</style>
