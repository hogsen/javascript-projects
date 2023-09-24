# 思考

1. 如何让图片自适应

```css
/* img的父容器要有确定的高宽 */
img {
	/* height是必须的(因为宽度会自适应),其它可选*/
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* object-fit: contain; */
}
```

2. 元素居中的方式

- flex,grade 布局
- 绝对定位+移动/margin
- margin

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
6. HTMLCollection 与 NodeList 的区别
7. parentElement 与 parentNode 的区别
8. 使用 fragment 优化代码
9. 使用事件委托优化代码
10. 当使用 typescript 时如何收敛类型范围
