/**
 * @description 判断dom是否在可视区域内
 * @param { HTMLElement } el dom节点
 * @returns { boolean } dom节点是否在可视区域
 */
export function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * @description 滚动到指定dom区域
 * @param {*} target 
 * @param {*} callback 
 */
export function  scrollIntoView (target, callback) {
  let scrollCount = 0; // 滚动触发事件次数
  let jumpCount = 0; // 心跳次数
  let timer2 = null;   // 无滚动定时器
  function startHeatJump () {
    // 心跳监测，如果50ms不再滚动后触发回调
    let timer1 = setInterval(() => {
      if (scrollCount === jumpCount) {
        clearInterval(timer1)
        scrollCount = 0
        callback()
        document.removeEventListener('scroll', listener)
      }
      jumpCount = scrollCount > jumpCount ? scrollCount : jumpCount
    }, 50); // 定时器时间不能小于scroll触发时间
  }
  function listener () {
    if (scrollCount === 0) {
      clearTimeout(timer2); // 清除 无滚动定时器
      startHeatJump();
    }
    ++scrollCount
  }
  timer2 = setTimeout(callback, 50); // 当前位置在滚动的指定区域，不会触发scroll事件，这里做个兼容
  document.addEventListener('scroll', listener);
  target.scrollIntoView({behavior: 'smooth', block: "center"});
}


/**
 * @description 页面触底记载
 * @returns { Promise }
 */
 export function scrollLoad (callback) {
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
export function addEventListener (target, eventType, cb, option) {
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
export function getClientRect (el) {
  const rect = el.getBoundingClientRect();
  const { scrollTop, scrollLeft } = document.documentElement || {}
  const top = rect.top + scrollTop
  const left = rect.left + scrollLeft
  return {
    x: left,
    left,
    y: top,
    top,
  }
}

