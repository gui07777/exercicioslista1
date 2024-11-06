// Solicita os números ao usuário
let numeroInteiro1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numeroInteiro2 = parseInt(prompt("Digite o segundo número inteiro:"));
let numeroReal = parseFloat(prompt("Digite um número real:"));

// a) Produto do dobro do primeiro com metade do segundo
let resultadoA = (2 * numeroInteiro1) * (numeroInteiro2 / 2);

// b) Soma do triplo do primeiro com o terceiro
let resultadoB = (3 * numeroInteiro1) + numeroReal;

// c) O terceiro número elevado ao cubo
let resultadoC = Math.pow(numeroReal, 3);