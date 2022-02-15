let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria order index
let suffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    console.log(colorOrder);
    console.log(order);
    
    for(let i in order){
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number((i) +1))
        
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados sao os mesmos da ordem gerado no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextlevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selectd');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//função que retorna cor
let creatColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

// funcao para proximo nivel do jogo
let nextlevel = () => {
    score++;
    suffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao para iniciar o jogo
let playGame = () => {
    alert(`Bem Vindo ao Gênesis! Iniciando novo jogo!`);
    score = 0;

    nextlevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();