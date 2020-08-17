<template>
  <div>
    <transition :name="transitionname">
      <router-view class="myrouter"> </router-view>
    </transition>
    <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler"
    class="navbar">
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionname:'slide-right',
      selectedLabelDefault: '外卖',
      tabs: [{
        label: '外卖',
        icon: 'cubeic-home'
      }, {
        label: '发现',
        icon: 'cubeic-search'
      }, {
        label: '订单',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      console.log(label)
    },
    //点击其他导航时
    changeHandler (label) {
      switch(label){
        case '外卖':
        this.$router.push({path:'/nav/shouye'});
        break;
        case '发现':
        this.$router.push({path:'/nav/search'});
        break;
        case '订单':
        this.$router.push({path:'/nav/order'});
        break;
        case '我的':
        this.$router.push({path:'/nav/mine'});
        break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cube-tab-bar.navbar
    position fixed
    bottom 0
    left 0
    z-index 100
    height 10%
    font-size 20px
    width 100%
    background #ffffff
    .cube-tab div
      padding-top 3px

  .myrouter
    position absolute
    width 100%
    transition all 0.8s ease
  .slide-left-enter,.slide-right-leave-active
    opacity 0
    -webkit-transform translate(100%,0)
    translate(100%,0)
  .slide-left-leave-active,.slide-right-enter
    opacity 0
    -webkit-transform translate(-100%,0)
    translate(-100%,0)
</style>