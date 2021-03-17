const blueEl = document.getElementById("blueBtn");
const orangeEl = document.getElementById("orangeBtn");
const greenEl = document.getElementById("greenBtn");
const jumbotronEl = document.querySelector(".jumbotron");
const bikeBtnEl = document.querySelector(".buttons a:first-child");
const volunteerEl = document.querySelector(".buttons a:last-child");
function colorChange() {
  if (this.id == "blueBtn") {
    jumbotronEl.style.backgroundColor = "#588fbd";
    bikeBtnEl.style.backgroundColor = "#ffa500";
    volunteerEl.style.backgroundColor = "black";
    volunteerEl.style.color = "white";
  } else if (this.id == "orangeBtn") {
    jumbotronEl.style.backgroundColor = "#f0ad4e";
    bikeBtnEl.style.backgroundColor = "#5751fd";
    volunteerEl.style.backgroundColor = "#31b0d5";
    volunteerEl.style.color = "white";
  } else {
    jumbotronEl.style.backgroundColor = "#87ca8a";
    bikeBtnEl.style.backgroundColor = "black";
    volunteerEl.style.backgroundColor = "#8c9c08";
    volunteerEl.style.color = "white";
  }
}
// console.log(bikeBtnEl);
// console.log(blueEl);
blueEl.addEventListener("click", colorChange);
orangeEl.addEventListener("click", colorChange);
greenEl.addEventListener("click", colorChange);

//register with us form
const emailAdr = document.getElementById("exampleInputEmail1");
const nameEl = document.getElementById("example-text-input");
const describe = document.getElementById("exampleTextarea");
const submitBtn = document.querySelector("form button:last-child");
function formValid(event) {
  event.preventDefault();
  function email() {
    if (emailAdr.value.includes("@") === false || emailAdr.value.length == 0) {
      emailAdr.style.backgroundColor = "red";
    } else {
      emailAdr.style.backgroundColor = "white";
    }
  }
  function name() {
    if (nameEl.value.length == 0) {
      nameEl.style.backgroundColor = "red";
    } else {
      nameEl.style.backgroundColor = "white";
    }
  }
  function textArea() {
    if (describe.value.length == 0) {
      describe.style.backgroundColor = "red";
    } else {
      describe.style.backgroundColor = "white";
    }
  }
  function createAlert() {
    if (
      emailAdr.style.backgroundColor == "white" &&
      nameEl.style.backgroundColor == "white" &&
      describe.style.backgroundColor == "white"
    ) {
      alert("Thank you for filling out the form");
    }
  }

  email();
  name();
  textArea();
  createAlert();
}

submitBtn.addEventListener("click", formValid);
