# 思考

1. 如何让图片自适应
2. 元素居中的方式
3. 如何给伪元素的 content 动态加内容

```
// 先给元素设置自定义属性，用属性接收动态内容
div.dataset.content=item.title
// 使用attr计算属性得到内容
div::after{
  content:attr(data-content)
}
```

4. 如何创建元素
5. 如何动态变更样式
6. NodeList 与 HTMLCollection 的区别
7. parentElement 与 parentNode 的区别
8. 使用 fragment 优化代码
9. 使用事件委托优化代码
