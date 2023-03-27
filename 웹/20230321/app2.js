let count = 0;

const span = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.classList.contains("decrease")) {
      count--;
    } else if (e.target.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      span.style.color = "green";
    } else if (count < 0) {
      span.style.color = "red";
    } else {
      span.style.color = "#222";
    }
    span.innerHTML = count;
  });
});
