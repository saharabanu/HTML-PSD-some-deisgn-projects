const toggleButton = document.getElementById('navbarToggle');
const navMenu = document.getElementById('navbarList');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
//   toggleButton.style.display = navMenu.classList.contains('active') ? 'none' : 'block';
});
const swiper = new Swiper(".mySwiper", {
 
  autoPlay:{
    delay: 1000,
    disableOnInteraction: true
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
       480: {
           slidesPerView: 3,
          spaceBetween: 3,
         },
       576: {
           slidesPerView: 3,
          spaceBetween: 3,
         },
         786: {
        slidesPerView: 5,
           spaceBetween: 3,
        },
         1024: {
         slidesPerView: 6,
           spaceBetween: 3,
          },
        },
});










