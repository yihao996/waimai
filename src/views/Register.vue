<template>
    <div class="login">
        <div class="in">
            <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
       </cube-form>
            <a href="./login">
                <div class="toshouye">登录</div>
            </a>
        </div>
        <div class="box3"></div>
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    //用户名配置
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{
                            //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15,
                        },
                        trigger: 'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'用户名不能少于3个字符',
                            max:'用户名不能大于15个字符'
                        }
                    },
                    //密码配置
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true,
                        },
                        trigger:'blur',
                    },
                    {
                        type:'submit',
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault()
            this.$http.get('/api/register',{params:this.model}).then(res=>{
                console.log(res.success)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .login
        height 100%
        background #D2FF1F
        padding 40% 5% 2% 5%
        margin 0
        .in
            height 200px
            padding 10px 0
            border-radius 10px
            background white
            position fixed
            z-index 200
            box-shadow 0 0 10px #888888
        //背景圆
        .box1
            height 150px
            width 150px
            border-radius 75px
            background #FFC71D
            margin-top -100px
            margin-left 50%
            box-shadow 0 0 10px #FFC71D
        .box2
            height 120px
            width 120px
            border-radius 60px
            background #A4F716
            margin-top -110px
            margin-left 70px
            box-shadow 0 0 10px #A4F716
        .box3
            height 700px
            width 300px
            border-radius 350px 0
            background #FFC71D
            margin-top -250px
            margin-left -20px
            box-shadow 0 0 10px #FFC71D
    .toshouye
      color #eeeeee
      background #FF941F
      height 40px
      width 30%
      font-size 18px
      display flex
      float left
      margin 5% 35% 0 35%
      border-radius 20px
      justify-content center
      align-items center
      box-shadow 0 0 10px #888888
</style>


