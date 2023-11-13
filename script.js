var count = 0;
function tutorial(){
    document.getElementById("menu").innerHTML = tutorial_text[count] + "<button id='next_bt' onclick='tutorial(count++)'>NEXT</button>";
    console.log("a")

    if(count>((tutorial_text.length)-1)){
        document.getElementById("menu").innerHTML = '<a><button type="button" onclick="gamestart()" id="bt_init">PLAY</button></a><a><button type="button" id="bt_init" onclick="tutorial()">TUTORIAL</button></a><a><button type="button" id="bt_init">CONFIG</button></a><a><button type="button" id="bt_init" onclick="credits()">CREDITS</button></a>'
        count = 0;
    };
};

const tutorial_text = [
    "O objetivo do jogo é finalizar labirintos ao responder questionários que abrem a porta para o próximo labirinto, cada labirinto tem 3 questionários (botões azuis) e 1 porta (botão amarelo), que precisam ser encontrados movimentando o personagem principal",
    "O personagem se move nas 4 direções cardinais e as diagonais, controlado pelas setas cima, baixo, esquerda e direita ou W, S, A, D no teclado, respectivamente",
    "Os questionários são ativados ao mover o personagem por cima dos botões azuir",
    "Há apenas uma resposta correta para cada questão, você possui 3 vidas e perde 1 para cada resposta errada selecionada, perdendo toda sua pontuação e voltando a tela inicial caso as vidas acabem"

];

var count = 1;
