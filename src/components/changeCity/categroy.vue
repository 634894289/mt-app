<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(val, index) in char" :key="index">
                <a :href="'#city-' + val">{{val}}</a>
            </dd>
        </dl>
        <template v-for="(item, index) in cityList">
            <dl class="m-categroy-section" :id="'city-' + index" :key='index'>
                <dt>{{index}}</dt>
                <dd >
                    <span v-for="(val, ind) in item" :key="ind">{{val}}</span>
                </dd>
            </dl>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            char: 'ABCDEFGHJKLMNPQRSTWXYZ',
            cityList: {
                'A': [
                        "鞍山",
                        "安庆",
                        "安阳",
                        "安顺",
                        "安康",
                        "安丘",
                        "安岳",
                        "安陆市",
                        "阿克苏",
                        "安州区",
                        "阿图什市",
                        "安吉",
                        "阿拉善盟",
                        "阿荣旗",
                        "安平",
                        "安溪",
                        "安宁",
                        "安化",
                        "阿拉尔",
                        "安福",
                        "阿勒泰市",
                        "阿城区",
                        "澳门",
                        "阿勒泰",
                        "阿里",
                        "阿坝",
                    ],
                'B': [
                        "北京",
                        "包头",
                        "保定",
                        "蚌埠亳州",
                        "滨州",
                        "宝鸡",
                        "白城",
                        "霸州",
                        "巴彦淖尔",
                        "北海",
                        "百色",
                        "巴中",
                        "毕节",
                        "保山",
                        "本溪",
                        "白银",
                        "白山",
                        "璧山",
                    ]
            }
        }
    }
}
</script>

<style lang='less'>
    @import '../../assets/css/changecity/categroy.less';
</style>