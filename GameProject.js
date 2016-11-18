
function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

  var foodEaten = 0
  var foodText = document.getElementById("foodEaten")

document.addEventListener("keydown", function(e) {

  var player = document.getElementById("player")
  var food1 = document.getElementById("food1")
  var x = Number(player.getAttribute("x"))
  var y = Number(player.getAttribute("y"))
  var foodX = Number(food1.getAttribute("x"))
  var foodY = Number(food1.getAttribute("y"))
  var foodWidth = 40;
  var foodHeight = 40;


    if (e.keyCode == 37) {
      if (x > foodX && x < foodX + foodWidth && y > foodY && y < foodY + foodWidth){
        food1.setAttribute("x", randomNumber(40,810))
        foodEaten == foodEaten + 1
        console.log("touch")
      }
        player.setAttribute("x", x - 15)
        x = x - 15
    } else if (e.keyCode == 39) {
      if (x > foodX && x < foodX + foodWidth && y > foodY && y < foodY + foodWidth){
        food1.setAttribute("x", randomNumber(40,810))
        foodEaten == foodEaten + 1
        console.log("touch")
      }
      player.setAttribute("x", x + 15)
        x = x + 15
    } else if (e.keyCode == 38) {
      if (x > foodX && x < foodX + foodWidth && y > foodY && y < foodY + foodWidth){
          food1.setAttribute("x", randomNumber(40,810))
          foodEaten == foodEaten + 1
        console.log("touch")
      }
        player.setAttribute("y", y - 15)
        y = y - 15
    } else if (e.keyCode == 40) {
      if (x > foodX && x < foodX + foodWidth && y > foodY && y < foodY + foodWidth){
          food1.setAttribute("x", randomNumber(40,810))
          foodEaten == foodEaten + 1
        console.log("touch")
      }
      player.setAttribute("y", y + 15)
        y = y + 15
    }
  foodText.textContent ="Food Eaten: " + foodEaten
})
