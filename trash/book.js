let portBtn = document.querySelector('.portfolio-button');
let portPage = document.getElementById("portfolio-page");
let bookCover = document.getElementById('book-cover');
let book = document.getElementById('book');
portBtn.addEventListener('click', function(){
  portPage.style.display = "block";
  book.style.width = "70%";
  book.style.height = "100vh";
  bookCover.style.display = "none";
  

});

function myFunction(){
  
}