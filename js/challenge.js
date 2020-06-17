$(function () {
    $(".skill-link").click(function (e) {
        e.stopPropagation();
        $(".bg").toggle();
        var link = $(this).children().first().text();
        console.log(link);
        $("#player").attr("src", link);
        $(".popup").toggle();
    });

    $("body").click(function () {
        if ($(".popup").css("display") === "none")
            return;
        $(".bg").toggle();
        $(".popup").hide();
        $("#player").attr("src", "");
    });
});