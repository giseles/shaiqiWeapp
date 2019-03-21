
const api_blink_url = 'http://bl.7yue.pro/v1/';

const gateway = 'http://gateway.lierda.com';//测试环境
const challengerUrl = gateway + '/challenger';
const atlantisUrl = gateway + '/atlantis';
const discoveryUrl = gateway + '/discovery';
const imageShowUrl = gateway + "/mars/static";
//test
export function pageperList() {
  return api_blink_url + 'classic/latest'
}
  //登陆注册
export function authLogin() {
  return gateway + '/auth/login'
}
  //我的钱包
export function wallet() {
  return challengerUrl + '/fund/app/v1/wechat/wallet'
}

//获取验证码
export function getcodeByPhoneTest(name) {
  return 'http://10.200.2.109:9011/challenger/lease/getcodeByPhoneTest?name='+ name
}