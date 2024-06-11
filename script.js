// RGB Colors

//  variables to store HTML Elements

// Event Listener
document.getElementById("width").addEventListener("change", changeSize);
document.getElementById("height").addEventListener("change", changeSize);

// Event Function
// Input
function changeSize() {
  let width = +document.getElementById("width").value;
  let height = +document.getElementById("height").value;

  let preview = width + height.innerHTML;
}

let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
// Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  // validate colors( constrain colors between 0 - 255)
  //  Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }
  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  // Process: build rgb string rgb(__, __, __)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update thr color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
