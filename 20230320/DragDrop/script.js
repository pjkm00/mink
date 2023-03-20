//4개의 div박스에 3종류의 이벤트를 등록
//1. dragover 이미지를 드래그해서 1개의 div위에 있을 때 발생
//2. dragleave 1번의 드래그오버 이벤트가 발생한 div에서 마우스가 경계를 나가면 발생
//3. drop 1개의 div 위에서 이미지를 드롭하면 발생


//각 이벤트를 핸들링할 수 있는 코드 작성
//dragover 이벤트 : 발생한 특정 div요소에 hovered클래스 추가
//dragleave : hoverd삭제
// drop : 발생한 특정 div요소에 image태그 요소를 붙인다.(div에 appendChild)

const box = document.querySelectorAll(".box")
const img = document.querySelector(".image");


// box[0].addEventListener("dragover", (e) => {
//     box[0].classList.add("hovered"); 
// });
// box[0].addEventListener("dragleave", (e) => {
//     box[0].classList.remove("hovered"); 
// })
// box[0].addEventListener("drop", (e) => {
    
//     console.log(box[0]);
// })


// box[1].addEventListener("dragover", (e) => {
//     box[1].classList.add("hovered");
// })
// box[1].addEventListener("dragleave", (e) => {
//     box[1].classList.remove("hovered");
// })
// box[1].addEventListener("drop", (e) => {
    
// })


// box[2].addEventListener("dragover", (e) => {
//     box[2].classList.add("hovered");
// })
// box[2].addEventListener("dragleave", (e) => {
//     box[2].classList.remove("hovered");
// })
// box[2].addEventListener("drop", (e) => {

// })

// box[3].addEventListener("dragover", (e) => {
//     box[3].classList.add("hovered");
// })
// box[3].addEventListener("dragleave", (e) => {
//     box[3].classList.remove("hovered");
// })
// box[3].addEventListener("drop", (e) => {

// })

for (let i = 0; i<box.length; i++) {
    //dragover 이벤트의 디폴트 동작때문에 drop이벤트가 발생하지 못함
    box[i].addEventListener("dragover", (e) => {
        box[i].classList.add("hovered"); 
        e.preventDefault(); //drop이벤트를 막고있는 디폴트동작을 중단시킴
    });
    box[i].addEventListener("dragleave", (e) => {
        box[i].classList.remove("hovered"); 
    })
    box[i].addEventListener("drop", (e) => {
       box[i].appendChild(img);
       box[i].classList.remove("hovered"); 
    })
};