// Exercício 1
function dobro (valor) {
    return valor * 2;
}
console.log (dobro (4));

// Exercício 2
function triplo (valor) {
    return valor * 3;
}
console.log (triplo (3));

// Exercício 3
function somar (a, b) {
    return a + b;
}
console.log (somar (11, 8));

// Exercício 4 
function multiplicacao (a, b) {
    return a * b;
}
console.log (multiplicacao (10, 50));

// Exercício 5 
function aumento (salario) {
     return salario + (salario * 0.10);
}
console.log (aumento (2000));

// Exercício 6 
function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

imprimirNumeros();

// Exercício 7
function somarAteDez (valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
    return valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10;
}
console.log (somarAteDez (1, 2, 3, 4, 5, 6, 7, 8, 9, 10));