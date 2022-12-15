import { MOBILE } from './regex.js'

export function getTerminal () {
  const u = navigator.userAgent
  return {
    trident: u.includes('Trident'),                       // IE内核
    presto: u.includes('Presto'),                         // opera内核
    webKit: u.includes('AppleWebKit'),                    // 苹果、谷歌内核
    gecko: u.includes('Gecko') && !u.includes('KHTML'),   // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),           // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),      // ios终端
    android: u.includes('Android') || u.includes('Adr'),  // android终端
    iPhone: u.includes('iPhone'),                         // 是否为iPhone或者QQHD浏览器
    iPad: u.includes('iPad'),                             // 是否iPad
    webApp: !u.includes('Safari'),                        // 是否web应该程序，没有头部与底部
    weixin: u.includes('MicroMessenger'),                 // 是否微信
    qq: u.match(/\sQQ/i) === ' qq',                       // 是否QQ
  }
}

export const isMobile = MOBILE.exec(navigator.userAgent)

/**
 * @description 是否支持webp
 * @param { lossy | lossless | alpha | animation } feature 
 * @param { Function } callback 回调
 */
export function canWebp (feature, callback) {
  var kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",  // 有损压缩图片
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", // 无损压缩图片
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",// 透明度图片
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" // GIF
  };
  var img = new Image();
  img.onload = function () {
      var result = (img.width > 0) && (img.height > 0);
      callback(feature, result);
  };
  img.onerror = function () {
      callback(feature, false);
  };
  img.src = "data:image/webp;base64," + kTestImages[feature];
}