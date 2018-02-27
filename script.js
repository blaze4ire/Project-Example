var visibleText = "Show Less";
var hiddenText = "Show More";
$(document).ready(function () {
    $(".button-example button").click(function () {
        $(this).toggleClass("visible");
        if ($(this).hasClass("visible")) {
            $(this).html(visibleText);
        } else {
            $(this).html(hiddenText);
        }
        
        $(this).next().toggleClass("visible");
    })
});