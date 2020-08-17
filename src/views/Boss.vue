<template>
  <div class="boss">
    <div  class="list">
      <el-table
        :data="goods"
        height="550px"
        border>
        <el-table-column
          prop="name"
          label="菜名"
          width="100px">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="70px">
        </el-table-column>
        <el-table-column
          prop="sellCount"
          label="销量"
          width="70px">
        </el-table-column>
        <el-table-column
          prop="image"
          label="图片"
          width="400px">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="90">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  
</template>

<script>
import goodsData from './goods-list.json'
// 作为示例只取一组热销榜数据
const good = goodsData.goods[0].foods

export default {
    data() {
      return {
        goods: good,
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .boss
    width 100%
    padding 5% 0 6.5% 0
    background #FFFAE5
  .list
    background #555555
    padding 5px
    border-radius 5px 
    margin 0 5%
</style>