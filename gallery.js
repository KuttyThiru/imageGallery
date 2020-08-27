let currentSelected = 0;
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let  images = document.querySelectorAll(".img")

nextButton.addEventListener("click", function(){
    images[currentSelected].classList.remove("active");
    currentSelected++;
    images[currentSelected].classList.add("active");
    prevButton.disabled = false;
    if(images.length === currentSelected + 1){
        nextButton.disabled = true;
    }

    
})

prevButton.addEventListener("click",function(){
    images[currentSelected].classList.remove("active");
    currentSelected--;
    images[currentSelected].classList.add("active");
    nextButton.disabled = false
    if(currentSelected ===0){
        prevButton.disabled = true;
    }
})