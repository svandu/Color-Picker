const buttons = document.querySelectorAll('.color');
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === "grey") {
            body.style.backgroundColor="grey";
            button.style.backgroundColor = "white";
            button.style.color = "black";
            button.innerText = "White";
        }
        if(e.target.id === "pink") {
            body.style.backgroundColor="pink";
            button.style.backgroundColor = "white";
            button.style.color = "black";
            button.innerText = "White";
        }
        if(e.target.id === "purple") {
            body.style.backgroundColor="purple";
            button.style.backgroundColor = "white";
            button.style.color = "black";
            button.innerText = "White";
        }
        if(e.target.id === "blue") {
            body.style.backgroundColor="blue";
            button.style.backgroundColor = "white";
            button.style.color = "black";
            button.innerText = "White";
        }
    })
})