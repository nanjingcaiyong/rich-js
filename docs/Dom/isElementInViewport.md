<Breadcrumb category="Dom" title="isElementInViewport"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# isElementInViewport

## 简介
```ts
isElementInViewport(el?: Element): boolean
```
判断dom是否在浏览器可视区域内

## 参数

1、el（Element）: 需要判断的dom

## 返回

（boolean）: 是否在可视区域内

## 例子
```js
const elm = document.querySelector('#target');
isElementInViewport(elm);
// => false
```