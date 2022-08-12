# 起步

## cupshe-js 是什么?

cupshe-js 是一个基于 c端跨境电商 常用工具方法库，作用于浏览器中。

## 特性

- 提供ts声明文件
- 单元测试

## 安装

```bash
npm i cupshe-js
```

## 使用
```js
import { addEventListener } from 'cupshe-js'

const onClickListener = addEventListener(document, 'click', () => {})
// 注销document的click方法
onClickListener.remove()
```

或

```js
import cup from 'cupshe-js'

const onClickListener = cup.addEventListener(document, 'click', () => {})
// 注销document的click方法
onClickListener.remove()
```