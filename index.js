var numberBtns = document.querySelectorAll(".number-btns");
var submitBTn = document.getElementById("submit-btn");
var modal = document.getElementById("modal");
var numberSelected = document.getElementById("number-selected");

for (i=0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", e => {
        e.target.classList.toggle("number-btns");
        e.target.classList.toggle("btn-active");
        console.log(e.target);
    })
}

submitBTn.addEventListener("click", e => {
    modal.style.display = "block";
    numberSelected.innerText = `You selected ${e.target} out of 5`;
    console.log(numberSelected.innerText);
   
});

modal.addEventListener("click", e => {
    modal.style.display = "none";
})