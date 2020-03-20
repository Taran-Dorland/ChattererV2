"use strict"

$(document).ready(function() {

    var btn = $("#pressthis");
    var ctn = $(".chat-container");

    var i = 0;

    var queue = new Array();

    btn.on('click', function() {

        //Push message into the queue
        queue.push("Test");

        //Check the amount of messages currently being displayed
        if (queue.length > 50) {

            queue.shift();
            $("div.chat-msg").first().remove();
        }

        //Check if the user's scroll is at the bottom
        var scrollCheck = 0;
        if (ctn.prop("scrollHeight") - ctn.scrollTop() == ctn.height()) {
            scrollCheck = 1;
        }

        //Insert the new message at the bottom of the chat container
        ctn.append("<div class='row chat-row'><div class='chat-msg'>" + "Test" + i + "</div></div>");

        //If user's scroll was at the bottom, force the scroll down
        //upon new message
        if (scrollCheck == 1) {
            ctn.scrollTop(ctn.prop("scrollHeight"));
        }

        i++;
    });

});