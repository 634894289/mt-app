<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list my">
        <router-link :to="{name:'home'}">我的美团</router-link>
        <dl>
          <dd>
            <router-link :to="{name:'home'}">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">抵用券</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{name:'home'}">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link :to="{name:'home'}">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{name:'home'}">美团餐饮商户中心</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link :to="{name:'home'}">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{name:'home'}">网站导航</router-link>
        <div class="subContainer">
            <dl class="hotel">
                <dt>酒店旅游</dt>
                <dd><router-link :to="{name:'home'}">国际机票</router-link></dd>
                <dd><router-link :to="{name:'home'}">火车票</router-link></dd>
                <dd><router-link :to="{name:'home'}">民宿</router-link></dd>
                <dd><router-link :to="{name:'home'}">经济型酒店</router-link></dd>
                <dd><router-link :to="{name:'home'}">主题酒店</router-link></dd>
                <dd><router-link :to="{name:'home'}">商务酒店</router-link></dd>
                <dd><router-link :to="{name:'home'}">公寓</router-link></dd>
                <dd><router-link :to="{name:'home'}">豪华酒店</router-link></dd>
                <dd><router-link :to="{name:'home'}">客栈</router-link></dd>
                <dd><router-link :to="{name:'home'}">青年旅社</router-link></dd>
                <dd><router-link :to="{name:'home'}">度假酒店</router-link></dd>
                <dd><router-link :to="{name:'home'}">别墅</router-link></dd>
                <dd><router-link :to="{name:'home'}">农家院</router-link></dd>
            </dl>
            <dl class="food">
                <dt>吃美食</dt>
                <dd><router-link :to="{name: 'home'}">烤鱼</router-link></dd>
                <dd><router-link :to="{name: 'home'}">特色小吃</router-link></dd>
                <dd><router-link :to="{name: 'home'}">烧烤</router-link></dd>
                <dd><router-link :to="{name: 'home'}">自助餐</router-link></dd>
                <dd><router-link :to="{name: 'home'}">火锅</router-link></dd>
                <dd><router-link :to="{name: 'home'}">代金券</router-link></dd>
            </dl>
            <dl class="movie">
                <dt>看电影</dt>
                <dd><router-link :to="{name: 'home'}">热映电影</router-link></dd>
                <dd><router-link :to="{name: 'home'}">热门影院</router-link></dd>
                <dd><router-link :to="{name: 'home'}">热映电影口碑榜</router-link></dd>
                <dd><router-link :to="{name: 'home'}">最受期待电影</router-link></dd>
                <dd><router-link :to="{name: 'home'}">国内票房榜</router-link></dd>
                <dd><router-link :to="{name: 'home'}">北美票房榜</router-link></dd>
                <dd><router-link :to="{name: 'home'}">电影排行榜</router-link></dd>
            </dl>
            <dl class="app">
                <dt>手机应用</dt>
                <dd><router-link :to="{name: 'home'}"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="" srcset=""></router-link></dd>
                <dd><router-link :to="{name: 'home'}"><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="" srcset=""></router-link></dd>
                <dd><router-link :to="{name: 'home'}"><img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="" srcset=""></router-link></dd>
                <dd><router-link :to="{name: 'home'}"><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="" srcset=""></router-link></dd>
                <dd><router-link :to="{name: 'home'}"><img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="" srcset=""></router-link></dd>
            </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="less" scope>

</style>
