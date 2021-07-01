var elementos = [];
var topo      = -1;
const MAXIMO  = 10;

function push(num) {
    if(topo < MAXIMO){
        topo = topo + 1;
        elementos[topo] = num;
    } else{
        console.log("Pilha esta cheia");
    }
}

function estavazia(){
    return topo === -1;
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else{
        console.log("Pilha esta vazia");
    }
}

// ------ parte do codigo que usa a pilha -- //




var numDecimal = 10;
var resto;

console.log("Hora de Empilhar....");
while (numDecimal !=0){
    resto = parseInt (numDecimal % 2);
    push(resto);
    console.log(resto);
    numDecimal = numDecimal / 2;
}

console.log("Desempilhando Tudo!!!");
while(!estavazia()){
    console.log(pop());
}