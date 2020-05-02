$(document).ready(function() {    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var headerText = $('.js--header-text');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

        if (headerText.hasClass('long-header-text')) {
            headerText.removeClass('long-header-text');
        } else {
            headerText.addClass('long-header-text');
        }
    });
    
    /* For the sticky navigation */
    $('.js--world-row').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});