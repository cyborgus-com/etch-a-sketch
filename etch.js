// Add a title
const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
document.body.appendChild(title);

// Add a button to prompt a grid dimension popup
const dimensionsButton = document.createElement("button");
dimensionsButton.textContent = "Enter square dimensions";
document.body.appendChild(dimensionsButton);

// Listener to the button press
let dimensions = 0;
dimensionsButton.addEventListener("click", () => {
    let tempDim = prompt("Enter the number of dimensions (100 or less) for the Etch-a-Sketch square: ");
    if (tempDim > 100) {
        alert("No more than 100 dimensions can be entered, please try again.");
    }
    else if (tempDim < 1) {
        alert("Only positive dimensions between 1 and 100 can be selected. please try again.");
    }
    else {
        // insert function below to delete all existing divs:
        container.innerHTML = "";
        dimensions = tempDim;
        createEtchASketch(dimensions);
    }
})

// Create a container div
const container = document.createElement("div");
container.setAttribute("style", 
    "width: 960px; height: 960px; display: flex; flex-direction: column; border: 1px solid black; flex-wrap: wrap;");
document.body.appendChild(container);

// use event delegation by attaching a single event listener to the 
// `container` and handling the event for dynamically added `.divSquare` elements.

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("divSquare")) {
        colorThisSquare(event);
    }
});

// Color function (called by the hover function above)

// Populate the divs using input from the button
function createEtchASketch(dims) {
    // calculate small square dimensions - to be changed since border takes up space, too
    let dimSquare = Math.floor(960/dims)-2;

    // loop over the container, and add divs
    for (i=0; i<(dims*dims); i++) {
        let divSquare = document.createElement("div");
        divSquare.setAttribute("style", "border: 1px solid WhiteSmoke;" +
            "width: " + dimSquare + "px;" +
            "height: " + dimSquare + "px;"
            );
        divSquare.className = "divSquare";
        container.appendChild(divSquare);       
    }
}

function colorThisSquare(event) {
    let R = getRandomInt(0, 256);
    let G = getRandomInt(0, 256);
    let B = getRandomInt(0, 256);
    let color = "rgb("+R+","+G+","+B+")";
    event.target.style.backgroundColor = color;
    event.target.style.borderColor = color;

    let currentOpacity = parseFloat(event.target.style.opacity) || 0;
    if (currentOpacity < 1) {
        event.target.style.opacity = (currentOpacity + 0.1).toString();
    }

}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    // The maximum is exclusive and the minimum is inclusive
  }
  