// index.html

const scroll = document.querySelector(".change-on-scroll");
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    scroll.classList.add("nav-colored");
  } else {
    scroll.classList.remove("nav-colored");
  }
};

// blog dropdown_box
const dropdown_icon = document.querySelector(".dropdown-icon");
const dropdown_box = document.querySelector(".dropdown-box");
const svgPath = document.querySelector(".dropdown-svg-icon path");
let isOpen = false;
dropdown_icon.addEventListener("click", () => {
  isOpen = !isOpen;
  dropdown_icon.style.transform = isOpen ? "rotate(-180deg)" : "rotate(0deg)";

  if (isOpen) {
    dropdown_box.classList.add("show");
  } else {
    dropdown_box.classList.remove("show");
  }

  svgPath.setAttribute("stroke", isOpen ? "#F37021" : "#201A11");
});

const accordion_head = document.querySelectorAll(".accordion-head");

accordion_head.forEach((head) => {
  head.addEventListener('click', () => {

    accordion_head.forEach((item) => {
      if (item !== head) {
        item.classList.remove("active");

        const arrow_btn = item.querySelector(".arrow-btn");
        if (arrow_btn) {
          arrow_btn.classList.add("accordion-btn-hover");
          arrow_btn.classList.remove("accordion-btn-static");
        }
      }
    });

    head.classList.toggle("active");

    const arrow_btn = head.querySelector(".arrow-btn");
    if (arrow_btn) {
      arrow_btn.classList.toggle("accordion-btn-hover");
      arrow_btn.classList.toggle("accordion-btn-static");
    }
  });
});

