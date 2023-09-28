# 思考

1. 如何处理浏览器样式不兼容问题
   如：

- edge 中文件协议下的 html 与 http 协议下的 html 显示不一致
- http 协议下的 html 在 edge 和 chrome 中显示效果不一致
- edge 显示异常，显示效果又大又丑
  解决：
  `edge`每个网站有默认的缩放级别，将它删掉或者`ctrl+0`恢复缩放

2. css 选择器的效率
   ID > 类 > 标签 > 相邻 > 子代 > 后代 > 通配符 > 属性 > 伪类
   css 选择器的读取顺序：**从右到左**,逐级匹配
   尽量使用效率高的选择器比如类和 id
3. 常见的继承属性，非继承属性
   常见的继承属性

- `font`
- `text-align` `text-ident` `line-height` `letter-spacing`
- `color`
- `list-style`
- `visibility`
- `cursor`
  非继承属性
- `opacity`
- `background`
