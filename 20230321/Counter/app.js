const btn = document.querySelector("button");
const span = document.querySelector("span");

const btnd = document.querySelector(".decrease")
const btni = document.querySelector(".increase")
const btnr = document.querySelector(".reset")



const counter = function(e) {
    if(e.target.className == "btn decrease") {
        return span.innerHTML = parseInt(span.innerText) - 1;
    }else if (e.target.className == "btn increase") {
        return span.innerHTML = parseInt(span.innerText) + 1;
    }else {
        return span.innerHTML = 0;
    }
};

btnd.addEventListener("click", counter);
btni.addEventListener("click", counter);
btnr.addEventListener("click", counter);


const colorChange = function(e) {
    if(parseInt(span.innerText) < 0) {
        span.style.color = "red";
    }else if(parseInt(span.innerText) > 0) {
        span.style.color = "green";
    }else {
        span.style.color = "hsl(209, 61%, 16%)";
    }
};
btnd.addEventListener("click", colorChange);
btni.addEventListener("click", colorChange);
btnr.addEventListener("click", colorChange);


// let count = 0;

// const span = document.querySelector("span");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e){
//         console.log(e);
//         if (e.target.classList.contains("decrease")) {
//             count--;
//         }else if(e.target.classList.contains("increase")) {
//             count++;
//         }else {
//             count = 0;
//         }

//         if (count > 0) {
//             span.style.color = "green";
//         }else if(count < 0) {
//             span.style.color = "red";
//         }else {
//             span.style.color = "#222";
//         }
            // span.innerHTML = count;
//     })
// });
