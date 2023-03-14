//함수의 기본형 
// 함수의 선언
const func1 = function() {
    console.log("Hello~");    
};

//함수의 호출. 함수는 반드시 호출이 되어야 내부의 코드가 실행됨
func1();

const func2 = function(x) {
    //함수 선언문의 ()안의 값(x)를 매개변수(Parameter)라고 한다.
    x = x * 2;
    return x;
};


let value2 = 2;
//함수 호출시 함수의 ()안에 넣어주는 값을 인수(Argument)라고 한다.
value2 = func2(value2); 
console.log(value2);


let value3 = 3;
value3 = func2(value3);
console.log(value3);


//함수선언
const greet = function(userName) {
    console.log("Hello " + userName);
};

//함수호출
greet("민경");


const greet2 = function(userName) {
    return "Hello " + userName;
};
console.log(greet2("민경"));


// 곱하기 함수
const multiply = function(x, y) {
    return x * y;
};

const value4 = multiply(4, 5);
console.log(value4);
console.log(multiply(4, 5));


// 플러스 함수
const plus = function(x, y) {
    return x + y;
};

console.log(plus(2, 8));


//3개 이상의 매개변수
const average = function(w, x, y, z) {
    const sum = w + x + y + z;
    return sum / 4;
};

console.log(average(2, 3, 4, 5));


//평균구하기 함수의 배열버전
const average2 = function(x) {
    let sum = 0;
    for (let i=0; i<x.length; i++){
    sum = sum + x[i];
    }
    return sum / x.length;  //평균을 구하기 위해 총합을 배열의 길이로 나눈다.
};

console.log(average2([2,3,4,5]));


//함수선언의 다른 방법
function display() {
    console.log("Display");
};
display();

const display1 = function() {
    console.log("Display");
};
display1();

const greet3 = function(userName) {
    return "Hello " + userName;
};
const userName = prompt("이름을 적어주세요 : ")
console.log(greet3(userName));

