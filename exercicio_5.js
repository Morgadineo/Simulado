/*5) Contar a frequência de elementos em uma matriz
Crie uma função que receba um vetor como parâmetro e
retorne um objeto contendo a frequência de cada elemento
presente no vetor. Por exemplo, se o vetor fornecido for [1, 2,
2, 3, 1, 1, 4], a função deve retornar {1: 3, 2: 2, 3: 1, 4: 1}*/

function contarFrequencia(lista) {

    let lista_frequencia = new Map()            // Cria um objeto de dicionário.

    for (let i = 0; i < lista.length; i++) {     // Itera em cima da lista a ser analisada para pegar o valor de indice i.
        let qtde = 0                            // Define uma variável para contar a qtde de vezes que um elemento aparece 
        for (let j = 0; j < lista.length; j++) { // Itera sobre a lista novamente para comparar o valor lista[i] com os valores da nova iteração
            if (lista[j] === lista[i]) {          // Se o valor de lista[j] for igual ao de lista[i] 
                qtde += 1                       // Soma que ele apareceu
            }
        }
        lista_frequencia.set(lista[i], qtde)   // Adiciona os valores no dicionário
    }
}

let lista = [1, 3, 1, 2, 4, 5, 9, 17, 2, 4, 1, 6, 6, 3, 98, 10, 39, 38]

contarFrequencia(lista)