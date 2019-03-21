// pages/login/login.js

import { authLogin, getcodeByPhoneTest } from '../../config.js'
import { REQUEST } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginName: '',
    code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('new')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  
  bindKeyInput: function(e) {
    const name = e.target.id;
    this.setData({
      [name]: e.detail.value
    })
  },
  sendCode: function(e) {
    let data = {
      phone: this.data.loginName,
      code: this.data.loginName
    }
    data = JSON.stringify(data);
    REQUEST(getcodeByPhoneTest(this.data.loginName), null, "POST",
      (res) => {
        wx.showToast({
          title: "验证码：1234"
        })
      })

  },
  handleLogin: function(e) {
    let data = {
      phone: this.data.loginName,
      code: this.data.code
    }
    REQUEST(authLogin(), data, "POST",
      (res) => {
        //res就是我们请求接口返回的数据
        console.log(res)
        if (res.code == "8001") {
                let json = res;
        wx.setStorageSync('userBase', JSON.stringify(json.data.userBase))
        wx.setStorageSync('userState', json.data.userState)
        wx.setStorageSync('id', json.data.userBase.id);
        wx.setStorageSync('loginName', json.data.userBase.loginName);
        wx.setStorageSync('token', json.token.token);
        wx.showToast({
          title: "登录成功"
        })
                setTimeout(function() {
          wx.switchTab({
            url: './../home/home'
          })
        }, 2000)
              }

      },(res)=>{
        wx.showToast({
          title: "登录失败请重试"
        })
      })
  },
  getStorage: function() {
    wx.showToast({
      title: "登录成功"
    })
    // let storageData;
    // storageData = wx.getStorageSync('loginName')
    // console.log('loginName ，' + storageData)
    // wx.switchTab({ url: './../home/home' })
  },
})