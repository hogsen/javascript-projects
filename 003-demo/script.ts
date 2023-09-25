const search = document.querySelector(".search") as HTMLDivElement
const btn = document.querySelector(".btn") as HTMLButtonElement
const input = document.querySelector(".input") as HTMLInputElement
const body=document.body

body.addEventListener('click',(event)=>{
  if(event.target==body){
    search.classList.remove('active')
  }
})
btn.addEventListener("click", (event) => {
  search.classList.toggle("active")
  input.focus();
  event.preventDefault()
  // event.stopPropagation()
})

