const fruits = ["apple", "orange", "banana", "pear", "pineapple"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

//전통적인 For loop
// for (let i=0; i<fruits.length; i++) {
//    console.log(fruits[i]);
// }


//ForEach
fruits.forEach(function(fruit, 인덱스숫자){
    console.log(fruit, 인덱스숫자);
});

fruits.push("포도");
console.dir(fruits);


//함수의 선언
const logging = function (log) {
    console.log(log);
};
//함수의 호출
const str = "함수의 호출";
logging(str);