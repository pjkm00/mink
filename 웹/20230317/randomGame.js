
// const input = document.querySelector("#guessed");
// const div = document.querySelector("div");
// const verify = function() {
//     const 랜덤 = Math.floor(Math.random() * 10) + 1;
//     if (input.value == 랜덤) {
//         div.innerHTML = "You Win!!";
//     } else if (isNaN(input.value) == true) {
//         div.innerHTML = "숫자를 입력하세요."
//     } else {
//         div.innerHTML = "number is " + 랜덤 + ". You lose";
//     };
// };


function verify() {
    let input = document.querySelector("#guessed").value;
    input = parseInt(input, 10);
    const random = Math.floor(Math.random() * 10) + 1;
    const div = document.querySelector("div");

//NaN = Not a Number 숫자가 아니다 
//isNaN은 문자열인지 아닌지를 물어보는 함수 답은 항상 참또는 거짓으로 나옴
    if(isNaN(input)) {
        div.innerHTML = "숫자를 입력해주세요.";
        return; // 리턴구문을 만나면 더이상 프로세스를 진행하지 않고 나간다. 아래쪽 코드 실행x
    };
    if(input > 10 || input < 1) {
        div.innerHTML = "1과 10 사이의 숫자를 입력해주세요."
        return;
    }

    if (input === random) {
        div.innerHTML = "You win.";
    } else{
        div.innerHTML = random + "You lose. Please retry";
            div.innerHTML = `${input} != ${random} : You lose. Please retry.`
    }
}