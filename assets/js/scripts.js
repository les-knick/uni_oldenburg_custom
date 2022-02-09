window.onscroll = function() {
    changeHomeLogoOnScroll()
};

document.addEventListener("DOMContentLoaded", changeHomeLogo);

function changeHomeLogo() {
    jQuery(document).ready(function($) {
        $(".site-header--frontpage .site-branding__logo img").attr("src", "themes/custom/uni_oldenburg_custom/assets/img/logo-free.png");
    });
}

function changeHomeLogoOnScroll() {
    jQuery(document).ready(function($) {
        //you can now use $ as your jQuery object.
        var body = $('body');

        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            $(".site-header--frontpage .site-branding__logo img").attr("src", "themes/custom/uni_oldenburg_custom/assets/img/logo-onwhite.jpg");
        } else {
            $(".site-header--frontpage .site-branding__logo img").attr("src", "themes/custom/uni_oldenburg_custom/assets/img/logo-free.png");
        }
    });
}