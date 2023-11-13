function config() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("controlemusga").style.display = "block";
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

function voltar() {
    document.getElementById("menu").style.display = "grid";
    document.getElementById("controlemusga").style.display = "none";
}