document.addEventListener("DOMContentLoaded", noLinksInLinkblock);
document.addEventListener("DOMContentLoaded", getSearchString);


/* function changeHomeLogo() {
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
} */

function noLinksInLinkblock() {
    jQuery(document).ready(function($) {
        var link_block = $('#block-uni-oldenburg-custom-wisskilinkblock');
        var link_block__content = $('#block-uni-oldenburg-custom-wisskilinkblock .block__content a');
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
        window.location.href = "/objekt_recherche";
    });
}


function getSearchString() {
    jQuery(document).ready(function($) {
        var searchInputField = document.getElementById("edit-search-api-fulltext");
        var searchString = localStorage.getItem("searchString");

        if (searchString != "alreadySearchedThis" && searchString) {
            searchInputField.value = searchString;

            localStorage.setItem("searchString", "alreadySearchedThis");

            var submitBtn = document.getElementById('views-exposed-form-objektrecherche-page-1');
            submitBtn.submit();
        } else if (!searchedString) {
            searchInputField.value = "";
        }
    });
}

function toggleFacets() {
    jQuery(document).ready(function($) {
        var toggleBtn = $('#v-section--sidebar__toggle');
        var RegionSidebar = $('.v-section--sidebar');

        if (toggleBtn.hasClass('toggled')) {
            //dropdown open
            toggleBtn.removeClass('toggled');
            RegionSidebar.addClass('v-section--sidebar__filter--open');
            RegionSidebar.removeClass('v-section--sidebar__filter--closed');
        } else {
            toggleBtn.addClass('toggled');
            RegionSidebar.addClass('v-section--sidebar__filter--closed');
            RegionSidebar.removeClass('v-section--sidebar__filter--open');
        }

    });
}