// Setup the messages
const message = {
    A: "Guess a letter, or click Cancel to stop playing. You have 6 opportunities remaining.",
    B: "Type a letter",
    C: "Wrong answe try again",
    D: "Well done! ",
    E: "Game Over"
  }

//Pick and return a random word
function pickWord(){
    words = [
        'PERSONALITY',
        'EMPLOYMENT',
        'KICKOFF',
        'ALARM',
        'FOOTPRINT',
        'GUARANTEE',
        'BAD',
        'PACKING',
        'ESCAPOLOGY',
        'JAVASCRIPT',
        'MONKEY',
        'AMAZING',
        'PANCAKE',
        'BANANA',
        'CHOCOLATE',
        'COFFEE',
        'TRAIN',
        'MODEL',
        'CODE',
        'MOUNTAIN',
        'REACTION',
        'MEETING'
      ];
    return words[Math.floor(Math.random() * words.length)];
}
let pickedWord = pickWord();
let lives = 7;

// //Print Messages
function printMessage(text, elementId){
    document.getElementById(elementId).innerHTML += text;
}

//Detect letter clicked by user and do something with that letter
function inputLetter(instruction){
    var el = document.getElementsByTagName('li');
    for (var i=0; i < el.length; i++) {
        el.item(i).onclick = instruction;
    }
}

//Does the letter exists in the word?
function getClickedLetter(){
    let letter = this.innerText;
    if(pickedWord.indexOf(letter) >= 0 && lives > 0 ){
        addLetter(letter);
    }
    else wrongAnswer();
    return getClickedLetter;
}

//Add letter in position
function addLetter(x){
    let i = 0;
    var foo = document.getElementById('words');
    while ( i <= pickedWord.length) {
        if(pickedWord[i]===x){
            if(foo.children[i].innerText == ''){
                foo.children[i].append(x);
                console.log(foo.children[i].innerText);
            }      
        }   
        i++;
    } 
}

//Wrong answer
function wrongAnswer(){
    lives -=1;
    let hearts = "";
    let foo1 = document.getElementById('lives');
    let foo2 = document.getElementById('hearts');
    
    if(lives < 0){
        return false
    }else{
        for(i = 1; i<=lives; i++){
            hearts+= "❤️";
        }
        foo1.innerText = lives;
        foo2.innerText = hearts;
        changeImage(lives);
        console.log(lives);
        if (lives === 0){
            foo2.innerText = 'The word was '+ pickedWord ;
        }
    }
}

//Game Over
function gameOver(){
   
    
}
//Change Image
function changeImage(a) {
    document.getElementById("img").src= "assets/img/0"+a+".svg";
}
//Letters Remainings to Guess
function letterSpaces(){
     for(let i = 0; i < pickedWord.length; i++){
        if(i === 0 || i === pickedWord.length -1){
            printMessage(`<li>${pickedWord[i]}</li>`, 'words');
        }
        else{
            printMessage(` <li> </li> `, 'words');
        }
    }
}



//Game Main Function
function GameLoop(){
    let word = pickedWord;
    letterSpaces (word);
    inputLetter(getClickedLetter());
    console.log(word);
}

GameLoop();
