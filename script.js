const startButton = document.getElementById("startButton");
const container = document.getElementById("container");
let childDivs = [];

const height = container.clientHeight;
let numberOfRows;
let childDivHeight;

startButton.addEventListener("click", chooseNumberOfRows);

function chooseNumberOfRows() {
    numberOfRows = Number(prompt("How many columns and rows should your Etch-A-Sketch have?"));

    if (isNaN(numberOfRows)) {
        chooseNumberOfRows();
    }

    if (numberOfRows > 100) {
        alert("Give a number equal or less than 100");
        chooseNumberOfRows();
    }

    else {
        childDivHeight = height / numberOfRows;
        createDivs();
    }
}

function createDivs() {

    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        childDivs.push(document.createElement("div"));
    }

    childDivs.forEach(div => {
        container.appendChild(div);
        div.style.cssText = `height:${childDivHeight}px;width:${childDivHeight}px`
        div.classList.add("childDiv");
        div.addEventListener("mouseover", () => {

            let x = Math.floor(Math.random() * 255);
            let y = Math.floor(Math.random() * 255);
            let z = Math.floor(Math.random() * 255);
            div.style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        }
        )
    })

    resetButton();
}

function resetButton() {
    startButton.textContent = "Play again";
    startButton.removeEventListener("click", chooseNumberOfRows);
    startButton.addEventListener("click", () => {
        document.location.reload();
    })
}