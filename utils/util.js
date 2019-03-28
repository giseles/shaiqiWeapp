const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/*随机布尔值 */
const RandomBooleans = () => {
    return Math.random() > 0.495
}
/**
 * AI核心代码，估值1个亿
 */
const AiMain = text => {
    let str = '请与我开始对话哦~'
    if (text) {
        str = text;
        if (text.includes('是不是')) {
            let yesList = {'true': '是', 'false': '不是'}
            str = text.replace('是不是', yesList[RandomBooleans()])
        }
        if (text.includes('好不好')) {
            let yesList = {'true': '好', 'false': '不好'}
            str = text.replace('好不好', yesList[RandomBooleans()])
        }
        str = str.replace('吗', '');
        str = str.replace('？', '！');
        if (str === text) {
            str = text + '呀！'
        }
    }
    return ['baby', str];
}
module.exports = {
    formatTime: formatTime,
    Trim: Trim,
    AiMain: AiMain
}