//여러 종류의 변수 선언법
const num = 1; //숫자
const str = "민경"; //문자
const bool = true; //참 거짓 불린타입
const 숫자배열 = [1, 2, 3, 4]; //배열
const 문자배열 = ["a", "b", "c"];
const 함수 = function() {};
const 객체 = {user : "민경", age : 23};
const html요소1 = document.querySelector("#demo");
const html요소2 = document.querySelector(".style");
const html요소3 = document.querySelector("div");


let num2 = num * 10; //10
let str2 = str + "귀요미"; 
let bool2 = !bool; //!는 반대를 의미
let 숫자배열2 = 숫자배열.slice(3); //[4]
let 문자배열2 = 문자배열.splice(1, 2); // 문자배열 = ["a"] 문자배열2 = ["b", "c"]
html요소1.innerHTML = "DEMO";
html요소2.innerHTML = "STYLE";
html요소3.innerHTML = "Text";

const num함수 = function(x) {
    return x * 10;
};
let num3 = num함수(num); // = num2 = 10

const str함수 = function(x) {
    return x + "귀요미";
};
let str3 = str함수(str);

const bool함수 = function(x) {
    return !x;
};
let bool3 = bool함수(bool);

const 숫자배열함수 = function(x, i) {
    return x.slice(i);
};
let 숫자배열3 = 숫자배열함수(숫자배열, 3);

const 문자배열함수 = function(x, y, z) {
    return x.splice(y, z);
};
let 문자배열3 = 문자배열함수(문자배열, 1, 2);

const divList = document.querySelectorAll("div");
const text배열 = ["Text", "DEMO", "STYLE"];

const html함수 = function(divList, text배열) {
    for(let i = 0; i<divList.length; i++){
        divList[i].innerHTML = text배열[i];
        
        // if (i === 0) {
        //     divList[i].innerHTML = "Text";
        // } else if (i === 1) {
        //     divList[i].innerHTML = "DEMO";
        // } else if (i === 2) {
        //     divList[i].innerHTML = "STYLE";
        // }
    }
};

html함수(divList, text배열);

