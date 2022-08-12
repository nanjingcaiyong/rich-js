<Breadcrumb category="Dom" title="disabledScroll"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# disabledScroll

## 简介
```ts
disabledScroll(el?: Element):{ remove: () => void }
```
禁用浏览器上下滚动

## 参数

1、el（Element）:可选。禁止滚动的dom，默认是document.body

## 返回

（{ remove: () => void }）: 返回移除禁用滚动方法的对象

## 例子
```js
const onDisableScroll = disabledScroll();
onDisableScroll.remove()
```