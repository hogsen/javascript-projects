# 思考

1. 实现点击输入框，输入框展开，点击输入框以外区域，输入框闭合。
   通过判断`event.target`类型

```js
// 不要全部绑定在body上因为event.target不易控制
body.addEventListener("click", (event) => {
	if (event.target == body) {
		search.classList.remove("active")
	}
	if (event.target == btn) {
		search.classList.toggle("active")
		input.focus()
		event.preventDefault()
		// event.stopPropagation()
	}
})
```

```js
body.addEventListener("click", (event) => {
	if (event.target == body) {
		search.classList.remove("active")
	}
})
btn.addEventListener("click", (event) => {
	search.classList.toggle("active")
	input.focus()
	event.preventDefault()
	// event.stopPropagation()
})
```

2. 如何使用 svg
