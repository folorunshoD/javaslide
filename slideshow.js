var slideIndex = 0;
showSlides();
function showSlides(){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dot = document.getElementsByClassName("dot");
    for (i= 0; i < slides.length; i++)
   {
        slides[i].style.display = "none" ;
}
slideIndex++;
if(slideIndex > slides.length)
{slideIndex = 1}
for(i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace("active" , "");
}
slides[slideIndex-1].style.display = "block" ;
dot[slideIndex-1].className += "active" ;
setTimeout(showSlides, 2000);
}