var speed = 200 
$('.accordion dt.expanded + dd').slideDown(speed)

$('.accordion dt').on('click', function(){
    var that = $(this)


    // Expandable
    if( that.parent().hasClass('expandable') ){

            that.toggleClass('expanded').next('dd').slideToggle(speed)
        
    // Collapsable
    }else if(that.parent().hasClass('collapsable')){

        if( !that.hasClass('expanded') ){
            that.siblings('dt').removeClass('expanded').next('dd').slideUp(speed)
          }
            
            that.toggleClass('expanded').next('dd').slideToggle(speed)
   // Standard
    }else{
          // make sure its not collapsing itself and reappearing right after.
        if( !that.hasClass('expanded') ){

            that.siblings('dt').removeClass('expanded').next('dd').slideUp(speed)
            that.toggleClass('expanded').next('dd').slideToggle(speed)
        }
    }

    
})

//Event Carousel Java Script
var multipleCardCarousel = document.querySelector("#eventCarousel");
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

if (window.matchMedia("(min-width: 991.5px)").matches) {
    $('.carousel-control-next').on('click', function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition = scrollPosition + cardWidth + 50;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    });

    $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
            scrollPosition = scrollPosition - cardWidth - 50;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        }
    });
}

else {
    $(multipleCardCarousel).addClass("slide");
}