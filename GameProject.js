var x = 0
var y = 0
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
   document.getElementById("bat").setAttribute("x", x - 15)
  x = x - 15
}

else if (e.keyCode == 39) {
   document.getElementById("bat").setAttribute("x", x + 15)
  x = x + 15
}

else if (e.keyCode == 38) {
   document.getElementById("bat").setAttribute("y", y - 15)
  y = y - 15
}

else if (e.keyCode == 40) {
   document.getElementById("bat").setAttribute("y", y + 15)
  y = y + 15
}
  })
