var score = 0
function draw() {
var canvas  = document.getElementById("tela");
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext("2d");
var playerImage = new Image();
playerImage.src = "https://i.imgur.com/bhcTQVr.png"

var button1c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var button2c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var button3c = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]
var doorc = [Math.floor(Math.random() * 750), Math.floor(Math.random() * 750)]

var buttonsxc = [button1c, button2c, button3c, doorc]
console.log(buttonsxc)


var tela_quiz = {
    pergunta: {},
    respostas: {}
}
document.getElementById("tela_quiz").innerHTML = score

var player = {
speed: 256,
width: 50,
height: 50,
lifes: 3,
key_pieces: 0 
}
player.x = canvas.width/2 - player.width/2;
player.y = canvas.height/2 - player.height/2;
player.currentx = 0
player.currenty = 0

class square  {
    constructor(x, y, width, height, squarecolor) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = squarecolor
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
console.log(buttons)

var door = new square(doorc[0], doorc[1], 50, 50, "yellow")

var map = [new square(0, 0, 50, 50), new square(0, 350, 50, 50)]
console.log(map)

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
            buttons[i].x = -50
            buttons[i].y = -50
            console.log(i, buttons[i].status)
            document.getElementById("tela_quiz").innerHTML = score + " " + "TESTE" + " " + player.lifes + " " + player.key_pieces
        }
}
    if(player.x+player.width >= door.x && 
        player.x <= door.x+door.width && 
        player.y <= door.y+door.height && 
        player.y+player.height >= door.y){
            score += 100
            document.getElementById("tela_quiz").innerHTML = score + " " + "TESTE" + " " + player.lifes + " " + player.key_pieces
            draw()
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
    }
    
   
};




function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
    for (i = 0; i < buttons.length; i++){ 
        if (buttons[i].status == 0) {
        buttons[i].drawSide()
        }
        }
    if (buttons[0].status == 1 && buttons[1].status == 1 && buttons[2].status == 1){
    door.drawSide()}
}


var main = function () {
    update(0.02);
    render();
    collision()
    requestAnimationFrame(main);
}

main();
}
