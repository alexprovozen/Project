$(document).ready(function() {
    $('#fullpage').fullpage({
        //Навигация
        menu: '#menu',
        lockAnchors: false,
        anchors:['Home', 'uCoz', 'uKit', 'uShop', 'uPartner',
            'uSocial', 'My Sites', 'uID', 'uTemplate', 'uRan', 'Contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'uCoz', 'uKit', 'uShop', 'uPartner',
            'uSocial', 'My Sites', 'uID', 'uTemplate', 'uRan', 'Contact'],
        sectionsColor: ['#fafafc', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        afterLoad: function(anchorLink, index){
            if (anchorLink == "uCoz") {
                $(".slider_form").animate({
                    bottom: "0"
                }, 250);
            }
            if (anchorLink == "uKit") {
                $("#slider_border").animate({
                    right: "0"
                }, 450);
                $(".block_right").animate({
                    left: "0"
                }, 450);
            } else {
                $("#slider_border").css({
                    right: "100vw"
                });
                $(".block_right").css({
                    left: "100vw"
                });
            }
        }
    });
});

