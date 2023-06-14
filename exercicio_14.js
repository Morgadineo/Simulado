/*14) Verificar se um número é um número primo de
Fibonacci
Crie uma função que receba um número como parâmetro e
determine se ele é um número primo de Fibonacci.Um número
primo de Fibonacci é um número que é simultaneamente um
número primo e um número da sequência de Fibonacci.*/

function ehPrimoFibonacci(numero) {

    let sequencia_fibonacci = [0, 1, 1] // Armazena os primeiros 3 numeros de fibonacci

    let fibo_num1 = 0
    let fibo_num2 = 1
    let fibo_num3 = 1

    for (let i = 0; i < 20; i++) { // Gera os primeiros 20 numeros de fibonacci
        fibo_num1 += fibo_num2
        fibo_num2 += fibo_num3
        fibo_num3 = fibo_num1 + fibo_num2

        sequencia_fibonacci.push(fibo_num2) // Adiciona o numero 2 na lista
        sequencia_fibonacci.push(fibo_num3) // Adiciona o numero 3 na lista
    }
    if (sequencia_fibonacci.indexOf(numero) != -1) { // Verica se o numero está presente na lista. Se sim:
        return true // Retorna true
    } else { // Se não
        return false // Retorna false
    }
}

console.log(ehPrimoFibonacci(8))
