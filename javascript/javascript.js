
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



function integerVsNot() { 
    var num = prompt("Input a number:");
    if ( num % 1 ===0) { 
        console.log("number is whole")
    } else if ( num % 1 < 1) { 
        console.log("number is an int")
    } else { 
        console.log("you didn't put a valid number")
    }
    //     console.log("number is an integer");
    // }

}

integerVsNot();


//when user clicks on button - page should grab 10 static non-animated gifs.



//click on gif = animate. 
//another click on gif = stop/ 
//display rating under each gif/

//add form to page that takes value from user input box and adds it to topics array. 
