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
        dimensions = tempDim;
        createEtchASketch(dimensions);
    }
})

// Create a container div


// Populate the divs using input from the button
function createEtchASketch(dims) {
    // Run a nested loop over columns and rows using `dims` as input
    // Create column divs
}

// Listeners to on mouse hover over the divs 

// Color function (called by the hover function above)