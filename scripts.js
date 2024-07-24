$(document).ready(function(){
    $('.testimonials-slider, .pricing-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();
        $(this).toggleClass('active');
    });
});
