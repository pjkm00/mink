//demo id의 앨리먼트를 가져와서 값을 수정하는 코드

document.getElementById("demo").innerHTML = "안녕하세요";
console.log(document.getElementById("demo"))
console.log(document.getElementById("demo").innerHTML)
document.getElementById("demo").innerHTML = "1234";
document.getElementById("demo").innerHTML = "34567";
console.log(document.getElementById("demo"))
console.log(document.getElementById("demo").innerHTML)
document.getElementById("demo").innerHTML = "감사합니다";