<Breadcrumb category="Math" title="div"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# div：除法

## 简介
```ts
div(...args: number[]): number
```

## 参数

1、arg1（number）: 除数

2、arg2（number）: 被除数

3、arg2（number）: 可选。被除数

……

## 返回

（number）: 计算结果
## 例子
```js
div(20, 2)
// => 10
div(75, 5, 3)
// => 3
```