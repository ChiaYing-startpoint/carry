$(document).ready(function () {
   
    //至頂按鈕
    $('.btn-top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    
    //漢堡選單出現
    $('.hamber').click(function (e) { 
        e.preventDefault();
        $('.hamber-content').addClass('active');
    });
    
    //漢堡選單離開
    $('.btn-close-hamber').click(function (e) { 
        e.preventDefault();
        $('.btn-close').parents('nav').removeClass('active');
    });
    
    
    //index-story的 swiper
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        grabCursor: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        
    });


    // index-blog的swiper
    const swiper1 = new Swiper('#swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        grabCursor: true,

        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        }        
    });

    
   

    
    // // prodocuDital 的 product-like
    // const swiper3 = new Swiper('#swiper3', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    //     breakpoints: {
    //         640: {
    //             slidesPerView: 1,
    //             spaceBetween: 24,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 24,
    //         },
    //         1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 24,
    //         },
    //     }
    // });
});