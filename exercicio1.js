//1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

//-callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par (resultado da soma).
//-callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).

const soma = (a, b) => {
    let resultado = a + b;

    if(resultado % 2 === 0){
        callbackSucesso (resultado);
    }else{
        callbackError (resultado);
    }
}


function callbackSucesso(callSucesso) {
    console.log("A operação foi concluída, o número somado é par: " + callSucesso);
}

function callbackError(callErro) {
    console.error("A operação falhou, o número somado é impar: " + callErro);
}

soma(2, 2);
soma(2, 3);