export const Storage = {
  prefix: "CUPSHE_",
  getItem (key) {
    let _key = Storage.prefix + key
    const value = JSON.parse(localStorage.getItem(_key))
    if (value === null || value.expire < Date.now()) {
      localStorage.removeItem(_key)
      return null
    }
    return value.data
  },
  setItem (key, value, time) {
    let _key = Storage.prefix + key
    // 设置失效时间，未设置默认为一年
    let _time = time 
      ? new Date(time).getTime() || time.getTime()
      : new Date().getTime() + 1000 * 60 * 60 * 24 * 365
    localStorage.setItem(_key, JSON.stringify({ expire: _time, data: value }))
  }
}
