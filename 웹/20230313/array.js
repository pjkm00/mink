// Array 어레이, 배열 문자열의 배열
// 변수 이름을 복수로 씀, 대괄호를 씀
const arr = [1, 2, "Smith", true];
const cars = [
    "jeep",
    "volvo",
    "bmw"
];
console.log(cars);
console.log(cars.length);
console.log(cars[0]);

//Array methods 배열의 메쏘드
//push 맨 뒤에 넣어짐
cars.push("Hyundai");
// cars[3] = "Hyundai"; 위에것과 같음
console.log(cars);

//pop 마지막 아이템 삭제
cars.pop();
console.log(cars);

//slice 잘라내기, 원본은 그대로 둠
const a = cars.slice(1);
console.log(a);
console.log(cars);

const b = cars.slice(0, 2);
console.log(b);
console.log(cars);

const c = cars.slice(0); //전부다
console.log(c);
console.log(cars);

//배열의 복사
// const copy = cars;
const copy = cars.slice(0);
copy[0] = "Hyundai";
console.log(copy);
//문제점 원본도 바뀜   값복사와 참조복사의 차이로 발생함
//값복사 복사한것이기에 원본은 그대로
//slice(0)을 이용하여 강제로 값복사를 실행시키면 문제를 해결할 수 있다.
console.log(cars);


//splice 해당하는 숫자를 원본에서 삭제할 수 있음
const spliceValue = cars.splice(1, 2);
//1번부터 2개를 지워라라는 뜻
//삭제한 것을 따로 보관해줌
// cars.splice(1, 2) 이렇게만 써도 삭제는 됨
console.log(spliceValue);
console.log(cars);
//응용
const x = cars.splice(0, 1, "현대", "르노", "기아");
//0번 자리에 1개를 지우고 그 뒤에 추가
console.log(cars);
console.log(x);

//map, filter, reduce 3대장 메쏘드

//상수로서의 배열
const 과일들 = ["사과", "배", "귤", "복숭아"];
과일들[0] = "오렌지";
//과일들 = ["Banana"]  과일들을 상수로 선언했기 때문에 변경할 수 없다. 내용은 변경 가능
console.log(과일들);