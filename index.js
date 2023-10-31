        //   Without Function
// let computerscore = 0
// let userscore = 0
// while( userscore < 3 && computerscore < 3 )
// {
//     let game = ["snake", "water",  "gun" ]
//     let random = game[Math.floor(Math.random() * game.length)]  

//     const userConfirmed = confirm("Do you want to play a round of Snake, Water, and Gun?");

//     if(!userConfirmed){
//         alert("Game Terminated !");
//         break
//     }
//     let user = prompt("Choose snake, water, or gun:").toLowerCase(); 
    
//     if( user != "water" && user != "snake" && user != "gun" )
//         {
//             alert("Invalid choice. Please choose snake, water, or gun.")
//             continue;
//         }

//     alert(`User chose: ${user}\nComputer chose: ${random}`);
    
//     if( user == random)
//     {
//         alert("its a tie")
//     }
//     else if( 
//         (user == "snake" && random == "water") ||
//         (user == "gun" && random == "snake") ||
//         ( user == "water" && random == "gun" )
//     ){
//         alert("User wins")
//         userscore++
//     }else
//     {
//         alert("Computer wins")
//         computerscore++
//     }
//     alert(`Score : User ${userscore} - ${computerscore} ` )
    

// }


//            Function Based


let userscore = 0
let computerscore = 0
let rounds = 0 


function GenerateRandom(){
    let choices = ["snake","gun","water"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function playAround(userChoice) 
{
    let computerChoice = GenerateRandom();
    alert(`User chose: ${userChoice}\nComputer chose: ${computerChoice}`);
    if(userChoice == computerChoice )
    {
        alert("Its a Tie !")
    }else if(
        (userChoice == "snake" && computerChoice == "water" ) ||
        (userChoice == "gun" && computerChoice == "snake") ||
        (userChoice == "water" && computerChoice == "gun")
    ){
        alert("User wins the round !")
        userscore++
    }else
    {
        alert("Computer wins the around")
        computerscore++
    }
    rounds++
    console.log(rounds)
    alert(`Score : User  ${userscore} - ${computerscore} Computer` )
}


while( userscore < 3 && computerscore <3 )
{
    const userConfirmed = confirm("Do you want to play a round of Snake, Water, and Gun game?")

    if(!userConfirmed)
    {
        alert("Game Terminated by User ")
        break;
    }
    let userChoice = prompt("Choose snake, water, or gun:").toLowerCase();
    
    if( userChoice != "water" && userChoice != "snake" && userChoice != "gun" )
    {
        alert("Invalid choice. Please choose snake, water, or gun.")
        continue;
    }

playAround(userChoice)  
}

if (userChoice > computerChoice) {
    alert("User wins the game!");
  } else if (userChoice < computerChoice) {
    alert("Computer wins the game!");
  } else {
    alert("It's a tie!");
  }