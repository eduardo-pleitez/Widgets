let slideIndex = 1;
showSlides(slideIndex);

let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", plusSlides);
let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", plusSlides);

function plusSlides(){
  showSlides(slideIndex += Number(this.value));
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("slides");
  if(n > slides.length){slideIndex = 1};
  if(n < 1){slideIndex = slides.length};
  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}