var charcterMax = 140;

var personTweet = prompt("Compose your tweet")
alert("You have" + (charcterMax - personTweet.length) + "left.");

function wordCount() {
    if (personTweet.length >= charcterMax){
        alert("you've gone over charcter limit");
        personTweet.slice(0,140);
    }
}

console.log(personTweet);


//Put wordcount in the loop.
wordCount();

//We're trying to make our robot, given a set amount of money we give, calculate how many bottles we can get at 1.5$ a pop? 
//And how much money we have left by first asking do we have a remainder of bottles left (i.e we bough 3.333 bottles)
//If so, ask how much is the remainder is worth by multiplying the remainder by the full value of 1 bottle
//Giving us the value of our 0.333 bottle of milk for the money we have left
//If no remainder, then just return zero for the money we have left



bottlePrice = 1.5;

function getMilk(moneyGiven) { //takes in a parameter for the value of money given
    bottlesObtainable = moneyGiven % bottlePrice
    bottlesObtainableRounded = Math.floor(moneyGiven/bottlePrice) 
    //^to help find the remaining parts of those milk bottoles, Math.floor always rounds down.
    
    if (bottlesObtainable ==! 0) { //means we have a remainder
       remainingBottle = bottlesObtainable - bottlesObtainableRounded
       moneyLeft = remainingBottle*bottlePrice
    } 

    else { //means we don't
        moneyLeft = "0";
    }

    console.log("we can buy" + bottlesObtainableRounded + "of milk and end up with" + moneyLeft + "left");
    //add a rounding thing onto bottlesObtainable.

    //next we can program a way to ask if it's above a certain threshold that their might be a chance the guy might barter.
}
