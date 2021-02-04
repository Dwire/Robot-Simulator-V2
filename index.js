  // initializes the board
  init();

  // ADD CODE HERE!


  // ************ Grab elements off the DOM ************
const body = document.querySelector('body')
const movesUl = document.querySelector("#moves-container")
const moveBtn = document.querySelector("#move-button")

//  **************** ADD and Handle Events ************
body.addEventListener("keydown", handleKeyDownEvent)
// moveBtn.addEventListener("click", moveRobot)
moveBtn.addEventListener("click", autoMoveRobot)


function handleKeyDownEvent(e){
  if (e.code === "ArrowLeft"){
    createDirectionLi("Left")
  }else if (e.code === "ArrowRight"){
    createDirectionLi("Right")
  }else if (e.code === "ArrowDown"){
    createDirectionLi("Down")
  }else if (e.code === "ArrowUp"){
    createDirectionLi("Up")
  }
}

// ***************** Logic and DOM manipulation *******************

function createDirectionLi(direction){
  const li = document.createElement("li")
  li.textContent = direction

  movesUl.append(li)
}


function moveRobot(){ 
  let li = movesUl.querySelector("li")  
  
  move(li.innerText.toLowerCase())
  li.remove()
}


function autoMoveRobot(){
  let intervalTimer = setInterval(addRobotMovement, 500)

  function addRobotMovement(){
    if (movesUl.children.length === 0){
      clearInterval(intervalTimer)
    }else{
      moveRobot()
    }
  }
}