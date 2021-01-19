  // initializes the board
  init();

  // ADD CODE HERE!

//**************** GRABING NODES FROM DOM ******************/ 

const movesUl = document.querySelector('#moves-container')  
const movesBtn = document.querySelector('#move-button')  

//**************** ADD AND HANDLE EVENTS ******************/ 
document.addEventListener("keydown", handleArrowPress)
// movesBtn.addEventListener("click", moveRobot)
movesBtn.addEventListener("click", autoMoveRobot)


function handleArrowPress(e){
  if (e.code === "ArrowRight"){
    createLi("Right")
  }else if (e.code === "ArrowLeft"){
    createLi("Left")
  }else if (e.code === "ArrowUp"){ 
    createLi("Up")
  }else if (e.code === "ArrowDown"){ 
    createLi("Down")
  }
}


// ********************* MANIPULATE OR CHANGE DOM ********************


function createLi(direction){
  let li = document.createElement('li')
  li.innerText = direction

  movesUl.append(li)
}


// function moveRobot(e) {
//   let moveLi = movesUl.querySelector('li')
  
//   move(moveLi.innerText.toLowerCase())
//   moveLi.remove()
// }


function autoMoveRobot() {
  let moveTime = setInterval(addRobot, 1000);  
  
  
  function addRobot(){
    if (movesUl.children.length === 0){
      clearInterval(moveTime)
      console.log("hi");
    }else{
      let moveLi = movesUl.querySelector('li')
      move(moveLi.innerText.toLowerCase())
      moveLi.remove()
    }
  }
}

