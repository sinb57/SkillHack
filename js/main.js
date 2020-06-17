
var mql = window.matchMedia("screen and (max-width: 1024px)");

mql.addListener(function(e) {
    if(e.matches) {
        $('.pages').css('display', 'none');
        setTimeout(function(){
            $('.pages').css('display', 'block');
        }, 0);
    } else {
        $('.pages').css('display', 'none');
        setTimeout(function(){
            $('.pages').css('display', 'block');
        }, 0);
    }
});




$(document).ready(function () {

    var curPage = 1;
    var numOfPages = $(".page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".page-";

    var $nav = $('#slider-nav');
    var $slide = $('.pages').children();

    $slide.each(function (index) {
        var i = index + 1;
        $nav.append('<a id=' + 'slider-' + i + '>' + i + '</a>');
    });


    $nav.find('a').on("click", function (pos) {

        $nav.find('.active').removeClass('active');
        $(this).addClass('active');

        curPage = $(this).index()+1;

        for (var i = 1; i < curPage; i++) {
            $(pgPrefix + i).addClass("inactive").addClass("active");
        }

        for (var i = curPage; i < numOfPages+1; i++) {
            $(pgPrefix + i).removeClass("inactive").removeClass("active");
        }

        $(pgPrefix + curPage).addClass("active");


    }).first().addClass('active');

    function pagination() {
        console.log(curPage);
        scrolling = true;

        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");

        $nav.find('.active').removeClass('active');
        $('#slider-'+curPage).addClass('active');

        setTimeout(function () {
            scrolling = false;
        }, animTime);
    };

    function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
    };

    function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
    };

    $(document).on("mousewheel DOMMouseScroll", function (e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
        } else {
            navigateDown();
        }
    });

    $(document).on("keydown", function (e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    });

});
