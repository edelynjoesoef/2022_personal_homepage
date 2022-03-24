'use strict'
//queryselector is basically saying if we do something to that button which in this case
// is the button with the id= dark-mode, it will do something 
// however it only resturns the first element within that document that matches 
// the specified selector, or group of slectors
// so if we put another tag with the same id/selector, this fucntion will not apply
// unless you use querySelectorAll or querySelector

$(window).on('load', () => {
    //const switchButton = document.querySelector('.btn') //this refers to the one in about section 
    const switchButton = document.getElementById('dark-mode'); /*both code works*/

    //console.log(switchButton);

    switchButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        //toggle is basically going back and forth from the class or id specified in html doc/css to another class or id
        //basically we want that class to toggle whenever that button (switchButton) is clicked

        //we're creating conditional statements so that it can toggle between light and dark mode
        let currentClassName = document.body.className;

        console.log(this.textContext);

        if (currentClassName == 'dark-mode') {
            switchButton.innerText='Let there be light'}
        else {switchButton.innerText='Let there be dark'} //inner text or HTML both work, HTML works because there is no HTML other than the text
    });
});

function lowestCommonMultiple() {
    let num1 = document.forms["lcmform"]["num1"].value;
    let num2 = document.forms["lcmform"]["num2"].value;
    let min = (num1 > num2) ? num1 : num2;

    while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;}
        min++;
    }
    //changing the tag with id lcmAnwer to the calculation answer
    let answer = document.getElementById("lcmAnswer");
    answer.innerHTML = min ;
};

function wordle() {
    let target = document.forms["wordleClone"]["targetWord"].value;
    let guess = document.forms["wordleClone"]["guessWord"].value;

    //convert text to string 
    const targetArray = target.split("");
    const guessArray = guess.split("");
    let wordleAnswer = "";
    const numText = ["first","second","third","fourth","fifth"];


    //check if letter matches in the correct position
        // if yes then say that letter is in correct position
        // else check if letter is in word
                // if yes say appear in word but different position
                // else say it doesnt appear in word

    for (let i = 0; i < 5; i++)   {
        if (targetArray[i] == guessArray[i]) {
            wordleAnswer += "The " + numText[i] + " letter is in the correct position."; 
        } else if (targetArray.includes(guessArray[i]) && calcOccurances(targetArray,  guessArray[i]) == 1)  {
            wordleAnswer += "The " + numText[i] + " letter appears in the word, but in a different position.";
        } else {
            wordleAnswer += "The " + numText[i] + " letter doesn't appear in the word.";
        }
    };

    //console.log(wordleAnswer);

    //changing the tag with id lcmAnwer to the calculation answer
    let finalWordleAnswer = document.getElementById("wordleAnswer");
    finalWordleAnswer.innerHTML = wordleAnswer;

}

function calcOccurances(targetArray, letter) {
    let counting = 0;

    for ( let i=0; i<5; i++) {
        if (letter == targetArray[i]) {
            counting += 1;
        } else { counting += 0;}
    }
    //console.log (counting);

    return counting;
}