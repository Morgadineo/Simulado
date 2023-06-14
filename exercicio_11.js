/*11) Converter temperatura
Crie uma função que receba uma temperatura em graus
Celsius como parâmetro e a converta para Fahrenheit. A
fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.
*/

function fahrenheit(graus) {
    let graus_fahrenheit = (graus * 9 / 5) + 32 // Formula de conversão
    return graus_fahrenheit
}

console.log(fahrenheit(30))