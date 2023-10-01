let open = document.querySelector('.open');
let close = document.querySelector('.close');
let sideBar = document.querySelector('.sideBar');
let linkClose = document.querySelector('.sideBar ul li a');
const sideLine = document.querySelector('.sideLine');

open.addEventListener('click', function(){
   sideBar.style.display = "block";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
   sideLine.style.display = "none";
})

close.addEventListener('click', function(){
    sideBar.style.display = "none";
    document.body.style.backgroundColor = "white";
    sideLine.style.display = "block";
})

