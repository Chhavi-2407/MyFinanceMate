
const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  window.location.href = "index.html";
});


const searchBox = document.querySelector(".search-bar input");

searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("You searched for: " + searchBox.value);
  }
});


window.addEventListener("load", function () {
  alert("Welcome to MyFinanceMate!");
});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    link.style.color = "#00a884";
  });

  link.addEventListener("mouseleave", function () {
    link.style.color = "";
  });
});
