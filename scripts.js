$(document).ready(function () {
    $("#blackbar").mouseover(
        function () {
            $("#blackbar").css({
                "display": "none"
            });
            $("#sidebar").css({
                "display": "block"
            });
        });
    $("#sidebar").mouseleave(
        function () {
            $("#blackbar").css({
                "display": "block"
            });
            $("#sidebar").css({
                "display": "none"
            });
        });
});
