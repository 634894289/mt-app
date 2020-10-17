<template>
    <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for='(item, index) in list' :key="index">{{item}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang='less'>
    @import '../../assets/css/changecity/hot.less';
</style>