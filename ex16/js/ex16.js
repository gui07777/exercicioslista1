// Solicita o tamanho da área a ser pintada em metros quadrados
let area = parseFloat(prompt("Digite o tamanho da área a ser pintada (em metros quadrados):"));

// Define a cobertura da tinta e a capacidade da lata de tinta
const coberturaPorLitro = 3;  // 1 litro cobre 3 metros quadrados
const capacidadeLata = 18;  // Lata com 18 litros
const precoLata = 80;  // Preço de uma lata de tinta em R$

// Calcula a quantidade de tinta necessária
let litrosNecessarios = area / coberturaPorLitro;

// Calcula a quantidade de latas necessárias, arredondando para cima
let latasNecessarias = Math.ceil(litrosNecessarios / capacidadeLata);

// Calcula o preço total
let precoTotal = latasNecessarias * precoLata;

// Exibe os resultados
alert(`Quantidade de latas necessárias: ${latasNecessarias} latas`);
alert(`Preço total: R$ ${precoTotal.toFixed(2)}`);