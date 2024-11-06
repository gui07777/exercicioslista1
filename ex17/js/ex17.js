// Solicita o tamanho da área a ser pintada em metros quadrados
let area = parseFloat(prompt("Digite o tamanho da área a ser pintada (em metros quadrados):"));

// Define os parâmetros de cobertura e preços
const coberturaPorLitro = 6;  // 1 litro cobre 6 metros quadrados
const lataCapacidade = 18;  // Lata com 18 litros
const precoLata = 80;  // Preço de uma lata de tinta em R$
const galoesCapacidade = 3.6;  // Galão com 3.6 litros
const precoGalao = 25;  // Preço de um galão de tinta em R$

const folga = 1.10;  // 10% de folga

// Calcula a quantidade de tinta necessária com a folga
let litrosNecessarios = (area / coberturaPorLitro) * folga;

// Função para arredondar para cima o número de latas ou galões
function arredondarParaCima(valor) {
    return Math.ceil(valor);
}

// Cálculos para comprar apenas latas
let latasNecessarias = arredondarParaCima(litrosNecessarios / lataCapacidade);
let precoLatas = latasNecessarias * precoLata;

// Cálculos para comprar apenas galões
let galoesNecessarios = arredondarParaCima(litrosNecessarios / galoesCapacidade);
let precoGaloes = galoesNecessarios * precoGalao;

// Cálculos para misturar latas e galões
let latasMistura = Math.floor(litrosNecessarios / lataCapacidade);  // Latas inteiras
let litrosRestantes = litrosNecessarios - (latasMistura * lataCapacidade);
let galoesMistura = arredondarParaCima(litrosRestantes / galoesCapacidade);  // Galões para o restante
let precoMistura = (latasMistura * precoLata) + (galoesMistura * precoGalao);

// Exibe os resultados
alert(`Opção 1: Comprar apenas latas de 18 litros`);
alert(`Quantidade de latas necessárias: ${latasNecessarias} latas`);
alert(`Preço total para latas: R$ ${precoLatas.toFixed(2)}`);

alert(`Opção 2: Comprar apenas galões de 3.6 litros`);
alert(`Quantidade de galões necessárias: ${galoesNecessarios} galões`);
alert(`Preço total para galões: R$ ${precoGaloes.toFixed(2)}`);

alert(`Opção 3: Comprar uma mistura de latas e galões`);
alert(`Quantidade de latas necessárias: ${latasMistura} latas`);
alert(`Quantidade de galões necessárias: ${galoesMistura} galões`);
alert(`Preço total para a mistura: R$ ${precoMistura.toFixed(2)}`);