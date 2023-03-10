// 변수공부
// 변수를 선언하는 3가지 방법
// var 지금은 쓰지 않지만 옛날 코드에는 써있을 수 있음 이중선언이 가능
var value = 1;
value = 2;
value = 10;
value = "Smith";
value = 5;
value = value + 1;
var value = 1000;
console.log(value);

// let 한번 쓰면 이미 선언하였기때문에 이중선언을 못하게 오류가 뜸
let counter = 1;
// let counter = 2; 이중선언 에러
counter = counter + 1;
console.log(counter)

// const 
const url = "www.naver.com";
// const url = 2 이중선언 에러
// url = 2; 상수는 값을 바꿀 수 없다
console.log(url);

// 값이 바뀔만한 것은 let으로 바뀌지 않는 것은 const으로 한다.