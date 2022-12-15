/**
 * @description 获取数字的小数位数
 * @param { number } num 数字 
 * @returns { number } 小数位数
 */
function queryDecimals (num) {
  if (!String(num).includes('.')) return 0
  const decimals = String(num).split('.')[1]
  return decimals.length + 1
}

/**
 * @description 加法
 * @param {number} n1 
 * @param {number} n2
 * @returns number
 */
export function plus (n1, n2) {
  const d1 = queryDecimals(n1)
  const d2 = queryDecimals(n2)
  const times = Math.pow(10, Math.max(d1, d2))
  return (n1 * times + n2 * times) / times
}

/**
 * @description 减法
 * @param {number} n1 
 * @param {number} n2
 * @returns number
 */
export const minus = (n1, n2) => {
  const d1 = queryDecimals(n1)
  const d2 = queryDecimals(n2)
  const times = Math.pow(10, Math.max(d1, d2))
  return (n1 * times - n2 * times) / times
};

/**
 * @description 乘法
 * @param {number} n1 
 * @param {number} n2
 * @returns number
 */
export const times = (n1, n2) => {
  const d1 = queryDecimals(n1)
  const d2 = queryDecimals(n2)
  const times = Math.pow(10, Math.max(d1, d2))
  return (n1 * times * n2).toFixed(0) / times
}

/**
 * @description 除法
 * @param {number} n1 
 * @param {number} n2
 * @returns number
 */
export function div (n1, n2) {
  const d1 = queryDecimals(n1)
  const d2 = queryDecimals(n2)
  const times = Math.pow(10, Math.max(d1, d2))
  return (n1 * times / n2).toFixed(0) / times
}

/**
 * @description 金额
 * @param { number } val 金额
 * @param { object } lang 语言 currency 货币code unit 替换默认的单位 digit 小数点后几位
 */
export function useCurrency (val, {lang, currency, unit, digit=2} = {}) {
  val = Number(val)
  if (val !== val || lang === undefined) return
  // 不传currency不带货币符号
  const currencyParams = currency ? {style: 'currency', currency} : {}
  let res = val.toLocaleString(lang, Object.assign({}, {minimumFractionDigits: digit}, currencyParams));
  const arr = res.split(/\s/)
  if (arr.length === 1) {
    return res
  }
  return arr.reduce((str, key, index) => {
    str += /[\d,.\s]+/.test(key) ? key : (unit || key)
    return index === 0 ? str += ' ' : str
  }, '')
}