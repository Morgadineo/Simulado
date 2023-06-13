/*1) Verificar se um número é primo
Crie uma função que receba um número como parâmetro e
determine se ele é primo ou não. Um número primo é aquele
que é divisível apenas por 1 e por ele mesmo.
*/

function verificarNumeroPrimo(numero) {

    if (numero <= 1) { // Se o numero for igual ou menor a 1 ele não é primo.
        return false
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) { // Verifica divisibilidade até a raiz quadrada do número
        if (numero % i === 0) { // Se o número for divisível por qualquer numero diferente de 1 e ele mesmo, ele não é primo.
            return false
        }
    }
    return true
}

verificarNumeroPrimo(10)