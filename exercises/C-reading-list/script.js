function readingList(books) {
  var cont = document.getElementById("content");
  var insideCont = document.createElement("div");
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  h1.innerHTML = "bookList";
  cont.appendChild(div);
  cont.appendChild(h1);
  for (var i = 0; i < books.length; i++) {
    var pEl = document.createElement("P");
    var ulEl = document.createElement("UL");
    var liEl = document.createElement("LI");
    var image = document.createElement("IMG");
    image.src = `${books[i].url}`;
    //styles
    ulEl.style.width = "30%";
    image.style.width = "100%";
    insideCont.style.display = "flex";
    ulEl.style.listStyleType = "none";
    ulEl.style.margin = "30px";

    //end of styles
    insideCont
      .appendChild(ulEl)
      .appendChild(liEl)
      .appendChild(pEl).innerHTML = `${books[i].title}-${books[i].author}`;
    ulEl.appendChild(liEl).appendChild(image);

    if (books[i].alreadyRead) {
      ulEl.style.backgroundColor = "green";
    } else {
      ulEl.style.backgroundColor = "red";
    }

    cont.appendChild(insideCont);
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url:
      "https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg400.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images1.penguinrandomhouse.com/cover/9780307476708",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url:
      "https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/34d3828b-c12e-4c7e-8942-b6b7deb02e12/File/79bc02f12a24a5c4e73a6387aa42ff39/pragprog_bookcover_version_1.jpg",
  },
];

readingList(books);
