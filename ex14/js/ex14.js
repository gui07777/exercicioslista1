 // Solicita a altura e o sexo da pessoa
 let altura = parseFloat(prompt("Digite a sua altura (em metros):"));
 let sexo = prompt("Digite o seu sexo (M para masculino ou F para feminino):").toUpperCase();

 // Calcula o peso ideal com base no sexo
 let pesoIdeal;
 if (sexo === "M") {
     pesoIdeal = (72.7 * altura) - 58;  // Fórmula para homens
 } else if (sexo === "F") {
     pesoIdeal = (62.1 * altura) - 44.7;  // Fórmula para mulheres
 } else {
     alert("Sexo inválido! Por favor, digite M para masculino ou F para feminino.");
 }

 // Solicita o peso da pessoa
 let peso = parseFloat(prompt("Digite o seu peso (em kg):"));

 // Verifica se a pessoa está dentro, acima ou abaixo do peso
 let situacaoPeso;
 if (peso < pesoIdeal) {
     situacaoPeso = "Abaixo do peso";
 } else if (peso === pesoIdeal) {
     situacaoPeso = "Peso ideal";
 } else {
     situacaoPeso = "Acima do peso";
 }

 // Exibe o resultado
 alert(`Peso ideal: ${pesoIdeal.toFixed(2)} kg\nSeu peso: ${peso} kg\nVocê está: ${situacaoPeso}`);