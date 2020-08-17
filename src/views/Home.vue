<template>
    <div id="backhome">
      <cube-slide ref="slide" 
      :data="items" 
      @change="changePage">
        <cube-slide-item v-for="(item, index) in items" 
        :key="index" 
        @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img class="lbt" :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
      <div class="selldata">
        <div class="sell">
          <p class="text">今日销售</p>
          <p class="num">12345</p>
        </div>
        <div class="orders">
          <p class="text">今日订单</p>
          <p class="num">12345</p>
        </div>
        <div class="sell">
          <p class="text">商品种类</p>
          <p class="num">1200</p>
        </div>
        <div class="orders">
          <p class="text">订单总数</p>
          <p class="num">200</p>
        </div>
        <a href="../nav/shouye">
          <div class="toshouye">进入外卖网站</div>
        </a>
      </div>
      <div class="weeksell">
        <p>一周销量</p>
        <!-- 折线图 -->
        <div class="sellline">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <!-- 折线图渐变颜色样式 -->
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
              </linearGradient>
              <!-- 折线图渐变光晕样式 -->
              <filter id="f1" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
            <!-- 绘制折线图 -->
            <polyline class="line" points="25,100 65,25 105,40 145,80 185,60 225,80 265,100"
              style="fill:none;stroke:url(#grad1);stroke-width:3" filter="url(#f1)"/>
            <text x="15" y="120" fill="#555555" font-size="14" >日
              <tspan x="55" y="120">一</tspan>
              <tspan x="95" y="120">二</tspan>
              <tspan x="135" y="120">三</tspan>
              <tspan x="175" y="120">四</tspan>
              <tspan x="215" y="120">五</tspan>
              <tspan x="255" y="120">六</tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    changePage(current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
  async created(){
      try{
          //获取轮播图
          const items=await this.$http.get('/api/lbt')
          this.items=items.data
      }catch(err){
          console.log(err)
      }
  }
}
</script>

<style lang="stylus" scoped>
  background 
  #backhome
    background #FFFAE5
    padding-bottom 5px
    a  
      .lbt
        display block
        width 100%
        height 120px
        border-radius 10px
      width 95%
      padding 5px 2.5% 
    //首页跳转按钮
    .toshouye
      color #eeeeee
      background #FF941F
      height 40px
      width 50%
      font-size 18px
      display flex
      float left
      margin 2% 25% 
      border-radius 20px
      justify-content center
      align-items center
      box-shadow 0 0 10px #888888
    //销量数据文本框  
    .selldata
      background #FFFAE5
      height 300px
      width 100%
      color #efefef
      p.num
        font-size 24px
        font-weight bold
        margin-left 5px
      p.text
        font-size 14px
        margin-bottom 60px
        margin-left 10px
      .sell
        float left
        display flex
        background: linear-gradient(to right,#A7E530,#D6C41F);
        height 100px
        width 40%
        border-radius 10px
        margin 2.5% 5% 2.5% 5%
        justify-content start
        align-items center
        box-shadow 6px 6px 5px #888888
      .orders
        float right
        display flex
        height 100px
        background: linear-gradient(to right,#D6C41F,#FF831F);
        width 40%
        border-radius 10px
        justify-content start
        align-items center
        box-shadow 6px 6px 5px #888888
        margin 2.5% 7.5% 2.5% 0
    //图表框
    .weeksell
      background #eeeeee
      border-radius 10px
      margin 10px
      p
        font-size 18px
        color #555555
        padding 10px 0 0 0
    .line
      box-shadow 0 0 10 #888888
    .sellline
      height 170px
</style>
