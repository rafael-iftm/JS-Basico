/* 
Construa uma página web capaz de solicitar em uma caixa primeiramente o primeiro nome do
usuário e, em seguida, em uma segunda caixa o seu sobrenome. Por último, exiba em uma
nova caixa seu nome completo da pessoa (nome + sobrenome). Deverá haver um espaço em
branco entre o primeiro nome e sobrenome.
 */

// Solicita o primeiro nome do usuário
firstName = prompt("Digite seu primeiro nome: ");

// Solicita o sobrenome do usuário
lastName = prompt("Digite seu sobrenome: ");

// Combina o primeiro nome e o sobrenome com um espaço em branco
fullName = firstName + " " + lastName;

// Terceira forma de resolver (melhor) - template string
// Nota: uso da crase
alert(`Seu nome completo é: ${firstName} ${lastName}`)
