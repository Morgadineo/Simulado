/*7) Remover elementos duplicados de uma matriz
Crie uma função que receba uma matriz como parâmetro e
retorne uma nova matriz sem elementos duplicados. Por
exemplo, se a matriz fornecida for [1, 2, 2, 3, 1, 4], a função
deve retornar [1, 2, 3, 4].
*/

function removerElementosDuplicados(lista) { // Cria a função

    let nova_lista = [... new Set(lista)]    // Cria um SET que recebe os valores da lista. SET é uma estrutura que não permite elementos duplicados.

    console.log(nova_lista)

    return nova_lista
}

lista = [1, 2, 2, 3, 1, 4]

removerElementosDuplicados(lista)