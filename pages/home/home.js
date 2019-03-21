// pages/home/home.js
import {  pageperList} from '../../config.js'
import { REQUEST } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startBtnMsg: "扫码骑车",
    linkMsg: "点击这里注册",
    content:"点击这里注册",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {




  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


    // this.mapCtx = wx.createMapContext('allmap');
    // this.mapCtx.moveToLocation();
    // REQUEST(pageperList(), null, "GET", 
    //    (res)=> {
    //     //res就是我们请求接口返回的数据
    //     console.log(res);
    //     this.setData({ content: res.content })
    //   })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  handleLocal:function(){
    this.mapCtx.moveToLocation();
  },
  clickCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})
