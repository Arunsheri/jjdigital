document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");

      const openItem = document.querySelector(".accordion-item.active");
      if (openItem && openItem !== item) {
        openItem.classList.remove("active");
        openItem.querySelector(".accordion-content").style.maxHeight = null;
      }

      if (item.classList.contains("active")) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
