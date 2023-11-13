var musgas = [
    'musica/bitmusga.mp3',
    'musica/quenteleite.mp3',
    'musica/weekend.mp3',
    'musica/pink.mp3',
    'musica/galaxy.mp3',
    'musica/atariwave.mp3',
    'musica/tyler.mp3',
    'musica/wind.mp3',
    'musica/cheese.mp3',
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
