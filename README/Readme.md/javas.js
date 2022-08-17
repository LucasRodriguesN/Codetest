// Implemente uma função que receba uma número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5
// que sejam inferiores ao número passado.

function gravar(){
    var num = Number(prompt("Digite um número"));
        // Valor inicial da soma
     var sum = 0;
        // Um loop até o valor que foi informado
    for (var i = 0; i < num; i++) {
        // Verificar se o valor é divisível por 3 ou 5
        if( i%5 === 0){
        sum += i
    } else if (i%3 === 0) {
        // Se o valor foi dividido acrecenta o valor atual do loop
        sum+= i
    }
    
    }
        // Resultado
    alert(sum);
}