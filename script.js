function tutorial(count){
    document.getElementById("menu").innerHTML = tutorial_text[count] + "<button id='next_bt' onclick='tutorial(count++)'>NEXT</button>";
    console.log("a")

    if(count>((tutorial_text.length)-1)){
        document.getElementById("menu").innerHTML = '<a href="gameplay.php"><button type="button" id="bt_init">PLAY</button></a> <a><button type="button" id="bt_init" onclick="tutorial(0)">TUTORIAL</button></a> <a href="config.php"><button type="button" id="bt_init">CONFIG</button></a> <a href="credits.html"><button type="button" id="bt_init">CREDITS</button></a>'
        
    };
};

const tutorial_text = [
    "The goal of the game is to finish mazes by answering quizes to open the door to the next maze, each maze has 3 quizes and a door, that need to be found by moving the character through the map",
    "The character moves in 4 directions, controlled by the up, down, left and right keys by default (remappable in settings menu)",
    "The quizzes that you need to complete are activated by moving your character model above pressure plates on the maze",
    "There is only one correct answer for the question, you lose a life if you select the wrong answer, you have 3 lifes in total and lose all your score if you miss thrice."

];

var count = 1;

function credit(){
    document.getElementById("initial_screen").style.display = "none";
    document.getElementById("credit_screen").style.display = "inline";
}