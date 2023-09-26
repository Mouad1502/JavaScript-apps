const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach(btn => {
   btn.addEventListener("click", () =>{
    color = btn.value;
    changeBackground(color);
   });
});

const changeBackground = (color) => {
    body.className = "";
    body.classList.add(color);
};
