var player = document.getElementById("player")
var food1 = document.getElementById("food1")
var x = Number(player.getAttribute("x"))
var y = Number(player.getAttribute("y"))
var foodX = Number(food1.getAttribute("x"))
var foodY = Number(food1.getAttribute("y"))
var foodWidth = 40;
var foodHeight = 40;

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 37) {
        document.getElementById("player").setAttribute("x", x - 15)
        x = x - 15
    } else if (e.keyCode == 39) {
        document.getElementById("player").setAttribute("x", x + 15)
        x = x + 15
    } else if (e.keyCode == 38) {
        document.getElementById("player").setAttribute("y", y - 15)
        y = y - 15
    } else if (e.keyCode == 40) {
        document.getElementById("player").setAttribute("y", y + 15)
        y = y + 15
    }

    if (x > foodX && x < foodX + foodWidth ){//&& y + 50 > foodY && y + 50 < foodY + foodHeight) {
      if(Number(food1.getAttribute("x") == 250)) {
        food1.setAttribute("x", 100);
      }
      else {
      food1.setAttribute("x", 250);
      }
        console.log("collide");
    }
    console.log(x + "<" + (foodX + foodWidth) +"  " + x + ">" + foodX);
        /*if( x > capsX && x < capsX + capsWidth && y > capsY && y < capsY + capsWidth){
          console.log("collide");
        }*/

})
