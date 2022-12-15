/**
 * @description 缓存hook
 * @param { string } key 缓存的key
 * @param { any } val 缓存的值
 * @param { { expires: number, storage: Object } } expires 过期的绝对时间, storage 缓存类型
 * @returns 
 */
export function useStorage (key, val, { expires, storage, interval } = {}) {
  storage = storage || localStorage     // 缓存类型
  expires = expires || 0                // 无失效时间
  let _time = 0
  if (interval) {
    _time = Number(new Date()) + interval
  }
  if (expires) {
    _time = new Date(expires).getTime() || expires.getTime()
  }

  storage.setItem(key, JSON.stringify({expires: _time, data: val}))
  return Object.defineProperty({}, 'value', {
    get () {
      const localData = JSON.parse(storage.getItem(key)) || {}
      if (localData.expires > 0 && localData.expires < Date.now()) {
        storage.removeItem(key)
        return undefined
      }
      return localData.data
    },
    set (val) {
      const localData = JSON.parse(storage.getItem(key)) || {expires: 0}
      storage.setItem(key, JSON.stringify(Object.assign(localData, {data: val})))
    }
  })
}