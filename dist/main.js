// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
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

// SLICK - START
$('.matches').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 300,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// SLICK - END