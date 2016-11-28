
function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

var foodEaten = 0
var foodText = document.getElementById("foodEaten")
foodText.textContent ="Food Eaten: " + foodEaten

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

        player.setAttribute("x", x - 15)
        x = x - 15
    } else if (e.keyCode == 39) {

      player.setAttribute("x", x + 15)
        x = x + 15
    } else if (e.keyCode == 38) {

        player.setAttribute("y", y - 15)
        y = y - 15
    } else if (e.keyCode == 40) {

      player.setAttribute("y", y + 15)
        y = y + 15
    }


    if (e.keyCode == 37 || 38 || 39 || 40) {
      if (x + 50 > foodX && x + 50 < foodX + foodWidth && y + 20 > foodY && y + 20 < foodY + foodWidth){
        food1.setAttribute("x", randomNumber(40,810))
        foodEaten = foodEaten + 1
          console.log(foodEaten)
      }}

  foodText.textContent ="Food Eaten: " + foodEaten
})
