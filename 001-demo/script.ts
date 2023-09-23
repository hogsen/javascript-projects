const state = [
	{
		id: 1,
		title: "card one",
		url: "https://images.unsplash.com/photo-1610212570473-6015f631ae96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
	},
	{
		id: 1,
		title: "card two",
		url: "https://images.unsplash.com/photo-1606838830438-5f380a664a4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
	},
	{
		id: 1,
		title: "card three",
		url: "https://images.unsplash.com/photo-1603048675767-6e79ff5b8fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
	},
	{
		id: 1,
		title: "card four",
		url: "https://images.unsplash.com/photo-1595433502559-d8f05e6a1041?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
	}
]
const fragment = document.createDocumentFragment()
const container = document.querySelector(".container") as HTMLDivElement
state.forEach((item, index) => {
	const div = document.createElement("div")
  div.dataset.content=item.title
	div.classList.add("panel")
	if (index === 1) {
		div.classList.add("active")
	}
	const img = document.createElement("img")
	img.src = item.url
	img.alt = item.title
	div.append(img)
	fragment.append(div)
})
// 使用fragment,减少dom操作数
container.append(fragment)
// 使用事件委托给给父容器绑定事件，减少事件的数量
container.addEventListener("click", (event:MouseEvent) => {
	// 首先移除所有的active
	// 拿到container的子元素
  // HTMLCollection没有forEach方法，NodeList有forEach
	Array.from(container.children).forEach((item) => {
		item.classList.remove("active")
	});
	// 给目标添加active
	// event.target拿到img
	// event.target.parentElement拿到目标元素的父元素
  let parent=(event.target as HTMLElement).parentElement
  if(parent){
    parent.classList.add("active")
  }
})
