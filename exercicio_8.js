/*8) Verificar se uma string é um palíndromo
Crie uma função que receba uma string como parâmetro e
determine se ela é um palíndromo. Um palíndromo é uma
palavra, frase ou sequência de caracteres que pode ser lida da
mesma forma tanto da esquerda para a direita como da direita
para a esquerda, desconsiderando espaços e pontuações.*/

function ehPalindromo(string) {

    let string_invertida = ''

    for (let i = string.length - 1; i >= 0; i--) { // Loop para criar uma variável da string invertida. Mesma lógica do exercicício 2
        string_invertida += string[i]
    }
    for (let j = 0; j < string_invertida.length; j++) { // Itera sobre a string_invertida
        if (string_invertida[j] === string[j]) { // Compara se o valor da string_invertida é igual ao valor string de mesmo indicie. Se sim:
            return true
        } else { // Se não:
            return false
        }
    }
}

ehPalindromo('ovo')
