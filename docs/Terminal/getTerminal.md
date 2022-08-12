<Breadcrumb category="Terminal" title="getTerminal"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# getTerminal

## 简介
```ts
getTerminal(): Agent
```

## 参数

无

## 返回

（Agent）: 所有 agent 状态

## 例子
```js
getTerminal()
// => { trident: false, presto: false, webKit: true, gecko: false, mobile: false, ios: false, android: false, iPhone: false, iPad: false, webApp: false,weixin: fasle, qq: false }
```