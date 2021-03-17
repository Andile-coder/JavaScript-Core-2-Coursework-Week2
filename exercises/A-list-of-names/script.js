function listOfNames(arrayOfPeople) {
  var contEl = document.getElementById("content");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    for (const key in arrayOfPeople[i]) {
      var h1 = document.createElement("H1");
      var h2 = document.createElement("H2");
      h1.innerHTML = arrayOfPeople[i].name;
      h2.innerHTML = arrayOfPeople[i].job;
    }
    contEl.appendChild(h1);
    contEl.appendChild(h2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
