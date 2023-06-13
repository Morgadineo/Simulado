/*3) Encontrar o maior elemento em um vetor
Crie uma função que receba uma matriz de números como
parâmetro e retorne o maior elemento presente nesse vetor.
*/

function pegarMaiorElemento(lista) {
    let i = 0 // Define uma variavel flag

    let maior = 0; // Variável para armazenar o maior numero

    while(i < lista.length) { // Loop para percorrer toda a lista
        if(lista[i] > maior) { // Verifica se o valor da lista de indice do valor de "i" é maior que o atual numero maior
            maior = lista[i] // Se for, substitui o valor maior anterior pelo novo maior
        }
        i++ // Soma na variavel flag para continuar percorrendo
    }

    console.log('O maior número é: ' + maior) // Printa o resultado

}

let lista = [1, 2, 5, 7, 10, 0, 2, 80, 100, 85, 391, 801, 493, 201, 401] // Lista de valores

pegarMaiorElemento(lista)

/*5) Contar a frequência de elementos em uma matriz
Crie uma função que receba um vetor como parâmetro e
retorne um objeto contendo a frequência de cada elemento
presente no vetor. Por exemplo, se o vetor fornecido for [1, 2,
2, 3, 1, 1, 4], a função deve retornar {1: 3, 2: 2, 3: 1, 4: 1}*/

function contarFrequencia(lista) {

    let lista_frequencia = new Map()            // Cria um objeto de dicionário.

    for(let i = 0; i < lista.length; i++) {     // Itera em cima da lista a ser analisada para pegar o valor de indice i.
        let qtde = 0                            // Define uma variável para contar a qtde de vezes que um elemento aparece 
        for(let j = 0; j < lista.length; j++) { // Itera sobre a lista novamente para comparar o valor lista[i] com os valores da nova iteração
            if(lista[j] === lista[i]){          // Se o valor de lista[j] for igual ao de lista[i] 
                qtde += 1                       // Soma que ele apareceu
            }
        }
        lista_frequencia.set(lista[i], qtde)   // Adiciona os valores no dicionário
    }
}

let lista_2 = [1, 3, 1, 2, 4, 5, 9, 17, 2, 4, 1, 6, 6, 3, 98, 10, 39, 38]

contarFrequencia(lista_2)

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

lista_3 = [1, 2, 2, 3, 1, 4]

removerElementosDuplicados(lista_3)

/*13) Contar a quantidade de vogais em uma string
Crie uma função que receba uma string como parâmetro e
retorne a quantidade de vogais presentes nessa string.
Considere apenas as vogais "a", "e", "i", "o" e "u",
independentemente de serem maiúsculas ou minúsculas.*/

function contadorVogais(string) {
    
    let texto = string.split("") // Quebra a string e transforma em uma lista com os chars.

    let vogais = ["a", "e", "i", "o", "u"] // Lista com as vogais

    let qtde_vogais = 0 // Variavel para contar a qtde de vogais

    for(let i = 0; i < texto.length; i++) { // Itera sobre a lista de characteres da string
        letra = texto[i].toLowerCase()      // Passa a letra para minusculo
        console.log(`letra: ${letra}. texto: ${texto}`) // Print de suporte
        if(vogais.indexOf(letra) != -1) { // Utiliza a função indexOf() para verificar se um valor aparece na lista. A função retorna o indice que o valor aparece ou -1 caso não apareça
            qtde_vogais += 1              // Soma na quantidade de vogais
        }
    }
    console.log(`Quantidade de vogais: ${qtde_vogais}`)

}

let string = 'abcde'

contadorVogais(string)

/*6) Validar uma senha
Crie uma função que receba uma senha como parâmetro e
verifique se ela atende aos seguintes critérios: ter pelo menos
8 caracteres, conter pelo menos uma letra maiúscula, uma letra
minúscula e um número.
*/

function validarSenha(senha) {
    let char_senha = senha.split("")

    for(let i = 0; i < char_senha; i++) {
        if(char_senha.length < 8) {
            console.log("A senha deve conter no mínimo 8 characteres")
        } else {
            console.log("Tamanho correto!")
        }
        if(senha.includes(char_senha[i].toUpperCase())) {
            ...
        }
    }

}
