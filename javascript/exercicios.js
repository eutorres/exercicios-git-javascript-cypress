//Exercícios resolvidos devem ser adicionados aqui :) 
function ordemCrescente() {
    var numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    numeros.sort(compararNumeros);
    console.log(numeros);
    alert(numeros);
}

function compararNumeros(a, b) {
    return a - b;
}