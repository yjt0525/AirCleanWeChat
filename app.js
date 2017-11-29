//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    ClassifyList: [
      {
        "ClassName": "车载净化器",
        "ProductsList": [
          {
            "ProductId": 0,
            "ProductName": "车载空气净化器：K3",
            "ProductSalePrice": "￥129",
            "ProductShopPrice": "￥250",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/k3/k3.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/k3/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/k3/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/k3/3.jpg"
            ]
          },
          {
            "ProductId": 1,
            "ProductName": "车载空气净化器：N58",
            "ProductSalePrice": "￥799",
            "ProductShopPrice": "￥900",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/n58/n58.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/n58/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n58/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n58/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n58/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n58/5.jpg"
            ]
          },
          {
            "ProductId": 2,
            "ProductName": "车载空气净化器：V2",
            "ProductSalePrice": "￥499",
            "ProductShopPrice": "￥600",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/v2/v2.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/v2/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/v2/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/v2/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/v2/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/v2/5.jpg"
            ]
          }
        ]
      },
      {
        "ClassName": "防雾霾口罩",
        "ProductsList": [
          {
            "ProductId": 3,
            "ProductName": "防雾霾口罩：3M9001",
            "ProductSalePrice": "￥8.5",
            "ProductShopPrice": "￥10.5",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/3m9001/3M9001.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/9.jpg"
            ]
          },
          {
            "ProductId": 4,
            "ProductName": "防雾霾口罩：3M9001V",
            "ProductSalePrice": "￥10.5",
            "ProductShopPrice": "￥12.5",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3M9001V.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/3m9001v/9.jpg"
            ]
          }
        ]
      },
      {
        "ClassName": "净水器",
        "ProductsList": [
          {
            "ProductId": 5,
            "ProductName": "净水器：铭族U5X2",
            "ProductSalePrice": "￥1680",
            "ProductShopPrice": "￥1900",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/u5x2/u5x2.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/u5x2/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/u5x2/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/u5x2/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/u5x2/4.jpg"
            ]
          }
        ]
      },
      {
        "ClassName": "空气净化器",
        "ProductsList": [
          {
            "ProductId": 6,
            "ProductName": "空气净化器：N300",
            "ProductSalePrice": "￥2399",
            "ProductShopPrice": "￥2500",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/n300/n300.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/n300/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/9.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/10.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/n300/11.jpg"
            ]
          },
          {
            "ProductId": 7,
            "ProductName": "空气净化器：T8",
            "ProductSalePrice": "￥4299",
            "ProductShopPrice": "￥5000",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t8/t8.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/t8/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/9.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t8/10.jpg"
            ]
          },
          {
            "ProductId": 8,
            "ProductName": "空气净化器：T9",
            "ProductSalePrice": "￥6999",
            "ProductShopPrice": "￥8000",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t9/t9.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/t9/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/9.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/10.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t9/11.jpg"
            ]
          },
          {
            "ProductId": 9,
            "ProductName": "空气净化器：T12",
            "ProductSalePrice": "￥1999",
            "ProductShopPrice": "￥2500",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t12/t12.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/t12/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t12/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t12/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t12/4.jpg"
            ]
          },
          {
            "ProductId": 10,
            "ProductName": "空气净化器：T45",
            "ProductSalePrice": "￥5999",
            "ProductShopPrice": "￥6500",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t45/t45.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/t45/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t45/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t45/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/t45/4.jpg"
            ]
          },
          {
            "ProductId": 11,
            "ProductName": "空气净化器：母婴",
            "ProductSalePrice": "￥1699",
            "ProductShopPrice": "￥2200",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/muyin/muyin.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/muyin/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/8.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/9.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/10.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/11.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/12.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/muyin/13.jpg"
            ]
          },
          {
            "ProductId": 12,
            "ProductName": "空气净化器：幸福森林",
            "ProductSalePrice": "￥1180",
            "ProductShopPrice": "￥1500",
            "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/senlin/senlin.jpg",
            "ProductDetail": [
              "http://139.196.27.162:8085/ProductDetailImg/senlin/1.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/2.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/3.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/4.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/5.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/6.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/7.jpg",
              "http://139.196.27.162:8085/ProductDetailImg/senlin/8.jpg"
            ]
          }
        ]
      }
    ],
    AllList: [
      {
        "ProductId": 0,
        "ProductName": "车载空气净化器：K3",
        "ProductSalePrice": "￥129",
        "ProductShopPrice": "￥250",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/k3/k3.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/k3/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/k3/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/k3/3.jpg"
        ]
      },
      {
        "ProductId": 1,
        "ProductName": "车载空气净化器：N58",
        "ProductSalePrice": "￥799",
        "ProductShopPrice": "￥900",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/n58/n58.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/n58/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n58/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n58/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n58/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n58/5.jpg"
        ]
      },
      {
        "ProductId": 2,
        "ProductName": "车载空气净化器：V2",
        "ProductSalePrice": "￥499",
        "ProductShopPrice": "￥600",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/v2/v2.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/v2/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/v2/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/v2/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/v2/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/v2/5.jpg"
        ]
      },
      {
        "ProductId": 3,
        "ProductName": "防雾霾口罩：3M9001",
        "ProductSalePrice": "￥8.5",
        "ProductShopPrice": "￥10.5",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/3m9001/3M9001.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/9.jpg"
        ]
      },
      {
        "ProductId": 4,
        "ProductName": "防雾霾口罩：3M9001V",
        "ProductSalePrice": "￥10.5",
        "ProductShopPrice": "￥12.5",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3M9001V.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/3m9001v/9.jpg"
        ]
      },
      {
        "ProductId": 5,
        "ProductName": "净水器：铭族U5X2",
        "ProductSalePrice": "￥1680",
        "ProductShopPrice": "￥1900",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/u5x2/u5x2.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/u5x2/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/u5x2/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/u5x2/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/u5x2/4.jpg"
        ]
      },
      {
        "ProductId": 6,
        "ProductName": "空气净化器：N300",
        "ProductSalePrice": "￥2399",
        "ProductShopPrice": "￥2500",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/n300/n300.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/n300/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/10.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/n300/11.jpg"
        ]
      },
      {
        "ProductId": 7,
        "ProductName": "空气净化器：T8",
        "ProductSalePrice": "￥4299",
        "ProductShopPrice": "￥5000",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t8/t8.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t8/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/10.jpg"
        ]
      },
      {
        "ProductId": 8,
        "ProductName": "空气净化器：T9",
        "ProductSalePrice": "￥6999",
        "ProductShopPrice": "￥8000",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t9/t9.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t9/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/10.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/11.jpg"
        ]
      },
      {
        "ProductId": 9,
        "ProductName": "空气净化器：T12",
        "ProductSalePrice": "￥1999",
        "ProductShopPrice": "￥2500",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t12/t12.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t12/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t12/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t12/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t12/4.jpg"
        ]
      },
      {
        "ProductId": 10,
        "ProductName": "空气净化器：T45",
        "ProductSalePrice": "￥5999",
        "ProductShopPrice": "￥6500",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t45/t45.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t45/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/4.jpg"
        ]
      },
      {
        "ProductId": 11,
        "ProductName": "空气净化器：母婴",
        "ProductSalePrice": "￥1699",
        "ProductShopPrice": "￥2200",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/muyin/muyin.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/muyin/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/10.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/11.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/12.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/13.jpg"
        ]
      },
      {
        "ProductId": 12,
        "ProductName": "空气净化器：幸福森林",
        "ProductSalePrice": "￥1180",
        "ProductShopPrice": "￥1500",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/senlin/senlin.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/senlin/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/senlin/8.jpg"
        ]
      }
    ],
    IndexList: [
      {
        "ProductId": 7,
        "ProductName": "空气净化器：T8",
        "ProductSalePrice": "￥4299",
        "ProductShopPrice": "￥5000",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t8/t8.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t8/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t8/10.jpg"
        ]
      },
      {
        "ProductId": 8,
        "ProductName": "空气净化器：T9",
        "ProductSalePrice": "￥6999",
        "ProductShopPrice": "￥8000",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t9/t9.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t9/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/10.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t9/11.jpg"
        ]
      },
      {
        "ProductId": 10,
        "ProductName": "空气净化器：T45",
        "ProductSalePrice": "￥5999",
        "ProductShopPrice": "￥6500",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/t45/t45.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/t45/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/t45/4.jpg"
        ]
      },
      {
        "ProductId": 11,
        "ProductName": "空气净化器：母婴",
        "ProductSalePrice": "￥1699",
        "ProductShopPrice": "￥2200",
        "ProductScaleImg": "http://139.196.27.162:8085/ProductDetailImg/muyin/muyin.jpg",
        "ProductDetail": [
          "http://139.196.27.162:8085/ProductDetailImg/muyin/1.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/2.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/3.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/4.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/5.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/6.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/7.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/8.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/9.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/10.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/11.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/12.jpg",
          "http://139.196.27.162:8085/ProductDetailImg/muyin/13.jpg"
        ]
      }
    ]
  }
})