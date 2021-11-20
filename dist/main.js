// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
  burgerMenu.classList.toggle("active");
});

if (window.innerWidth < 1024) {
  const navLinks = document.querySelectorAll(".nav_link > a");
  const dropdownMenus = document.querySelectorAll(".dropdown_menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active className
      dropdownMenus.forEach((menu) => {
        if (link.parentNode != menu.parentNode) {
          menu.classList.remove("active");
        }
      });
      // add active className to current dropdown
      const dropdownMenu = link.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("active");
      }
    });
  });
}
// MENU - END

// SEARCH INPUT - START
const searchBtn = document.querySelector(".search_btn");
const searchInput = document.querySelector(".search_input");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("active");
  });
}
// SEARCH INPUT - END

// DISCUSSION - START
const discussionItems = document.querySelectorAll(".discussion");
const discussionAdd = document.querySelector(".discussion_add");
const discussionClose = document.querySelector(".discussion_close")

discussionAdd.addEventListener('click', () => {
  discussionItems.forEach(item => item.classList.add('active'));
})

discussionClose.addEventListener('click', () => {
  discussionItems.forEach(item => item.classList.remove('active'));
})
// DISCUSSION - END 

// JQUERY - START
$(document).ready(function () {
  $('.js-select').select();

  $('.matches').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
// JQUERY - END