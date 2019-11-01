
//array of food: 
const food = ['pizza', 'hamburger', 'coffee', 'cake', 'pasta']; 

//append buttons via loop: 

function createButtons() { 
    for (let index = 0; index < food.length; index++) {
        $("#buttons").append("<button>" + food[index] + "</button>")     
    }
}

var value;

function displayGifs() { 
    
    value = "pizza";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + value + "&apikey=l1dcAyazOlf93XAFgWIJPDaWyzwMIvvT&limit=5";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (let i = 0; i < 10; i++) {
            $("#gifDisplay").prepend("<img src=" + response.data[i].images.downsized.url + ">")
            console.log("response", response.data[i].images.downsized)
        }
    });
    
};

createButtons();
displayGifs();




//when user clicks on button - page should grab 10 static non-animated gifs.



//click on gif = animate. 
//another click on gif = stop/ 
//display rating under each gif/

//add form to page that takes value from user input box and adds it to topics array. 
