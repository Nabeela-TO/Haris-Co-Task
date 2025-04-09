// Initialize the Swiper for Astral Talent section
var swiperAstralTalent = new Swiper('.swiper-astral-talent', {
   slidesPerView: 1,   // You can adjust the number of visible slides as needed
   spaceBetween: 10,    // Space between slides
   navigation: {
     nextEl: '.swiper-button-next',  // Right navigation button
     prevEl: '.swiper-button-prev',  // Left navigation button
   },
   loop: true,          // Enable looping
});











// Initialize Swiper for "Our Work" section
var swiperOurWork = new Swiper('.swiper-our-work', {
   slidesPerView: 1, // Show 1 slide at a time
   spaceBetween: 10,  // Space between slides
   navigation: {
     nextEl: '.swiper-button-next',  // Right navigation button
     prevEl: '.swiper-button-prev',  // Optional left navigation button
   },
   loop: true,  // Enable looping for continuous sliding
   breakpoints: {
     768: {
       slidesPerView: 2,  // 2 slides per view on tablets
     },
     1024: {
       slidesPerView: 3,  // 3 slides per view on larger screens
     },
   },
});







// Initialize Swiper for the team section
var swiperTeam = new Swiper('.swiper-team', {
   slidesPerView: 1,  // Default: 1 slide per view
   spaceBetween: 30,  // Space between slides
   navigation: {
     nextEl: '.swiper-button-next',  // Right navigation button
     prevEl: '.swiper-button-prev',  // Left navigation button
   },
   loop: true,  // Infinite loop for the team slides
   breakpoints: {
     768: {
       slidesPerView: 2,  // 2 slides per view on tablets
     },
     1024: {
       slidesPerView: 3,  // 3 slides per view on larger screens
     },
   },
});








function openMenu() {
    document.getElementById("mobileMenu").classList.add("open");
    document.getElementById("mobileBackdrop").classList.add("open");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("mobileBackdrop").classList.remove("open");
}
