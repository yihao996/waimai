<template>
    <div class="add">
        <div class="inputdiv">
            <div style="margin: 20px;"></div>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="物料编码">
                        <input class="in" placeholder="请输入" ref="id" v-on:keyup="inputId"/>
                    </el-form-item>
                    <el-form-item label="物料名称">
                        <input class="in" placeholder="请输入" ref="name" v-on="inputName"/>
                    </el-form-item>
                    <el-form-item label="物料条码">
                        <input class="in" placeholder="请输入" ref="cd" v-on="inputCd"/>
                    </el-form-item>
                </el-form>
            </div>
        <div class="ok">
            <el-button type="primary" class="okbutton" @click="ok">
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
    },
    methods: {
    ok() {
        console.log(this.$refs.id.value)
        console.log(this.$refs.name.value)
        console.log(this.$refs.cd.value)
    }
  }
  }
</script>

<style lang="stylus" scoped>
    .inputdiv
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
    .in
        padding 10px
        width 200px
        border 1px solid #dddddd
        border-radius 5px
</style>