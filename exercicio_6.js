/*6) Validar uma senha
Crie uma função que receba uma senha como parâmetro e
verifique se ela atende aos seguintes critérios: ter pelo menos
8 caracteres, conter pelo menos uma letra maiúscula, uma letra
minúscula e um número.
*/

function validarSenha(senha) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Expressão regular que contém valores de a-z, A-Z, no minimo um char e minimo de 8 digitos.

    if (regex.test(senha)) { // a função test() recebe como paramêtro a string a ser analisada e compara se nela existe algum termo da expressão regular regex.
        console.log("Senha válida");
    } else {
        console.log("Senha inválida");
    }

}

validarSenha('Ab123456')
