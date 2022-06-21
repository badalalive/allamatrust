// $(document).ready(function () {
//     // alert("hello"); 
//     $(".items li a").click( function(e) {
//         let target = $(this).attr("href");
//         $("html.body").animate({
//             screenTop:$(target).offset().top;
//         }, 100);
//         e.preventDefault();
//     })
// });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      margin: 5,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  });
  });