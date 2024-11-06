// Solicita o tamanho do arquivo e a velocidade do link de Internet
let tamanhoArquivoMB = parseFloat(prompt("Digite o tamanho do arquivo para download (em MB):"));
let velocidadeLinkMbps = parseFloat(prompt("Digite a velocidade do link de Internet (em Mbps):"));

// Converte a velocidade de Mbps para MBps (Megabytes por segundo)
let velocidadeLinkMBps = velocidadeLinkMbps / 8;

// Calcula o tempo de download em segundos
let tempoDownloadSegundos = tamanhoArquivoMB / velocidadeLinkMBps;

// Converte o tempo de download de segundos para minutos
let tempoDownloadMinutos = tempoDownloadSegundos / 60;

// Exibe o tempo aproximado de download
alert(`O tempo aproximado de download é: ${tempoDownloadMinutos.toFixed(2)} minutos.`);