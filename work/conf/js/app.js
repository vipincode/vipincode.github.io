const loader = document.getElementById("loader");
const myId = document.getElementById("myId");

window.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(function() {
        loader.style.display="none";
        myId.style.display ="block";
    }, 3000);
});
