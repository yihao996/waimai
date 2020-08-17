<template>
  <div class="back">
    <div class="search">
      <div class="nav-left">
        <i class="cubeic-search"></i>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="搜索物料">
      </div>
    </div>
    <div class="list">
      <el-card v-for="i in items" :key="i.id" class="box-card">
        <div class="cardtop">
          <div class="name">{{i.name}}</div>
          <el-button @click="handleClick(scope.row)" type="text" size="small" class="bj">
            <a href="./bianji">
            <div>编辑</div>
          </a>
          </el-button>
        </div>
        <div class="data">
          <div class="text item">
            {{'物料编码：'+i.id}}
          </div>
          <div class="text item">
            {{'物料条码：'+i.cardid}}
          </div>
        </div>
      </el-card>
    </div>
    <div style="margin: 25px;color: #eeeeee">1234</div>
    <div class="add">
      <el-button type="primary" class="addbutton">
        <a href="./add">
          <div class="addtext">添加</div>
        </a>
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        items: [{name:'商品1',id:'001',cardid:'100011'},
        {name:'商品2',id:'001',cardid:'100011'},
        {name:'商品3',id:'001',cardid:'100011'},
        {name:'商品3', id:'001',cardid:'100011'},
        {name:'商品3',id:'001',cardid:'100011'},
        {name:'商品3',id:'001',cardid:'100011'},
        {name:'商品3',id:'001',cardid:'100011'},
        {name:'商品3',id:'001',cardid:'100011'}
        ]//测试数据
      }
  }
}
</script>

<style lang="stylus" scoped>
  .back
    background #eeeeee
  .search
    position fixed
    top 0
    background #ffffff
    padding 5px 0
    width 100%
    z-index 100
    display: flex;
    height: 40px;
    box-shadow 0px 0px 10px #dddddd
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
            font-size: 16px;
        }

  .name
    font-size 18px
    float left

  .text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
    display flex
    float left
  }

  .box-card {
    margin-top 10px
    margin-left 5%
    height 140px
    border-radius 10px
    float left 
    width 90%
  }

  .data
    margin-top 10%
    flex-direction column
    display flex

  .bj {
    float right
    margin-right 20px
    margin-top -5px
  }

  .add
    position fixed
    bottom 0
    background #ffffff
    padding 5px 0
    width 100%
    height 50px
    box-shadow 0px 0px 10px #dddddd
  .addbutton
    margin 0
    width 90%
  .addtext
    color #ffffff
    font-size 16px
  .list 
    padding-top 45px
</style>