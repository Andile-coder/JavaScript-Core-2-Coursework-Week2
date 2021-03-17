function shoppingList(arrayOfPeople) {
  var ul = document.createElement("ul");
  var main = document.getElementById("content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    ul.appendChild(document.createElement("LI")).innerHTML = arrayOfPeople[i];
  }
  main.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
