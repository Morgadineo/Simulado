/*3) Encontrar o maior elemento em um vetor
Crie uma função que receba uma matriz de números como
parâmetro e retorne o maior elemento presente nesse vetor.
*/

function pegarMaiorElemento(lista) {
    let i = 0 // Define uma variavel flag

    let maior = 0; // Variável para armazenar o maior numero

    while (i < lista.length) { // Loop para percorrer toda a lista
        if (lista[i] > maior) { // Verifica se o valor da lista de indice do valor de "i" é maior que o atual numero maior
            maior = lista[i] // Se for, substitui o valor maior anterior pelo novo maior
        }
        i++ // Soma na variavel flag para continuar percorrendo
    }

    console.log('O maior número é: ' + maior) // Printa o resultado

}

let lista = [1, 2, 5, 7, 10, 0, 2, 80, 100, 85, 391, 801, 493, 201, 401] // Lista de valores

pegarMaiorElemento(lista)