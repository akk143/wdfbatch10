//UI

const minnum = document.querySelector('.minnumber'),
      maxnum = document.querySelector('.maxnumber'),
      getinput = document.querySelector('#guessnumber'),
      getbtn = document.querySelector('#btn'),
      message1 = document.querySelector('.message1'),
      message2 = document.querySelector('.message2'),
      getgameform = document.getElementById('gameform');


const min = 1,
      max = 20,
      winnignum = randomnum(min,max);

let gameleft = 5;

minnum.textContent = min;
maxnum.innerHTML = max;

getbtn.addEventListener('click',function(e){
    // console.log('hay i am working');
    // console.log(getinput.value);
    // console.log(typeof getinput.value);

    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);

    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        // console.log(`Please enter a number between ${min} to ${max}`);
        // message2.textContent = `Please enter a number between ${min} to ${max}`;
        setmessage2(`Please enter a number between ${min} to ${max}`,"red");
    }

    if(guess === winnignum){
        // Gameover WON
        // console.log('You Won');

        // disable input
        // getinput.disabled = true;

        // getinput border color to green
        // getinput.style.borderColor = 'green';

        // message1
        // message1.textContent = `${winnignum} is correct! You Won`;
        // message1.style.color = 'green';

        // setmessage1(`${winnignum} is correct!! You Won`,"green");

        // play again?
        // getbtn.value = 'Play Again';

        gameover(true,`${winnignum} is correct!! You Won`,"green")

    }else{
        // gameleft -=1;
        gameleft--;
        
        if(gameleft === 0){

            // Gameover Lose
        //    getinput.disabled = true;
   
        //    getinput.style.borderColor ='red';
   
        //    message1.textContent = `Game Over, You Lose!, The correct number is ${winnignum} `;
        //    message1.style.color = 'red';
   
        //     setmessage1(`Game Over, You Lose, The correct number is ${winnignum}`,"red");
        
        //    getbtn.value ='Play Again'; 

        gameover(false,`Game Over, You Lose, The correct number is ${winnignum}`,"red")
       }else{
           getinput.style.borderColor = 'red';
   
        //    message1.innerHTML = `${guess} is not correct! ${gameleft} guess left`;
        //    message1.style.color = 'blue';

        setmessage1(`${guess} is not correct! ${gameleft} guess left`,"blue");
        
        // clear getinput old value
        getinput.value = "";

        getinput.focus();
       }

    }
    
    e.preventDefault();

});

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}
function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = ""
    },2000);
}

function gameover(won,msg){
    let color;

    won === true ? color = "green" : color = "red";

    // disable input
    getinput.disabled = true;

    // getinput border color to red
    getinput.style.borderColor = 'color';

    // message1
    setmessage1(msg,color);

    // play again?
    getbtn.value = 'Play Again';
}

// Add Class
// getbtn.className = "btn playagain";
getbtn.classList.add('playagain');


getgameform.addEventListener('mousedown',function(e){
    // e.target.classList.contains('playagain');
    if(e.target.className === "btn playagain"){
        // console.log('i am working');

        window.location.reload();
    }

});

function randomnum(min,max){
    let getrdm = Math.floor(Math.random()*(max-min)+min);
    return getrdm;
}

// console.log(randomnum(1,10));
// console.log(winnignum);