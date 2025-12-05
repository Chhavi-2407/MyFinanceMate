// go homepage
const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  window.location.href = "index.html";
});

// search bar
const searchBox = document.querySelector(".search-bar input");

searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("You searched for: " + searchBox.value);
  }
});

// welcome msg
window.addEventListener("load", function () {
  alert("Welcome to MyFinanceMate!");
});

// hover effect
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    link.style.color = "#00a884";
  });

  link.addEventListener("mouseleave", function () {
    link.style.color = "";
  });
});
