function config() {
    document.getElementById("menu").innerHTML = '<a><button onclick="play()" id="bt_init">Play</button></a><a><button onclick="pause()" id="bt_init"> Pause</button></a><a><button onclick="volumemais()" id="bt_init">+ Volume</button></a><a><button onclick="volumemenos()" id="bt_init">- Volume</button></a><a><button onclick="voltar()" id="bt_init">Voltar</button>';
}

function play() {
    document.getElementById('chumbo').play();
}

function pause() {
    document.getElementById('chumbo').pause();
}

function volumemais() {
    document.getElementById('chumbo').volume += 0.1;
}

function volumemenos() {
    document.getElementById('chumbo').volume -= 0.1;
}

function voltar(){
    document.getElementById("menu").innerHTML = '<a><button type="button" onclick="gamestart()" id="bt_init">PLAY</button></a><a><button type="button" id="bt_init" onclick="tutorial()">TUTORIAL</button></a><a><button type="button" id="bt_init" onclick="config()">CONFIG</button></a><a><button type="button" id="bt_init" onclick="credits()">CREDITS</button></a>'
};