module.exports = {
  configureWebpack:{
    devServer:{
      //MOCK接口
      before(app){
        //已注册用户
        let users=[
          {username:'zhangsan',password:'111111'},
          {username:'lisi',password:'222222'}
        ]
        //注册接口
        app.get('/api/register',(req,res)=>{
          const {username,password}=req.query
          const userlength=users.filter(v=>v.username==username).length
          if(userlength>0){
            res.json({
              success:false,
              message:'用户名已存在'
            })  
          }else{
            res.json({
              success:true,
              message:'注册成功'
            })
          }
        })
        //登录接口
        let tokenkey = 'loginclass'
        app.get('/api/login',(req,res)=>{
          const {username,password}=req.query
          if(username=='lisi' && password=='222222' || username=='zhangsan' && password=='111111'){
            res.json({
              code:0,
              message:'登录成功',
              token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
            })
          }else{
            res.json({
              code:1,
              message:'账号或密码错误'
            })
          }
        })

        //轮播图接口数据
        app.get('/api/lbt',(req,res)=>{
          res.json({
            data:[
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
              },
              {
                url: 'http://www.didichuxing.com/',
                image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
              }
            ]
          })
        })

        //滚动分类接口数据
        app.get('/api/sortlist',(req,res)=>{
          res.json({
              data:[
                  [
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                      {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                      {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                      {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                      {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                        label:'分类一'
                    },
                  ],
                  [
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                        label:'分类一'
                    },
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                        label:'分类一'
                    },
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                        label:'分类一'
                    },
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                        label:'分类一'
                    },
                    {
                        url: 'https://m.xdclass.net',
                        image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                        label:'分类一'
                    },
                  ]
                ]
                })
              })

        //商家信息接口数据
        app.get('/api/seller',(req,res)=>{
          res.json({
            data:[
              {
                "name": "热门商家",
                "type": -1,
                "foods": [
                  {
                      "score": "评分：4.2",
                      "name": "粥品香坊（回龙观）",
                      "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                       },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                        },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                          "score": "评分：4.2",
                          "name": "粥品香坊（回龙观）",
                          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                           },
                  ]
              },{
                "name": "满减商家",
                "type": -1,
                "foods": [
                  {
                      "score": "评分：4.2",
                      "name": "粥品香坊（回龙观）",
                      "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                       },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                        },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                          "score": "评分：4.2",
                          "name": "粥品香坊（回龙观）",
                          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                           },
                  ]
              },
              {
                "name": "新店优惠",
                "type": -1,
                "foods": [
                  {
                      "score": "评分：4.2",
                      "name": "粥品香坊（回龙观）",
                      "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                       },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                        },
                       {
                        "score": "评分：4.2",
                        "name": "粥品香坊（回龙观）",
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                         },
                         {
                          "score": "评分：4.2",
                          "name": "粥品香坊（回龙观）",
                          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"
                           },
                  ]
              }
            ]
          })
        })

      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
