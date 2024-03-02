const shadow = document.querySelector(".shadow");
const light = document.querySelector(".bulb");
const filament= document.querySelector(".filament");

light.addEventListener("click",function(){
    light.classList.toggle("off");
    shadow.classList.toggle("off")
    filament.classList.toggle("off")

})