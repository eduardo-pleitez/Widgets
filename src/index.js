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

let j;
let accordions = document.getElementsByClassName("accordion");
for(j=0; j<accordions.length; j++){
  accordions[j].addEventListener("click", function(){
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if(panel.style.display === "block"){
      panel.style.display = "none";
    } else {
      panel.style.display = "block"
    }
  })
}

  let tab = document.getElementsByClassName("tabButton");
  let k;
  for(k=0; k<tab.length; k++){
    tab[k].addEventListener("click", function(){
      let l;
      for(l=0; l<tab.length; l++){
        tab[l].className = "tabButton";
      }
      this.className += " activeTab";
      let m;
      let tabContent = document.getElementsByClassName("tabContent");
      for(m=0; m<tabContent.length; m++){
        tabContent[m].style.display = "none";
      }
      if(this.value === "html"){tabContent[0].style.display = "block";}
      if(this.value === "css"){tabContent[1].style.display = "block";}
      if(this.value === "javascript"){tabContent[2].style.display = "block";}
      if(this.value === "frameworks"){tabContent[3].style.display = "block";}
    })}