/*13) Contar a quantidade de vogais em uma string
Crie uma função que receba uma string como parâmetro e
retorne a quantidade de vogais presentes nessa string.
Considere apenas as vogais "a", "e", "i", "o" e "u",
independentemente de serem maiúsculas ou minúsculas.*/

function contadorVogais(string) {

    let texto = string.split("") // Quebra a string e transforma em uma lista com os chars.

    let vogais = ["a", "e", "i", "o", "u"] // Lista com as vogais

    let qtde_vogais = 0 // Variavel para contar a qtde de vogais

    for (let i = 0; i < texto.length; i++) { // Itera sobre a lista de characteres da string
        letra = texto[i].toLowerCase()      // Passa a letra para minusculo
        console.log(`letra: ${letra}. texto: ${texto}`) // Print de suporte
        if (vogais.indexOf(letra) != -1) { // Utiliza a função indexOf() para verificar se um valor aparece na lista. A função retorna o indice que o valor aparece ou -1 caso não apareça
            qtde_vogais += 1              // Soma na quantidade de vogais
        }
    }
    console.log(`Quantidade de vogais: ${qtde_vogais}`)

}

let string = 'abcde'

contadorVogais(string)