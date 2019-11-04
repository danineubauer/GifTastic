$(window).ready(function() {
    var queryURL;
    var apiCallValue;
    var rating = [];
    var gifStillArr = [];
    var gifPlayArr = [];


    //Event listener for buttons: 

    $(document).on("click", ".foodbtn", function() {

        //replaces all spaces with "+" 
        apiCallValue = ($(this).data("name").replace(/ /g, "+"));
        console.log(apiCallValue);
        console.log("gifplay", gifPlayArr)
        console.log("gifstill", gifStillArr)



        queryURL = "http://api.giphy.com/v1/gifs/search?q=" + apiCallValue + "&apikey=l1dcAyazOlf93XAFgWIJPDaWyzwMIvvT&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) { 
            for (var i = 0; i < response.data.length; i++) { 
                //push gif url to arrays - still and rating:
                console.log(response);

                gifStillArr.push(response.data[i].images.downsized_still.url);
                rating.push(response.data[i].rating.toUpperCase());

                //prepend gif rating and img:
                $("#gifInsert").prepend("<p> Rating: " + (rating[rating.length - 1]) + "<p>")
                $("#gifInsert").prepend("<img id=" + (gifStillArr.length - 1) + " src=" + gifStillArr[(gifStillArr.length-1)] + ">");     
                gifPlayArr.push(response.data[i].images.downsized.url);
            }
        });
    });
    
    $(document).on("click", "img", function () { 
        if ($(this).attr("src") == gifStillArr[this.id]) { 
            $(this).attr("src", function () { 
                return gifPlayArr[this.id];
            })
        } else {
            $(this).attr("src", function () { 
                return gifStillArr[this.id];
            });
        };
    });

    $("#submitButton").on("click", function(enter) { 
        enter.preventDefault();
        var newBtnVal = $("#submitForm").val().trim(); 
        var newBtn = $("<button>");
        newBtn.addClass("foodbtn"); 
        newBtn.data("name", newBtnVal);
        newBtn.text(newBtnVal);
        $("#buttonInsert").append(newBtn);
        $("#submitForm").val("");
    });
});