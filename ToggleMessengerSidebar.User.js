// ==UserScript==
// @name Toggle Messenger Sidebar
// @namespace http://jamesswandale.com/
// @version 0.1
// @description Button to hide messengers list of conversations 
// @match https://www.messenger.com/*
// @copyright 2015+, James Swandale
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
 
 
$(document).ready(function() {
  $('body').append('<input type="button" value="Hide Sidebar" id="showHideButton" style="background-color:#000000; color:#FFFFFF;">');
  $("#showHideButton").css("position", "fixed").css("top", 15).css("left", 60);
    $("#showHideButton").click(function(){
        var convThreads = document.getElementsByClassName("_1enh");
        if(convThreads.item().style.display == 'none'){
            convThreads.item().style.display = 'block';
            showHideButton.value = "Hide Sidebar";
        }else {
            convThreads.item().style.display = 'none';
            showHideButton.value = "Show Sidebar";
        }
    });
});
