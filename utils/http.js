class HTTP {
    //http 请求类, 当noRefech为true时，不做未授权重试机制
    request(params) {
        var that = this;
        let storageToken = wx.getStorageSync('token')
        if (!params.method) {
            params.method = 'GET';
        }
        console.log("请求服务端" + params.url + "       参数是" + params.data);
        wx.request({
            url: params.url,
            data: params.data,
            method: params.method,
            header: {
                'content-type': 'application/json',
                'appkey': '98HcsgdJ3mx4Ufcm',
                "Authorization": storageToken
            },
            success: function (res) {
                // 判断以2（2xx)开头的状态码为正确
                // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
                var code = res.statusCode.toString();
                var startChar = code.charAt(0);
                if (startChar == '2') {
                    params.success && params.success(res.data);
                    if (res.data.code && res.data.code != "8001") {
                        wx.showModal({
                            content: res.data.msg,
                            showCancel: false,
                            confirmText: "确定"
                        })
                    }
                } else {
                    params.error && params.error(res);
                }
            },
            fail: function (err) {
                params.fail && params.fail(err)
            }
        });
    }
};
export {HTTP};