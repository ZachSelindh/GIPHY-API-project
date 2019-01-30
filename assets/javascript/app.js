/* Javascript file for Giphy Api Project */

window.onload = function() {

var APIkey = "SQMK7mUuH7bYIwzAf8ESx5TGCqBavtzz";

function addButton() {
    var newButton = $("<button>");
    var searchInput = $("#input-field").val().trim();
    if (searchInput.length > 0) {
        console.log(searchInput);
        $("#button-array").append(newButton);
        newButton.attr("data-source", searchInput);
        newButton.attr("class", "search-button");
        newButton.text(searchInput);
    } else {
    }
    $("#input-field").val("");
}

function addGIFs(x) {
    for (i = 0; i < 10; i ++) {
        var newGIF = $("<img>");
        var sourceURL = x.data[i].images.fixed_height_still.url;
        newGIF.attr("src", sourceURL);
        $("#gif-content").prepend(newGIF);
    }
}

$(document).on("click", "#submit-button", function(){
    addButton();
});

$(document).on("click", ".search-button", function(){
    var titleTag = $(this).attr("data-source");
    var APItag = titleTag.trim();
    var APIURL = "http://api.giphy.com/v1/gifs/search?q=" + APItag + "&api_key=" + APIkey + "&limit=10";

    $.ajax({
        url: APIURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        addGIFs(response);
        var GIFsTitle = $("<h1>");
        GIFsTitle.text(titleTag)
        $("#gif-content").prepend(GIFsTitle);
      });
});
};


