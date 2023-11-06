var score = 0
var gamestatus = 0
var door = 0
var player = 0
function reload(){
    score += 100
    door.status = 0
    player.key_pieces = 0
    player.lifes = 3
    draw();
    ctx.clearRect()}

    var player = {
        speed: 256,
        width: 50,
        height: 50,
        lifes: 3,
        key_pieces: 0 
        }
        
function draw() {
var canvas  = document.getElementById("tela");
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext("2d");
var playerImage = new Image();
playerImage.src = "https://i.imgur.com/bhcTQVr.png"
var lifesImage = new Image()
lifesImage.src = "https://github.com/andrewflorence2208/FINAL_PROJECT/blob/main/pixil-frame-0%20(2).png?raw=true"

var button1c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var button2c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var button3c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var doorc = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]


var tela_quiz = {
    pergunta: {},
    respostas: {}
}
document.getElementById("tela_quiz").innerHTML = score


player.x = canvas.width/2 - player.width/2;
player.y = canvas.height/2 - player.height/2;
player.currentx = 0
player.currenty = 0

class square  {
    constructor(x, y, width, height, squarecolor, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = squarecolor
        this.status = status
    }
    drawSide() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x,this.y,this.width,this.height);           
    }
}
class button  {
    constructor(x, y, width, height, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.status = status
    }
    drawSide(){
    ctx.fillRect(this.x,this.y,this.width,this.height);}
    }


var buttons = [new button(button1c[0], button1c[1], 50, 50, 0), new button(button2c[0], button2c[1], 50, 50, 0), new button(button3c[0], button3c[1], 50, 50, 0)]
for (i = 1; i < buttons.length; i++ ) {
    if (buttons[i].x == player.x || buttons[i].y == player.y) {
        buttons[i].x = Math.floor(Math.random() * 750)
        buttons[i].y = Math.floor(Math.random() * 750)
    }
    if (buttons[i].x == buttons[i - 1].x || buttons[i].y == buttons[i - 1].y){
        buttons[i].x = Math.floor(Math.random() * 750)
        buttons[i].y = Math.floor(Math.random() * 750)
    }
    if (i == 3) {
        if (buttons[i].x == buttons[i - 2].x || buttons[i].y == buttons[i - 2].y){
        buttons[i].x = Math.floor(Math.random() * 750)
        buttons[i].y = Math.floor(Math.random() * 750) 
    }}
    
}

var door = new square(doorc[0], doorc[1], 50, 50, "yellow", 0)


var collision = function(){
var color = "black";
for (var i = 0; i < buttons.length; i++){
    if(player.x+player.width >= buttons[i].x && 
        player.x <= buttons[i].x+buttons[i].width && 
        player.y <= buttons[i].y+buttons[i].height && 
        player.y+player.height >= buttons[i].y){
            color = "red"
            buttons[i].status = 1,
            player.key_pieces += 1
            player.lifes -= 1
            buttons[i].x = -50
            buttons[i].y = -50
            document.getElementById("tela_quiz").innerHTML = score + " " + "TESTE" + " " + player.lifes + " " + player.key_pieces + " " + gamestatus
        }
}
if (player.key_pieces == 3) {
    door.status = 1
} else {
    door.status = 0
}
    if(player.x+player.width >= door.x && 
        player.x <= door.x+door.width && 
        player.y <= door.y+door.height && 
        player.y+player.height >= door.y && door.status == 1 ){
            document.getElementById("tela_quiz").innerHTML = score + " " + "TESTE" + " " + player.lifes + " " + player.key_pieces + " " + gamestatus
            reload()
        }
        ctx.fillStyle = color;
}

var keysDown = {};

addEventListener("keydown", function (event) {
    keysDown[event.key] = true;
}, false);

addEventListener("keyup", function (event) {
    delete keysDown[event.key];
}, false);
var update = function (modifier) {
    player.currentx = player.x
    player.currenty = player.y 
    if(document.getElementById("tela_quiz").style.display == "none"){
    if ("ArrowUp" in keysDown || "w" in keysDown) { // Player is holding up key
        player.y -= player.speed * modifier;
    }
    if ("ArrowDown" in keysDown || "s" in keysDown) { // Player is holding down key
        player.y += player.speed * modifier;
    }
    if ("ArrowLeft" in keysDown || "a" in keysDown) { // Player is holding left key
        player.x -= player.speed * modifier;
    }
    if ("ArrowRight" in keysDown || "d" in keysDown) { // Player is holding right key
        player.x += player.speed * modifier;
    }}
    
};




function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    for (i = 0; i < buttons.length; i++){ 
        if (buttons[i].status == 0) {
        buttons[i].drawSide()
        }
        }
    for (i = player.lifes; i > 0; i--) {
    ctx.drawImage(lifesImage, (800 - (i * 50)), 750, 50, 50)
    }
    if (door.status == 1){
    door.drawSide()}
}


var main = function () {
    update(0.02);
    collision()
    render()
    requestAnimationFrame(main);
}

main();
}


function gamestart() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "inline";}

