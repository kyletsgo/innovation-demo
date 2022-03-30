  // 網址取值
function getUrlParam(name) {
    // 建構一個含有目標參數的正規表達式對象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")

    r = window.location.search.substr(1).match(reg); // 匹配目標參數
    if (r != null) return decodeURI(r[2]); // 返回參數值
    return null; // 如果不存在，返回null
}