const stars = document.querySelectorAll(".fa-solid");

for(let i = 0; i < stars.length; i++) {
    const starClick = function(e) {
        stars[i].classList.add("active");

        for (let a = 0; a < i; a++){
        stars[a].classList.add("active");
        }
        
        for (let b = 4; b > i; b--){
        stars[b].classList.remove("active");
        }
        // for (let b = i + 1; b > i; b++){
        // stars[b].classList.remove("active");
        // }
    }
    stars[i].addEventListener("click", starClick);
}


