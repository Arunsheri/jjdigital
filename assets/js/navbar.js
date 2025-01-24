document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const offcanvasMenu = document.querySelector(".offcanvas-menu");
  const closeBtn = document.querySelector(".close-btn");

  menuToggle.addEventListener("click", function () {
    offcanvasMenu.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    offcanvasMenu.classList.remove("open");
  });
});
