// map.js
Page({
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
 
})