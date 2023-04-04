const loginForm = document.querySelector("#loginForm")
const input = document.querySelector("input");
const h1 = document.querySelector("#greeting")

const callback = function(e) {
    e.preventDefault();
    localStorage.setItem("userName", input.value); //키값과 저장되는 값  파라미터 2개가 필요
    const savedName = localStorage.getItem("userName"); //읽을때는 키값
    console.log(savedName);
    h1.innerHTML = "Hello~ " + savedName;
    loginForm.classList.add("hidden");
};

loginForm.addEventListener("submit", callback)
//submit이벤트를 등록하는 대상은 로그인 버튼이 아닌 폼이다.


const savedName = localStorage.getItem("userName");
if(savedName != null) {
    h1.innerHTML = "Hello~ " + savedName;
    loginForm.classList.add("hidden");
}else {
    loginForm.classList.remove("hidden");
}

