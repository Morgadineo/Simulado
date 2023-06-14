/*9) Calcular fatorial de um número
Crie uma função que receba um número como parâmetro e
retorne o fatorial desse número. O fatorial de um número é o
produto de todos os números inteiros positivos menores ou
iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 =
120.*/

function Fatorial(numero) {
    if (numero === 1) {
        return 1
    } else {
        return Fatorial(numero - 1) * numero
    }
}

console.log(Fatorial(100))

/*A ideia de criar funções recursivas é que o código fica mais elegante e menor do que fizesse na forma iterativa. Contudo, ele acaba 
consumindo mais memória e pode ser mais lento.*/