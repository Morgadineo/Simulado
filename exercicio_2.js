/*2) Inverter uma string
Crie uma função que receba uma string como parâmetro e
retorne uma nova string com os caracteres invertidos. Por
exemplo, se a string fornecida for "Hello", a função deve
retornar "olleH".
*/

function inverterString(string) {

    let string_invertida = "" // Variável de suporte

    for (let i = string.length - 1; i >= 0; i--) { // Itera sobre o tamanho da string - 1 (índicie começa em 0) e subtrai i a cada iteração. Pegando o valor de ultimo indicie primeiro
        string_invertida += string[i] // Adiciona o valor na variável de suporte
    }
    console.log(string_invertida)
}

inverterString('Arthur')