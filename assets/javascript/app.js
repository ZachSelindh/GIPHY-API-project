/* Javascript file for Giphy Api Project */

window.onload = function() {

var APIkey = "SQMK7mUuH7bYIwzAf8ESx5TGCqBavtzz";

var APItag = ""

var APIrating = ""

var URL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIkey + "&tag=" + 
            APItag + "&rating=" + APIrating;


console.log(URL);

function addButton() {
    var newButton = $("<button>");
    var searchInput = $("#input-field").val();
    if (searchInput.length > 0) {
        console.log(searchInput);
        newButton.attr("data-source", searchInput);
        newButton.attr("class", "search-button");
        newButton.text(searchInput);
        $("#button-array").append(newButton);
    } else {
    }
    $("#input-field").val("");
}

$("#submit-button").on("click", function(){
    addButton();
});

$(".button").on("click", function(){
    

});


};


