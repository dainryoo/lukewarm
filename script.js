var acceptableSynonyms = ["acceptable", "adequate", "alright", "decent", "good", "ok", "passable", "satisfactory", "sufficient", "tolerable"];
var awareSynonyms = ["aware", "realizing", "receiving news that", "told", "under the belief", "under the impression"];
var palSynonyms = ["buddy", "dude", "gal", "guy", "human", "human being", "individual", "pal", "person"];
var uncomfortableSynonyms = ["bad", "ill", "nervous", "not good", "not great", "ruffled", "sweaty", "tired", "uncomfortable"];

var valentineFront = ["Dear Valentine", "Happy Valentine's Day", "Hello", "Hey", "Hey there", "Hey Valentine"];
var sorryFront = ["Apologies", "Forgive me", "I apologize", "Sorry"];
var thanksFront = ["Hello", "Many thanks", "Much thanks", "Thanks", "Thanks a bunch", "Thanks a lot", "Thanks so much", "Thank you"];

function pageSetup() {
    //nothing for now
}

function birthdayMsg() {
    document.getElementById("heartfeltMessage").style.color = "black";
    document.getElementById("heartfeltMessage").style.visibility  = "visible";
    var mainMsg = "";
    var randNum = Math.floor((Math.random() * 6) + 1); //6 choices
    if (randNum == 1) {
        mainMsg = "Hope your birthday is as " + randWord(acceptableSynonyms) + " as you.";
    } else if (randNum == 2) {
        mainMsg = "I'm " + randWord(awareSynonyms) + " that it's your birthday.";
    } else if (randNum == 3) {
        mainMsg = "Happy Birthday, you're the best " + randWord(palSynonyms) + ".";
    } else if (randNum == 4) {
        mainMsg = "Happy Birthday, hope the next year is " + randWord(acceptableSynonyms) + ".";
    } else if (randNum == 5) {
        mainMsg = "Happy Birthday, hope the next year isn't " + randWord(uncomfortableSynonyms) + ".";
    } else {
        mainMsg = "It's your birthday. How " + randWord(acceptableSynonyms) + ".";
    }
    document.getElementById("heartfeltMessage").innerHTML = mainMsg;
}

function valentinesMsg() {
    document.getElementById("heartfeltMessage").style.color = "black";
    document.getElementById("heartfeltMessage").style.visibility  = "visible";
    var frontMsg = randWord(valentineFront);
    var mainMsg = "";
    var randNum = Math.floor((Math.random() * 5) + 1); //5 choices
    if (randNum == 1) {
        mainMsg = frontMsg + ", you make my heart feel " 
        + randWord(uncomfortableSynonyms) + ", but like in a good way.";
    } else if (randNum == 2) {
        mainMsg = frontMsg + ", you make me feel " + randWord(acceptableSynonyms) + "."
    } else if (randNum == 3) {
        mainMsg = frontMsg + ", you're the best " + randWord(palSynonyms) + ".";
    } else if (randNum == 4) {
        mainMsg = frontMsg + ", I think you're very " + randWord(acceptableSynonyms) + ".";
    } else {
        mainMsg = frontMsg + ", you're the most " + randWord(acceptableSynonyms) + " " + randWord(palSynonyms) + ".";
    }
    document.getElementById("heartfeltMessage").innerHTML = mainMsg;
}

function sorryMsg() {
    document.getElementById("heartfeltMessage").style.color = "black";
    document.getElementById("heartfeltMessage").style.visibility  = "visible";
    var frontMsg = randWord(sorryFront);
    var mainMsg = "";
    var randNum = Math.floor((Math.random() * 5) + 1); //5 choices
    if (randNum == 1) {
        mainMsg = frontMsg + ",  I feel " + randWord(uncomfortableSynonyms)
        + " because of what I did.";
    } else if (randNum == 2) {
        mainMsg = frontMsg + ", I did a not-very-" + randWord(acceptableSynonyms)
        + " thing.";
    } else if (randNum == 3) {
        mainMsg = frontMsg + " for making you feel " + randWord(uncomfortableSynonyms) + ".";
    } else if (randNum == 4) {
        mainMsg = frontMsg + ", I am a bad " + randWord(palSynonyms) + ".";
    } else {
        mainMsg = frontMsg + ", I'm " + randWord(awareSynonyms)
        + " that I did a bad thing."; 
    }
    document.getElementById("heartfeltMessage").innerHTML = mainMsg;
}

function thanksMsg() {
    document.getElementById("heartfeltMessage").style.color = "black";
    document.getElementById("heartfeltMessage").style.visibility  = "visible";
    var frontMsg = randWord(thanksFront);
    var mainMsg = "";
    var randNum = Math.floor((Math.random() * 5) + 1); //5 choices
    if (randNum == 1) {
        mainMsg = frontMsg + ", you're " + randWord(acceptableSynonyms) + ".";
    } else if (randNum == 2) {
        mainMsg = frontMsg + ", I'm " + randWord(awareSynonyms) 
        + " that you did that " + randWord(acceptableSynonyms) + " thing for me.";
    } else if (randNum == 3) {
        mainMsg = frontMsg + ", what you did was " + randWord(acceptableSynonyms) + ".";
    } else if (randNum == 4) {
        mainMsg = frontMsg + ", you're the best " + randWord(palSynonyms) + ".";
    } else {
        mainMsg = frontMsg + ", you're the most " + randWord(acceptableSynonyms) + " " + randWord(palSynonyms) + ".";
    }
    document.getElementById("heartfeltMessage").innerHTML = mainMsg;
}

function randWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}