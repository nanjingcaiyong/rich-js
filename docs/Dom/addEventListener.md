<Breadcrumb category="Dom" title="addEventListener"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>
# addEventListener

## 简介

```ts
addEventListener(target:Element, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): {remove: () => void}
```

添加事件监听器

## 参数

1、target（Element）: 监听器挂载的dom。

2、type（string）: 表示监听事件类型的字符串。

2、listener（EventListenerOrEventListenerObject）: 当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。

3、options（AddEventListenerOptions）：可选。指定有关 listener 属性的可选参数对象，同document.addEventListener的options参数

## 返回

（{remove: () => void}）: 带有移除注册事件的对象

## 例子
```js
// document 注册click方法
const onClickListener = addEventListener(document, 'click', () => {})
// 注销document的click方法
onClickListener.remove()
```