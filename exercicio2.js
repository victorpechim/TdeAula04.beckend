//2. Utilize a função anterior para criar uma promise que tenha:

//- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
//- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

//Dica: Utilize uma promise com função (resolve, reject).

const somaPromise = (a, b) => {
    return new Promise ((resolve, reject) => {

        let resultado = a + b;
        if(resultado % 2 === 0){
            resolve (resultado);
        }else{
            reject (resultado);
        }
    });
}

somaPromise(2, 3)

.then(resultado => {
    console.log("A operação foi concluída, o número somado é par: " + resultado)
})

.catch(resultado => {
    console.log("A operação falhou, o número somado é impar: " + resultado)
});

