let scoreU = 0

// First lets set up a prompt to create an input for yourChoice


// let yourChoice = prompt("What do you choose??")

// console.log(yourChoice);

// Now we have to generate a computerChoice

// let numChoice = Math.floor(Math.random() * 10)


// // Assign the numCHoice numeric Value  a Rock/ Paper/ Scissors value using comparison operators

// function generateSelection() {
//         if (numChoice <= 3) {
//             return ('rock');
//         } else if (numChoice > 3 && numChoice < 7) {
//             return ('paper');
//         } else {
//             return ('scissors');
//         }
//     }


// let itsChoice = generateSelection();
// console.log(itsChoice);

// Now we need to compare the selections to decide a winner 

function gamePlay() {
    if (yourChoice === itsChoice) {
        console.log('DRAW!!')
    } else if(yourChoice == 'rock' &&
                itsChoice == 'scissors') {
        console.log('YOU WIN!!');
    } else if(yourChoice == 'rock' &&
                itsChoice == 'paper') {
        console.log('YOU LOSE!!');
    } else if(yourChoice == 'paper' &&
                itsChoice == 'rock') {
        console.log('YOU WIN!!');
    } else if(yourChoice == 'paper' &&
                itsChoice == 'scissors') {
        console.log('YOU LOSE!!')
    } else if(yourChoice == 'scissors' &&
                itsChoice == 'paper') {
        console.log('YOU WIN!!')
    } else if(yourChoice == 'scissors' &&
                itsChoice == 'rock') {
        console.log('YOU LOSE!!')
    }

}
// gamePlay()

// Now we put all of this together under a game()
// First we get yourChoice, them itsChoice, them gamePlay


function game() {
    // yourChoice
    let userInput = prompt("What do you choose??");
    let yourChoice = userInput.toLowerCase()

    console.log(yourChoice.toLowerCase());
    // itsChoice
    let numChoice = Math.floor(Math.random() * 10);
    function generateSelection() {
        if (numChoice <= 3) {
            return ('rock');
        } else if (numChoice > 3 && numChoice < 7) {
            return ('paper');
        } else {
            return ('scissors');
        }
    }
    let itsChoice = generateSelection();
    console.log(itsChoice);
    // gameplay()
    function gamePlay() {
        if (yourChoice === itsChoice) {
            console.log('DRAW!!');
        } else if(yourChoice == 'rock' &&
                    itsChoice == 'scissors') {
            console.log('YOU WIN!!'); 
            // A WIN!
             scoreU = scoreU + 1;
        } else if(yourChoice == 'rock' &&
                    itsChoice == 'paper') {
            console.log('YOU LOSE!!');
        } else if(yourChoice == 'paper' &&
                    itsChoice == 'rock') {
            console.log('YOU WIN!!');
            // A WIN!
            scoreU = scoreU + 1;
        } else if(yourChoice == 'paper' &&
                    itsChoice == 'scissors') {
            console.log('YOU LOSE!!')
        } else if(yourChoice == 'scissors' &&
                    itsChoice == 'paper') {
            console.log('YOU WIN!!');
            // A WIN!
            scoreU = scoreU + 1;
        } else if(yourChoice == 'scissors' &&
                    itsChoice == 'rock') {
            console.log('YOU LOSE!!')
        }
        console.log(scoreU);
    }
    gamePlay()
}

// Create Function for the FINAL SCORE

function finalScore() {
    if (scoreU >= 3) {
        alert("You are the CHAMPION!!!");
    } else {
        alert("YOU LOSE!!");
    }
}

game();
game();
game();
game();
game();
finalScore();






