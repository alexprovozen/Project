//Left-navigation
$('.nav_button_block').click(function () {
    if ($('#left_menu').css("left") === "-300px") {
        $('#left_menu').animate({
            left: "0"
        },250);
        $('.icon-bar').css({
            backgroundColor: "white"
        });
        $('.fon').css({
            display: "block"
        });

    } else {
        $('#left_menu').animate({
            left: "-300px"
        },250);
        $('.icon-bar').css({
            backgroundColor: "black"
        });
        $('.fon').css({
            display: "none"
        });
    }
});
$('.nav_right').on('click', function () {
    $('#right_menu').animate({
        right: "0"
    },250);
    $('.fon').css({
        display: "block"
    });

});
$(document).on('click','#close, .fon', function () {
    $('#right_menu').animate({
        right: "-450px"
    },250);
    $('.fon').css({
        display: "none"
    });
});

$('.fon').click(function () {
    $('#right_menu').animate({
        right: "-450px"
    },250);
    $('.fon').css({
        display: "none"
    });
    $('#left_menu').animate({
        left: "-300px"
    },250);
    $('.icon-bar').css({
        backgroundColor: "black"
    });
});

//Expend slider

$('#btn_expend').on('click', function () {
    if ($('.slider_form').css('height')==='238px') {
        $('#btn_expend').css({
            transform: 'rotate(360deg)'
        });
        $('.opacity').animate({
            opacity: "0"
        },100);
        $('.slider_form').animate({
            height: "450px"
        },250);
    } else {
        $('#btn_expend').css({
            transform: 'rotate(180deg)'
        });
        $('.opacity').animate({
            opacity: "1"
        });
        $('.slider_form').animate({
            height: "238px"
        },250);
    }
});

// Анимации

// $.fn.extend({
//     animateCss: function(animationName, callback) {
//         var animationEnd = (function(el) {
//             var animations = {
//                 animation: 'animationend',
//                 OAnimation: 'oAnimationEnd',
//                 MozAnimation: 'mozAnimationEnd',
//                 WebkitAnimation: 'webkitAnimationEnd',
//             };
//
//             for (var t in animations) {
//                 if (el.style[t] !== undefined) {
//                     return animations[t];
//                 }
//             }
//         })(document.createElement('div'));
//
//         this.addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);
//
//             if (typeof callback === 'function') callback();
//         });
//
//         return this;
//     }
// });




