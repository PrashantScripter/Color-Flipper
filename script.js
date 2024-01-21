const buttom = document.querySelector("#clickme");
const colorName = document.querySelector(".colorValue");
const body = document.querySelector("body");

buttom.addEventListener("click", () => {
    const value = body.style.backgroundColor = `rgb(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)})`;
    colorName.innerText = value;
});



