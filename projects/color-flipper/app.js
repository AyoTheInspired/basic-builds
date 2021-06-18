
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let value = 0;
    numValue = random();

    document.body.style.backgroundColor = colors[numValue];

    function random() {
       return Math.floor(Math.random() * colors.length);
    }

    color.textContent = colors[numValue];
});