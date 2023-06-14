/*10) Verificar se uma palavra é um anagrama
Crie uma função que receba duas palavras como parâmetros e
determine se elas são anagramas. Um anagrama é uma
palavra formada pela transposição das letras de outra palavra.
Por exemplo, as palavras "amor" e "roma" são anagramas.*/

function ehAnagrama(string_1, string_2) { // Recebe as duas string que serão comparadas

    let string_1_invertida = "" // Variável de suporte

    for (let i = string_1.length - 1; i >= 0; i--) { // Itera de maneira reversa sobre a string_1
        string_1_invertida += string_1[i] // Armazena a string invertida na variável
    }
    for (let j = 0; j < string_1_invertida.length; i++) { // Itera sobre a string_1 invertida
        if (string_1_invertida[j] === string_2[j]) { // Compara a invertida com a string_2. Se a string_1 invertida for igual a string_2.
            return true // É um anagrama
        } else {
            return false // Não é um anagrama
        }
    }
}

ehAnagrama('amor', 'roma') // Recebe duas strings para serem comparadas