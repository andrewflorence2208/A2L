var musgas = [
    'bitmusga.mp3',
    'quenteleite.mp3',
    'weekend.mp3',
    'pink.mp3',
    'galaxy.mp3',
    'atariwave.mp3',
    'tyler.mp3',
    'wind.mp3',
    'cheese.mp3',
];

var indiceAtual = 0;

function nextSong() {
    indiceAtual++;
    if (indiceAtual === musgas.length) {
        indiceAtual = 0;
    }
    document.getElementById('chumbo').src = musgas[indiceAtual];
    document.getElementById('chumbo').play();
}

window.addEventListener('load', function () {
    document.getElementById('chumbo').volume = 0.2;
});
