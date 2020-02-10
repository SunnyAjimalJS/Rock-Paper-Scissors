// 1. Get the game to load on window.onload 
// 2. Event Listener for playerChoice click and the random number
// 3. Get the computer to make it's move 
// 4. Display in innerHTML the result/answer for what the computer choice was 
// 5. Alerts for the outcomes - win/lose/draw




window.onload = () => {
    const playerChoice = document.querySelectorAll('.playerChoice');
    let result = document.querySelector('.answer');
    const randomNumber = Math.floor(Math.random() * 3);
    const moves = ['rock', 'paper', 'scissors'];
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener("click", () => {
        const computerMove = moves[randomNumber];
        if (computerMove === 'rock'){
            result.innerHTML="Computer chose rock too - it's a tie!";
        } else if (computerMove === 'paper'){
            result.innerHTML= "Computer chose paper - you lose!";
        } else if (computerMove === 'scissors'){
            result.innerHTML= 'Computer chose scissors - you win!';
        }
    })

    paper.addEventListener("click", () => {
        const computerMove = moves[randomNumber];
        if (computerMove === 'paper'){
            result.innerHTML= "Computer chose Paper - it's a tie!";
        } else if (computerMove === 'scissors'){
            result.innerHTML= "Computer chose Scissors - you lose!";
        } else if (computerMove === 'rock'){
            result.innerHTML= "Computer chose Rock - you win!"
        }
    })

    scissors.addEventListener("click", () => {
        const computerMove = moves[randomNumber];
        if (computerMove === 'scissors'){
            result.innerHTML= "It's a tie!";
        } else if (computerMove === 'rock'){
            result.innerHTML= "you lose!";
        } else if (computerMove === 'paper'){
            result.innerHTML= "you win!"
        }
    })
}   
