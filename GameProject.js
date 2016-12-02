
function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

var timeStart = Date.now()
var foodEaten = 0
var foodText = document.getElementById("foodEaten")
foodText.textContent ="Food Eaten: " + foodEaten
var enemy = false


document.addEventListener("keydown", function(e) {

  var player = document.getElementById("player")
  var enemy = document.getElementById("enemy")
  var food1 = document.getElementById("food1")
  var food2 = document.getElementById("food2")
  var food3 = document.getElementById("food3")
  var x = Number(player.getAttribute("x"))
  var y = Number(player.getAttribute("y"))
  var foodX = Number(food1.getAttribute("x"))
  var foodY = Number(food1.getAttribute("y"))
  var otherFoodX = Number(food2.getAttribute("x"))
  var otherFoodY = Number(food2.getAttribute("y"))
  var anotherFoodX = Number(food3.getAttribute("x"))
  var anotherFoodY = Number(food3.getAttribute("y"))
  var enemyX = Number(enemy.getAttribute("x"))
  var enemyY = Number(enemy.getAttribute("y"))
  var enemyWidth = 80;
  var enemyHeight = 80;
  var foodWidth = 40;
  var foodHeight = 40;
  var gameOver = false;
  var time = (Date.now()-timeStart)/1000
  time = time.toFixed(0)

// Player Move
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

// Food or Enemy Collide
    if (e.keyCode == 37 || 38 || 39 || 40) {
      if (x + 50 > foodX && x + 50 < foodX + foodWidth && y + 20 > foodY && y + 20 < foodY + foodWidth){
        food1.setAttribute("x", randomNumber(40,810))
        foodEaten = foodEaten + 1
          console.log(foodEaten)
      }

      else if (x + 50 > otherFoodX && x + 50 < otherFoodX + foodWidth && y + 20 > otherFoodY && y + 20 < otherFoodY + foodWidth){
        food2.setAttribute("x", randomNumber(40,810))
        foodEaten = foodEaten + 1
          console.log(foodEaten)
      }

      else if (x + 50 > anotherFoodX && x + 50 < anotherFoodX + foodWidth && y + 20 > anotherFoodY && y + 20 < anotherFoodY + foodWidth){
        food3.setAttribute("x", randomNumber(40,810))
        foodEaten = foodEaten + 1
          console.log(foodEaten)
      }

      else if (x + 50 > enemyX && x + 50 < enemyX + enemyWidth && y + 20 > enemyY && y + 20 < enemyY + enemyWidth){
        gameOver = true
        enemy = true
      }

    }

  foodText.textContent ="Food Eaten: " + foodEaten
    document.getElementById("time").textContent ="Time: " + time

    if(foodEaten == 5){
      gameOver = true
    }

// Game Over function
  if(gameOver == true){
      document.getElementById("screen").pauseAnimations()
            var timeStop = Date.now()
        var gameTime = (timeStop - timeStart)/1000
        var gameTime2 = Math.round(gameTime)
        timeDisplayed = true
        var ugh = gameTime2
      document.getElementById("endTime").textContent = "Game Time: " + ugh + " seconds"
    document.getElementById("score").textContent = "Score: " + foodEaten
    foodText.textContent = ""
    document.getElementById("slideDown").style.display = "block";
    if(enemy == true){
      document.getElementById("winOrLose").textContent = " You lose, Iron Man caught you!"
    }
  }


})

function reloadGame(){
  location.reload()
}
