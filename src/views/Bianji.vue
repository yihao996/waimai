<template>
    <div class="add">
        <div class="input">
            <!-- <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group> -->
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="物料编码">
                <div>单号</div>
            </el-form-item>
            <el-form-item label="物料名称">
                <el-input placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="物料条码">
                <el-input placeholder="请输入"></el-input>
            </el-form-item>
        </el-form>
        </div>
        
        <div class="ok">
            <el-button type="primary" class="okbutton">
                <a href="./back">
                <div class="oktext">确定</div>
                </a>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>

<style lang="stylus" scoped>
    .input
        padding 10px
        background #ffffff
    .add
        background #eeeeee
    .ok
        position fixed
        bottom 0
        background #ffffff
        padding 5px 0
        width 100%
        height 50px
        box-shadow 0px 0px 10px #dddddd
    .okbutton
        margin 0
        width 90%
    .oktext
        color #ffffff
        font-size 16px
</style>