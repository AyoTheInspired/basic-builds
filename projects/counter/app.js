let chump = 0;
const countValue = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
const styles = e.currentTarget.classList;
if (styles.contains("decrease")) {
    chump--;
} else if (styles.contains("increase")) {
    chump++;
} else {
    chump = 0;
}

    if (chump => 1) {
       countValue.style.color = "green";
    }
    if (chump < 0) {
        countValue.style.color = "red";
    }
    if (chump === 0) {
       countValue.style.color = "#222";
    }

countValue.textContent = chump;
    });
});