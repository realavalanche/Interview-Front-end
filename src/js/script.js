$(document).ready(function() {    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        // var header = $('header');
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
            // header.removeClass('long-header');
        } else {
            headerText.addClass('long-header-text');
            // header.addClass('long-header');
        }
    });
});