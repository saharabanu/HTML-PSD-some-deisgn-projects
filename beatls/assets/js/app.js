$(function () {
     $('.back_to_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
        
     });
    $(window).scroll(function () {
        // for scrolling
        let myScreen= $(this).scrollTop();
        if(myScreen> 300){
            $('.navbar').addClass("bg-scroll");

        }
        else{
            $('.navbar').removeClass("bg-scroll");
 
        }
     // for back to top
        if(myScreen > 400){
            $('.back_to_top').show();

        }
        else{
            $('.back_to_top').hide(); 
        }
    })
    
});




// js code 

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});



// swiper

var swiper = new Swiper(".mySwiper", {
    
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
      slidesPerView: 2,
      spaceBetween: 24,
      
 
     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
       },
       loop:true
     
      
      
});