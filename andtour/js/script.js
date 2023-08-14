const toggleButton = document.getElementById('navbarToggle');
const navMenu = document.getElementById('navbarList');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
//   toggleButton.style.display = navMenu.classList.contains('active') ? 'none' : 'block';
});

const swiper = new Swiper(".swiper-container", {
    loop: true,
    // autoplay: {
    //   delay: 1000, // Change the delay in milliseconds (e.g., 3000 for 3 seconds)
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const swiper2 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });