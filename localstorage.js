var input = document.querySelector(".past");
var saveBtn = document.querySelector(".saveBtn");


var text = localStorage.getItem("text");
input.textContent = text;




saveBtn.addEventListener("click", function() {

    let divEl = document.querySelector(".past");
    
    let textInsideDiv = divEl.textContent;
    
    localStorage.setItem("text", textInsideDiv);
});
 
var a = moment().toString();
document.getElementById("currentDay").innerHTML = a;











