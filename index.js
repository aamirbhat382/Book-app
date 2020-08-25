console.log("hello");
let btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  let book = document.getElementById('book');
  let author = document.getElementById("author");
  let booklist = localStorage.getItem('booklist');
  if (booklist == null) {
    bookobj = [];
  } else {
    bookobj = JSON.parse(booklist);
  }
  let bookdetiles = {
    name: book.value,
    author: author.value
  };
  bookobj.push(bookdetiles);
  localStorage.setItem("booklist", JSON.stringify(bookobj));
  console.log(bookobj);
  book.value = "";
  author.value = '';
  showbook();
});

function showbook() {
  let booklist = localStorage.getItem("booklist");
  if (booklist == null) {
    bookobj = [];
  } else {
    bookobj = JSON.parse(booklist);
  }
  let html = "";
  bookobj.forEach(function(element, index) {
    html += `<tr>
    <th scope="row">${index +1}</th>
    <td>${element.name}</td>
    <td>${element.author}</td>
    <td><button class="btn btn-primary" id="${index}" onclick= "deletebook(this.id)">Delete</button></td></tr>`;

  });
  let showbook = document.getElementById("showbook");
  if (showbook.length != 0) {
    showbook.innerHTML = html;
  } else {
    showbook.innerHTML = "you have not added any Book";
  }
}

function deletebook(index) {
  let booklist = localStorage.getItem("booklist");
  if (booklist == null) {
    bookobj = [];
  } else {
    bookobj = JSON.parse(booklist);
  }
  bookobj.splice(index, 1);
  localStorage.setItem("booklist", JSON.stringify(bookobj));
  showbook();

}