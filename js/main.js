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

var address = [
    "https://uid.me/cloud_richard",
    "https://uid.me/olivia_cameron",
    "https://uid.me/carlos_tamaoki",
    "https://uid.me/alexmoloney",
    "https://uid.me/marjana_borodan"
];
var i = 0;
$("#display").attr("href", address[i]).text(address[i]);
$(".slick-prev").click(function () {
    --i;
    if (i===-1) {
        i=address.length-1;
    }
    $("#display").attr("href", address[i]).text(address[i]);
});
$(".slick-next").click(function () {
    ++i;
    if (i===address.length) {
        i=0;
    }
    $("#display").attr("href", address[i]).text(address[i]);
});