<template>
    <cube-scroll-nav
    :side="true"
    :data="data"
    :current="current"
    @change="changeHandler"
    @sticky-change="stickyChangeHandler">
    <ul class="prepend-header" slot="prepend">
      <div class="lione">
        <a class="back" href="./nav/shouye">
          <div><i class="cubeic-back"></i></div>
        </a>
        <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114" alt="">
      </div>
      <div class="litwo">
        <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114" alt="">
        <p>商家：</p>
      </div>
    </ul>
    <cube-scroll-nav-panel
      v-for="item in goods"
      :key="item.name"
      :label="item.name"
      :current="current"
      :title="item.name">
      <ul class="list">
        <li v-for="food in item.foods" :key="food.index">
          <div class="food">
            <img :src="food.icon">
            <div class="text">
              <p class="foodname">{{food.name}}</p>
              <p>销量：{{food.sellCount}}</p>
              <p>价格：{{food.price}}元</p>
            </div>
          </div>
        </li>
      </ul>
    </cube-scroll-nav-panel>
  </cube-scroll-nav>
</template>

<script>
import goodsData from './goods-list.json'
const good = goodsData.goods

export default {
  components: {
    // CubePage
  },
  data() {
    return {
      goods: good,
      current: good[0].name
    }
  },
  methods: {
    changeHandler(label) {
      console.log('changed to:', label)
      // console.log(goods[0].name)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current),
      this.current=current
    }
  }
}
</script>

<style lang="stylus" scoped>

  .lione 
    height 100px
    z-index -1
    img 
      width 100%
      height 100px
  .litwo
    height 100px
    width 80%
    border-radius 10px
    background #eeeeee
    box-shadow 10px 10px 5px #aaaaaa
    margin 0px 10% 20px 10%
    z-index 1
    img 
      margin -20px 55% 20px 5%
      width 40%
      border-radius 10px
    p
      width 55%
      position absolute
      margin -80px 40% 0 20%
      color #000
      font-size 16px
  .cube-scroll-nav-bar
    font-size 30px
  .cube-scroll-nav-panel
    font-size 16px
    text-align left 
  .food
    font-size 14px
    padding 5px
    img 
      width 50%
      height 100px
      float left
    .text
      height 100px
      overflow hidden
      text-overflow ellipsis
      white-space: nowrap
      p
        width 100px 
        padding 2px
        float left
        font-weight: bold
        color #000
  .list
    background #eeeeee
  .back
    position absolute
    left 10px
    top 10px
    div
      border-radius 50%
      padding 2px 2px 0px 0px
      color #ffffff
</style>