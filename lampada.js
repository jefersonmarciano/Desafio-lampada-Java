let lamp = window.document.getElementById('lampada')

function estaQuebrada(){ // invalida botoes caso a lampda estiver quebrada
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if(!estaQuebrada()){ // se a lampada naoe stiver quebrada ela ira realizar o codigo a seguir
        lamp.src = 'imagens/ligada.svg'
    }
    
}

function Desligar(){
    if(!estaQuebrada()){ // se a lampada naoe stiver quebrada ela ira realizar o codigo a seguir
    lamp.src = 'imagens/desligada.svg'
    }
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'imagens/quebrada.svg'
}