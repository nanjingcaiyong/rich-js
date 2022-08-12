<Breadcrumb category="Other" title="queryString"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# queryString

## 简介
```ts
queryString(url: string): Object
```
将url上的query参数转换为对象

## 参数

1、url（string）: 链接

## 返回

（object）: 计算结果

## 例子
```js
// https://www.cupshe.com/collections/cover-up-1?icn=coverups&ici=navbar08
queryString(location.href)
// => {icn: 'coverups', ici: 'navbar08'}
```