// Your code here
const element = document.getElementById("dodger");

moveDodgerLeft =() =>{
    let left = element.style.left
    left = parseInt(left)
    if (left > 0){
        element.style.left = `${left - 1}px`
    }
}
moveDodgerRight =() =>{
    let left = element.style.left
    left = parseInt(left)
    if (left < 360){
        element.style.left = `${left + 1}px`
    }
}
document.addEventListener('keydown', (e) =>{
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })
  
  document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })