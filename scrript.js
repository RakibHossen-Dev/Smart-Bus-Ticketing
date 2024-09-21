const navMenu = document.getElementById("nav_menu");
const hamberIcon = document.getElementById("hamber_icon");

hamberIcon.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
