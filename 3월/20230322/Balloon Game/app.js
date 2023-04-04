let gallery = document.querySelector("#balloon-gallery");
const balloons = document.querySelectorAll(".balloon");
let message = document.querySelector("#yay-no-balloons");

// For Loop
for (let i = 0; i < balloons.length; i++) {
  // 이벤트 등록
  // callback 함수가 할일
  // 풍선을 지운다 style.backgroundColor = "#ededed";
  // div태그내에 텍스트 POP을 쓴다
  // 터트린 풍선갯수를 센다
  // 모든 풍선이 터졌으면 message 태그를 보여준다.


   const pop = function(e) {
    balloons[i].style.backgroundColor = "#ededed";
    balloons[i].innerHTML = "pop";

    let count = 0;
    for(let i=0; i < balloons.length; i++) {
      if(balloons[i].innerHTML === "pop")  {
        count++;
      }
      if(count == balloons.length){
        message.style.display = "block";
        gallery.style.display = "none";
      }
    }


  };

  balloons[i].addEventListener("mouseenter", pop)

}

// addEventListener("이벤트종류", 함수이름, {옵션}{once : true}) 한번만 이벤트 발생 