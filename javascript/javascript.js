$(window).ready(function () {
    var queryURL;
    var foodImg;
    var apiCallValue;
    var rating = [];
    var gifPlayArr = [];
    var gifStillArr = [];


    //Event listener for buttons: 

    $("button").on("click", function () {
        
        //variable of the attribute: 
        var foodName = $(this).attr("data-name");
        console.log(foodName);
        
        queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodName + "&apikey=l1dcAyazOlf93XAFgWIJPDaWyzwMIvvT&limit=5";
                
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (let i = 0; i < 10; i++) {
                //Add still images
                $("#gifDisplay").prepend("<img src=" + response.data[i].images.original_still.url + ">");
                $("#gifDisplay").prepend("<p>Rating: " + response.data[i].rating.toUpperCase() + "</p>");
                console.log(response);
                console.log("response", response.data[i].images.downsized)
            }
        });
    });

    $("#gifDisplay").on("click", function() { 
        console.log("image clicked");
        ("#gifDisplay").empty();

    })

});







//when user clicks on button - page should grab 10 static non-animated gifs.



//click on gif = animate. 
//another click on gif = stop/ 
//display rating under each gif/

//add form to page that takes value from user input box and adds it to topics array. 
