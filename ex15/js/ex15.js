// Solicita o valor ganho por hora e o número de horas trabalhadas no mês
let ganhoPorHora = parseFloat(prompt("Digite quanto você ganha por hora (em R$):"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));

// Calcula o salário bruto
let salarioBruto = ganhoPorHora * horasTrabalhadas;

// Calcula os descontos
let descontoIR = salarioBruto * 0.11;  // Imposto de Renda (11%)
let descontoINSS = salarioBruto * 0.08;  // INSS (8%)
let descontoSindicato = salarioBruto * 0.05;  // Sindicato (5%)

// Calcula o salário líquido
let salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

// Exibe os resultados
alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
alert(`Desconto do INSS (8%): R$ ${descontoINSS.toFixed(2)}`);
alert(`Desconto do Sindicato (5%): R$ ${descontoSindicato.toFixed(2)}`);
alert(`Desconto do Imposto de Renda (11%): R$ ${descontoIR.toFixed(2)}`);
alert(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);