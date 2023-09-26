const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const body = document.body;
body.addEventListener('click', (event) => {
    if (event.target == body) {
        search.classList.remove('active');
    }
});
btn.addEventListener("click", (event) => {
    search.classList.toggle("active");
    input.focus();
    event.preventDefault();
    // event.stopPropagation()
});
