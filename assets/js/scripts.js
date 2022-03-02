window.onscroll = function() {
    changeHomeLogoOnScroll()
};

document.addEventListener("DOMContentLoaded", changeHomeLogo);
document.addEventListener("DOMContentLoaded", noLinksInLinkblock);
document.addEventListener("DOMContentLoaded", getSearchString);


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

function noLinksInLinkblock() {
    jQuery(document).ready(function($) {
        var link_block = $('.region--link-block');
        var link_block__content = $('.region--link-block .block__content a');
        if (link_block__content[0]) {
            //content vorhanden
        } else {
            //kein content
            link_block.css('display', 'none');
        }
    });
}

function storeSearchString() {
    jQuery(document).ready(function($) {
        var storedSearchString = document.getElementById("searchString");
        localStorage.setItem("searchString", storedSearchString.value);
        window.location.href = "/volltextsuche";
    });
}


function getSearchString() {
    jQuery(document).ready(function($) {
        var searchInputField = document.getElementById("edit-search-api-fulltext");
        var searchString = localStorage.getItem("searchString");

        if (searchString != "alreadySearchedThis" && searchString) {
            searchInputField.value = searchString;

            localStorage.setItem("searchString", "alreadySearchedThis");

            var submitBtn = document.getElementById('views-exposed-form-duplicate-of-volltextsuche-page-1');
            submitBtn.submit();
        } else if (!searchedString) {
            searchInputField.value = "";
        }
    });
}