/**
 * @description 判断dom是否在可视区域内
 * @param { HTMLElement } el dom节点
 * @returns { boolean } dom节点是否在可视区域
 */
 export const isElementInViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * @description 页面触底价在
 * @returns { Promise }
 */
 export const scrollLoad = (callback) => {
  return addEventListener(document, 'scroll', () => {
    try {
      const windowH = document.documentElement.clientHeight;// 网页可视区域高度
      const documentH = document.documentElement.offsetHeight;// 页面总高度
      const scrollH = document.documentElement.scrollTop; // 垂直滚动高度
      if(windowH + scrollH >= documentH){
        callback()
      }
    } catch (err) {
      console.log(err)
    }
  })
}

/**
 * @description 监听事件封装
 * @param {*} target 
 * @param {*} eventType 
 * @param {*} cb 
 * @param {*} option 
 * @returns 
 * const clickDocumentHandler = addEventListener( document.documentElement,'click', () => {})
 * clickDocumentHandler.reomve(); // 解绑
 */
export const addEventListener = (target, eventType, cb, option) => {
  const events = [
    'scroll',
    'mousemove',
    'resize',
    'drag',
    'touchmove',
  ]
  if (target.addEventListener) {
    let opt = option
    if (opt === undefined && (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel')) {
      opt = { passive: false }
    }
    target.addEventListener(
      eventType, 
      events.includes(eventType) ? () => { window.requestAnimationFrame(cb)} : cb, 
      opt
    )
  }
  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb)
      }
    },
  }
}

/**
 * @description 获取dom在当前页面中的位置(不是在浏览器可视窗口的位置)
 * @param { HTMLElement } el dom节点
 * @param { {x: number, left: number, y: number, top: number} }
 */
export const getClientRect = (el) => {
  var rect = el.getBoundingClientRect();
  const { scrollTop, scrollLeft } = document.documentElement || {}
  var top = rect.top + scrollTop
  var left = rect.left + scrollLeft
  return {
    x: left,
    left,
    y: top,
    top,
  }
}

