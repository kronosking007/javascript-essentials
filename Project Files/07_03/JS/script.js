const BTN = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

BTN.classList.remove("hide");
ALERT.classList.add("hide");

function toggleClass(e){

    e.preventDefault();

    BTN.classList.toggle("hide");
    ALERT.classList.toggle("hide");

}

BTN.addEventListener("click", toggleClass, false);
BTN.addEventListener("click", alertNow, false);


function alertNow(){
    alert("Button Clicked");
}