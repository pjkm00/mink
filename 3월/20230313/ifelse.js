let hour = 12;
let greeting = "";

if (hour < 12) {
    greeting = "Good Morning";
}else if (hour < 18){
    greeting = "Good Day"
}else {
    greeting = "Good Evening";
}
console.log(greeting);


/*
== 같으면
===데이터 타입도 동일
!= 다르면
!== 데이터 타입도 고려
>크면
<작으면
>= 크거나 같으면
<= 작거나 같으면 
*/
let login = true;
if (login) {
    //alert("Welcome~ user!!");
} else {
    //alert("Please login..");
}

const str = "1";
const num = 1;
// ===세개를 쓰면 문자열과 숫자를 다르게 판단 (데이터타입) ==두개는 문자와 숫자 상관없이 같으면 같다고 함
if (str === num) {
    console.log("같다");
} else {
    console.log("다르다")
}

//논리 연산자 &&(and), ||(or), !(not)

const x = 6;
const y = 3;
if (x > 5 && y < 5) {
    //alert("Window popup");
}

if (x > 7 || y < 5) {
    //alert("Window popup");
}

const isLoginUser = false;
// 거꾸로 boolean 변수는 대부분 is로 시작
if (!isLoginUser) {
   //alert("Please Log in");
} else {
    //alert("Welcome");
}

//삼항연산자
//if~else문의 한줄 버전
const age = 20;
let votable = age < 18 ? "Too young" : "Old enough"
console.log(age < 18 ? "Too young" : "Old enough")