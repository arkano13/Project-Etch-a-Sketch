const container = document.getElementById("principalContainers");
const changeBtn = document.getElementById("gridChange");
const reserbtn= document.getElementById("reset");
const colorsbtn= document.getElementById("colors");
let initialSize = 16


changeBtn.addEventListener("click", function() {
  const gridSize = prompt("Enter a number 4-100")
    if(gridSize>=4 && gridSize<=100){
      container.innerHTML=""; 
      render(gridSize)
    }else{
      alert("invalid number, please enter a numnber  between 4 and 100")
    }
});

colorsbtn.addEventListener("click", function() {
  const gridSize = prompt("Enter a number 4-100")
    if(gridSize>=4 && gridSize<=100){
      container.innerHTML=""; 
      rendercolors (gridSize)
    }else{
      alert("invalid number, please enter a numnber  between 4 and 100")
    }
});

  
reserbtn.addEventListener("click", function() {
  container.innerHTML = ""; 
  render(initialSize);
});




function render(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.style.width = `${600 / gridSize}px`
    square.style.height = `${600 / gridSize}px`
    square.addEventListener("mouseover", function(event) {
      square.style.backgroundColor ='black'
    })
  }
}

function rendercolors(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.style.width = `${600 / gridSize}px`
    square.style.height = `${600 / gridSize}px`
    square.addEventListener("mouseover", function(event) {
      square.style.backgroundColor =rgbcolors();
    })
  }
}


function rgbcolors(){
    let rgb1 = Math.floor(Math.random()* (255- 0 + 1 ) + 0);
    let rgb2 = Math.floor(Math.random()* (255- 0 + 1 ) + 0);
    let rgb3 = Math.floor(Math.random()* (255- 0 + 1 ) + 0);

    let rgbcolor = `rgb(${rgb1},${rgb2},${rgb3}) `;
    return rgbcolor;

}





render(initialSize)

