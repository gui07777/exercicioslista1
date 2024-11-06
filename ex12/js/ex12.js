// Solicita a altura da pessoa
let altura = parseFloat(prompt("Digite a sua altura (em metros):"));

// Calcula o peso ideal usando a fórmula
let pesoIdeal = (72.7 * altura) - 58;

// Exibe o resultado
alert(`O seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);