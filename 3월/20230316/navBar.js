const navbar = document.getElementById("navbar");
const content = document.querySelector(".content");
const offset = navbar.offsetTop

//스크롤은 화면 전체에서 일어나느 것이므로 대상 window사용
const sticky = function(e){
    console.log(window.scrollY, offset); //혹시 소수로 나온다면 parseInt(window.scrollY, 10);
   if (window.scrollY >= offset) {
    navbar.classList.add("sticky");
    content.style.marginTop = `${navbar.offsetHeight}px`; //백틱 `      `${}` 변수를 문자로 쓰고 싶을때 사용
    //content.classList.add("topSpace")
   }else {
    navbar.classList.remove("sticky")
    content.style.marginTop = "0px";
    //content.classList.remave("topSpace")
   }
};

window.addEventListener("scroll", sticky);

//