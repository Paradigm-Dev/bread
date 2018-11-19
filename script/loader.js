var pageLoad;

function myFunction() {
  pageLoad = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("divLoad").style.display = "block";
}
