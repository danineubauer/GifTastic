
//array of food: 
const food = ['pizza', 'hamburger', 'coffee', 'cake', 'pasta']; 

//append buttons via loop: 

function createButtons() { 
    for (let index = 0; index < food.length; index++) {
        $("#buttons").append("<button>" + food[index] + "</button>")     
    }
}

createButtons();