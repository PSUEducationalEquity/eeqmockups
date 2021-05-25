$(document).ready(function () {

    /**
     * Adjust the hero image and office name when toggling the nav menu
     *
     * Slides the hero image up/down when showing/hiding the nav menu and
     * applies a style to control how the office name is displayed inside
     * the menu and overlayed on the hero image
     */
    $('.navbar-responsive')
        .on('show.bs.collapse', function (event) {
            $('.hero').toggleClass('collapsed')
            if ($('.hero img').css('display') != 'none') {
                $('.hero img')
                    .addClass('collapsable')
                    .slideUp(function () {
                        $(this).removeClass('d-none d-md-block')
                    })
            }
        })
        .on('hide.bs.collapse', function (event) {
            $('.hero').toggleClass('collapsed')
            if ($('.hero img').hasClass('collapsable')) {
                $('.hero img')
                    .removeClass('collapsable')
                    .slideDown(function () {
                        $(this).addClass('d-none d-md-block')
                    })
            }
        })

});
