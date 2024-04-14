const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");

slider.addEventListener("input", (e) => {
  let gridSize = e.target.value;
  sliderValue.textContent = gridSize;
  createGrid(gridSize);
});

const MAX_WIDTH = 900;
const MAX_HEIGHT = 900;

function createGrid(gridSize) {
  //clear grid
  container.innerHTML = "";

  let gridDimension = MAX_HEIGHT / gridSize;

  for (let i = 1; i <= gridSize * gridSize; i++) {
    const divBox = document.createElement("div");
    divBox.style.border = "1px solid red";
    divBox.style.height = `${gridDimension}px`;
    divBox.style.width = `${gridDimension}px`;

    divBox.classList.add("box");
    container.appendChild(divBox);
  }
  const divBoxes = container.querySelectorAll("div");
  divBoxes.forEach((divBox) => {
    divBox.addEventListener("mouseover", colorGrid);
  });
}

function colorGrid() {
  let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
  if (currentOpacity <= 0.9) {
    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
  }
}
