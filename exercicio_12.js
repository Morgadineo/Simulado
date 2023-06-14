/*12) Verificar se um número é um quadrado perfeito
Crie uma função que receba um número como parâmetro e
determine se ele é um quadrado perfeito.Um quadrado perfeito
é um número inteiro cuja raiz quadrada também é um número
inteiro.Por exemplo, 25 é um quadrado perfeito porque a sua
raiz quadrada é 5, um número inteiro.*/

function ehQuadradoPerfeito(numero) {
    let raiz_quadrada = numero ** 0.5

    return Number.isInteger(raiz_quadrada) // A função isInteger recebe como parametro um número e retorna true caso seja inteiro e falso caso não seja.

}

console.log(ehQuadradoPerfeito(25))
