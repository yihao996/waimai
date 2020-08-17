<template>   
    <div id="shouye">
        <div class="navbar">
            <div class="nav-left">
                <i class="cubeic-search"></i>
            </div>
            <div class="nav-search">
                <input type="text" placeholder="请输入商家名、品类或者商圈">
            </div>
        </div>
        <!-- 实现轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="lbt" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 分类 -->
        <cube-slide ref="slidelists" :auto-play="false" :data="sorts">
            <cube-slide-item class="mysort" v-for="(list, index) in sorts" :key="index">
                <ul class="sorrtlu">
                    <li class="sortli" v-for="(item,index1) in list" :key="index1">
                        <a :href="item.url">
                            <img :src="item.image" alt="">
                            <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
        <!-- 商家 -->
        <cube-scroll-nav @change="changeHandler">
            <cube-scroll-nav-panel
            v-for="item in seller"
            :key="item.name"
            :label="item.name"
            class="mynav">
                <ul>
                    <li class="foodli" v-for="food in item.foods" :key="food.index">
                        <div class="shangjia">
                            <a :href="'../goods'">
                               <img :src="food.icon">
                                <div class="text">
                                    <p>{{food.name}}</p>
                                    <p>{{food.score}}</p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </cube-scroll-nav-panel>
        </cube-scroll-nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],//轮播图数组
      sorts: [],//分类项数组
    //   data: seller//商家数据
      seller: []
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    },
    changeHandler(label) {
      console.log('changed to:', label)
    }
  },
  async created(){
      try{
          //获取轮播图
          const items=await this.$http.get('/api/lbt')
          this.items=items.data
          //获取分类数据
          const sorts=await this.$http.get('/api/sortlist')
          this.sorts=sorts.data
          //获取商家信息
          const seller=await this.$http.get('/api/seller')
          this.seller=seller.data
      }catch(err){
          console.log(err)
      }
  }
}
</script>

<style lang="stylus" scoped>
    #shouye
        //搜索框样式
        .navbar {
            background: white;
            display: flex;
            height: 40px;
            color: black;
        }
        .nav-left {
            width 35px;
            height 25px;
            color #999999
            padding 2px
        }
        .nav-search {
            flex: 1;
            background: #f3f3f3;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            padding:0 26px;
            margin 5px 15px 0 0;
        }
        .nav-search input {
            width: 100%;
            height: 100%;
            display: block;
            background: transparent;
            border: none;
            outline: none;
            font-size: 14px;
        }
        //轮播图样式
        a  
            .lbt
                display block
                width 100%
                height 120px
                border-radius 10px
            width 95%
            padding 5px 2.5% 
        // 分类的样式
        .sorrtlu
            display flex
            flex-wrap wrap 
            margin 10px
            background #ffffff
            border-radius 10px
        .sortli
            width 20%
            height 80px
            justify-content center
            img 
                width 35px
                height 35px
                border-radius 50%
                padding  7px 0
            p
                font-size 14px
        background #f1f1f1
        //商家样式
        .cube-scroll-nav-panel.mynav
            font-size 18px
            color #888888
            padding 25px 5px
            font-weight bolder
            text-align left 
            width 100%
            .shangjia
                margin 15px 15px
                font-size 16px
                background #ffffff
                padding 5px
                border-radius 5px
                box-shadow 5px 5px 5px #888888
                width 85%
                display flex
                justify-content flex-start
                img 
                    width 50%
                    height 100px
                    border-radius 10px
                    float left
                p
                    overflow hidden
                    font-weight bold
                    color #444444
                    margin-top 3px
                .text
                    float left 
                    padding-left 7px
</style>