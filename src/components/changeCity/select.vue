<template>
  <div class="choose-wrap" @click.stop='showWrapper' v-document-click='documentClick'>
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': isShow}">
        <h2>{{title}}</h2>
        <div class="wrapper">

          <template v-for="(item, index) in items">
            <div class="col" :key="index">
              <span :class="{'mt-item':true, 'active': val == value}" v-for="(val, ind) in item" :key="ind" @click='changeVal(val)'>{{val}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 12
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    isShow: {
      type: Boolean,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    items() {
      let start = 0;
      let end = this.count;
      let len = this.list.length
      let loop = Math.ceil( len / this.count );
      let items = [];
      for ( let i = 0; i < loop; i ++ ) {
        items.push(this.list.slice(start, end));
        start += this.count;
        end += this.count;
        if (end > len) {
          end = len;
        }
      }
      return items;
    },
  },
  methods: {
    showWrapper() {
      this.$emit('change_active', true);
    },
    documentClick() {
      this.$emit('change_active', false);
    },
    changeVal(val) {
      this.$emit("change", val);
    }
  }
};
</script>

<style lang='less'>
@import "../../assets/css/changecity/select.less";
</style>
