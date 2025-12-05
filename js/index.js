// 1. LOGO CLICK → GO TO HOMEPAGE
const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  window.location.href = "index.html";
});

// 2. SEARCH BAR ALERT ON ENTER
const searchBox = document.querySelector(".search-bar input");

searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("You searched for: " + searchBox.value);
  }
});

// 3. WELCOME MESSAGE ON PAGE LOAD
window.addEventListener("load", function () {
  alert("Welcome to MyFinanceMate!");
});

// 4. NAV LINKS HOVER EFFECT USING JS
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    link.style.color = "#00a884";
  });

  link.addEventListener("mouseleave", function () {
    link.style.color = "";
  });
});
