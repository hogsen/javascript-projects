const loading = document.querySelector(".loading") as HTMLInputElement
const img = document.getElementById("bg")
let num = 0
let intTimer = setInterval(progress, 30)
let timer = setTimeout(() => {
	img.classList.add("active")
}, 0)
function progress() {
	num++
	if (num > 99) {
		loading.classList.add("endLoading")
		clearInterval(intTimer)
		clearTimeout(timer)
	}
	loading.value = `${num}%`
}