export function once (fn) {
  let count = -1
  return function () {
    if (++count <= 0) {
      return fn.apply(this, arguments)
    }
    return undefined
  }
}