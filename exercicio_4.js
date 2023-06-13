/*4) Seguindo a lógica do exercício anterior, faça agora um
programa que retorne o maior número, o menor número e a
média aritmética de números de um vetor dado*/

function maiorMenorMediaLista(lista) {

    // Variáveis de suporte
    let maior = 0;
    let menor = 0;
    let media = 0;

    for (let i = 0; i < lista.length; i++) { // Itera em cima da lista
        if (lista[i] > maior) { // Compara se o valor de lista[i] é maior que o maior valor armazenado. Se sim:
            maior = lista[i];   // Armazena o valor de lista[i] como maior número
        } else if (lista[i] < menor) { // Compara se o valor de lista[i] é menor que o menor número armazenado. Se sim:
            menor = lista[i];   // Armazena o valor de lista[i] como menor numero
        }
    }
    media = (maior + menor) / 2; // Calcula a média entre o menor e o maior

    console.log(`Maior: ${maior}\nMenor: ${menor}\nMedia: ${media}`);

}

let lista = [1, 2, 5, 7, 10, 0, 2, 80, 100, 85, 391, 801, 493, 201, 401, 128, 284, 192, 123, 45, 192, 919, 922];

maiorMenorMediaLista(lista)