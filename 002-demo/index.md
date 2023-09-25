# 思考

1. 文本垂直居中
2. 声明和使用 css 变量
3. 在 js 中使用 unicode 图标

```txt
将&#x转为\u,去掉分号
如&#x263a; => \u263a,js中可用
```

4. 获得元素高宽的方法
   |API|计算方式 |
   |--|--|
   |`clientWidth`/`clientHeight` | 元素内容+`padding` 不含`border`和滚动条 |
   |`clientTop`/`clientLeft`|`border-top-width`/`border-left-width`
   |`offsetParent`|返回第一个有定位的父元素|
   |`offsetWidth`/`offsetHeight`|元素内容+`padding`+`border`+滚动条|
   |`offsetTop`/`offsetLeft`|当前元素到`offsetParent`边框的距离|
   |`scrollWidth`/`scrollHeight`|元素内部的高宽（包括溢出部分）|
   |`scrollTop`/`scrollLeft`|表示滚动条滚动的距离|
   |`getBoundingClientRect()`|返回元素的大小(不含`border`)以及相对视口的位置|

检查滚动条是否滚动到底
`scrollTop + clientHeight >= scrollHeight`
`Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1`
