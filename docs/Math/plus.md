<Breadcrumb category="Math" title="plus"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>


# plus：加法

## 简介
```ts
plus(...args:number[]): number
```

## 参数

1、arg1（number）: 相加数

2、arg2（number）: 相加数

3、arg2（number）: 可选。相加数

……
## 返回

（number）: 相加的结果
## 例子
```js
plus(0.1, 0.2);
// => 0.3
plus(1, 2, 3);
// => 6
```