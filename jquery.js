// $(document).ready() is the jQuery version of DOMContentLoaded
$(document).ready(function() {
    
    // 1. Click event for the Hide button
    $("#btn-hide").click(function() {
        // fadeOut is a built-in jQuery animation
        $("#demo-box").fadeOut("fast");
    });

    // 2. Click event for the Show button
    $("#btn-show").click(function() {
        // fadeIn is the opposite
        $("#demo-box").fadeIn("fast");
    });

    // 3. Click event for the Toggle Color button
    $("#btn-toggle").click(function() {
        // css() allows you to change styles instantly
        // logic: check current color and switch
        const box = $("#demo-box");
        if (box.css("background-color") === "rgb(173, 216, 230)") { // lightblue
            box.css("background-color", "salmon");
            box.text("I am now Salmon!");
        } else {
            box.css("background-color", "lightblue");
            box.text("I am a demo box!");
        }
    });

});