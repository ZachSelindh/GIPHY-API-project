    /* Javascript file for Giphy Api Project */

window.onload = function() {

var APIkey = "SQMK7mUuH7bYIwzAf8ESx5TGCqBavtzz";

$("#gif-content").hide();

    /* Funtion to add a button using the search term from input-field, and adding associated data. */
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

    /* Function to add the GIFs to the page, giving them attributes that will be used as src */
function addGIFs(x) {
    for (i = 0; i < 10; i ++) {
        var newGIF = $("<img>");
        var sourceURL = x.data[i].images.fixed_height_still.url;
        newGIF.attr("src", sourceURL);
        newGIF.attr("image-still", sourceURL);
        newGIF.attr("image-animate", x.data[i].images.fixed_height.url);
        newGIF.attr("state", "still");
        $("#gif-content").prepend(newGIF);
    }
}


$(document).on("click", "#submit-button", function(){
    addButton();
});

    /* Calls the API and uses addGIFs to populate the data section. */
$(document).on("click", ".search-button", function(){
    $("#gif-content").show();
    var titleTag = $(this).attr("data-source");
    var APItag = titleTag.trim();
    var APIURL = "http://api.giphy.com/v1/gifs/search?q=" + APItag + "&api_key=" + APIkey + "&limit=10";

    $.ajax({
        url: APIURL,
        method: "GET"
      }).done(function(response) {
            addGIFs(response);
            var GIFsTitle = $("<h2>");
            GIFsTitle.text(titleTag)
            $("#gif-content").prepend(GIFsTitle);
      });
});

    /* Flips between animated and fixed sources when a GIF is clicked. */
$(document).on("click", "img", function(){
    var GIFstate = $(this).attr("state");
    if (GIFstate === "still") {
        $(this).attr("src", $(this).attr("image-animate"));
        $(this).attr("state", "playing")
    } else if (GIFstate === "playing") {
        $(this).attr("src", $(this).attr("image-still"));
        $(this).attr("state", "still");
    }
});

};