<Breadcrumb category="Dom" title="getClientRect"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# getClientRect

## 简介
```ts
getClientRect(el:Element): Record<'x'|'y'|'top'|'left', number>
```
获取dom在当前页面中的位置(不是在浏览器可视窗口的位置)

## 参数

1、el（Element）: dom节点

## 返回

（{x: number, y: number, top: number, left: number}）: dom节点距离浏览器顶部的坐标

## 例子
```js
const elm = document.querySelector('#target');
getClientRect(elm);
// => {x: 633, left: 633, y: 0, top: 0}
```


