import { AiMain, Trim}  from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    talk:'',
    talkList:[],
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
 /**
 * gisele 2018-12-19 
 */
  bindKeyInput: function (e) {
    const name = e.target.id;
    this.setData({
      [name]: Trim(e.detail.value)
    })
  },
  handleTalk:function() {
    let talkList = this.data.talkList;
    talkList.push(['user', this.data.talk], AiMain(this.data.talk));
    this.setData({
      talkList
    },()=>{
      console.log(this.data.talkList)
    })
  },
})
