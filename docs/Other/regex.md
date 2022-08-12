<Breadcrumb category="Other" title="regex"/>

<script setup>
import Breadcrumb from '../.vitepress/components/Breadcrumb.vue'
</script>

# 正则

### PHONE

手机号。根据工信部2019年公布的最新号端

### VERSION

版本号。格式(x.y.z)

### EMAIL

邮箱

### CHINESE

匹配中文及中文标点

### DATE

匹配日期（支持闰年）。2022-06-05

### HEX

匹配16进制色值。#FFFFFF

### BASE64

匹配图片base64值。data:image/jpg;base64,/9j/4QMZRXhpZgAASUkqAAgAAAAL....

### STRENGTH

密码强度：最少6位，至少包含一个大写字母、一个小写字母、一个数字、一个特殊字符

### HTML_NOTE

匹配Html注释标签。\<!-- 注释 --\>

### REPEAT_WORD

匹配连续重复的字符。aabbb


## 例子
```js
import { EMAIL, VERSION, DATE } from 'cupshe-js'

EMAIL.test(yong.cai@kapeixi.com)
// => true
VERSION.test('3.3.2')
// => true
DATE.test('2022-06-13')
// => ture
```