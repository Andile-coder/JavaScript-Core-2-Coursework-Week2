function changeColor() {
  var p = document.querySelector("p");
  p.style.color = this.value;
}

function listOfColours(colours) {
  var p = document.createElement("p");
  p.innerHTML = "i will change color";
  p.style.color = colours[0]; //default color
  var cont = document.getElementById("content");
  cont.appendChild(p);
  var select = document.createElement("select");
  for (var i = 0; i < colours.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = colours[i];
    select.appendChild(option);
    select.addEventListener("change", changeColor);
  }
  cont.appendChild(select);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
