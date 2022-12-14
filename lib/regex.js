export const PHONE = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/

// 匹配版本号 eg: 0.0.1
export const VERSION = /^\d+(?:\.\d+){2}$/

// 匹配邮箱 eg: xxx@xx.xx
export const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 匹配html注释
export const HTML_NOTE = /<!--[\s\S]*?-->/g

// 匹配html标签
export const HTML_LABEL = /<\/?.+?>/gi

// 匹配连续重复的字符
export const REPEAT_WORD = /(.)\1+/g

// 匹配中文及中文标点
export const CHINESE = /[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/

// 匹配日期（支持闰年），2022-06-05
export const DATE = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/

export const HEX = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

export const BASE64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i

// 密码强度：最少6位，至少包含一个大写字母、一个小写字母、一个数字、一个特殊字符
export const STRENGTH = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/

export const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/


export const HOST = /^https?:\/\/(.+\.){2}[a-zA-Z]+/
export const check = (rule) => {
  const rules = {
    PHONE,
    VERSION,
    EMAIL,
    HTML_NOTE,
    REPEAT_WORD,
    CHINESE,
    DATE,
    HEX,
    BASE64,
    STRENGTH,
    MOBILE
  }
  return function (str) {
    const key = rule.toUpperCase()
    return key in rules ? rules[key].test(str) : false
  }
}