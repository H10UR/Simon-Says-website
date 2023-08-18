var boxes = ["green", "red", "yellow", "blue"];
var gamePattern  = [];
var userClickPattern = [];
var aroundBoy;
var chosenColor;
var level = 0;
var StateChecker = 0;
$(document).keydown(function (e) { 
    if(level === 0){
        gamePattern = [];
        nextSequence();
    }

});

function nextSequence() {
    aroundBoy = Math.floor(Math.random() * 4);
    chosenColor = boxes[aroundBoy];
    gamePattern.push(chosenColor);
    SoundMaker(chosenColor);
    Animator(chosenColor);
    level++;
    StateChecker = 0;
    $("h1").text("Level " + level);
}
$(".btn").click(function () { 
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    answerChecker(level);
    SoundMaker(userChosenColor);
    Animator(userChosenColor);

});

function SoundMaker(idName) { 
    var bxSound = new Audio("sounds/"+idName+".mp3");
    bxSound.play();
 }

 function Animator(ColorId){
    $("#"+ColorId).addClass("pressed");
    setTimeout(function(){
        $("#"+ColorId).removeClass("pressed");
    }, 100);
 }

function answerChecker(currentLevel){
    if(gamePattern[StateChecker] != userClickPattern[StateChecker]){
        userClickPattern = [];
        gamePattern = [];
        level = 0
        $("h1").text("You Lose foe!!!! \n Click a button to restart");
    }

    StateChecker++;
    if(StateChecker === gamePattern.length){
        userClickPattern = [];
        setTimeout(function(){
            nextSequence();
        }, 1000);
    }
}