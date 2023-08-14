/* 
Construa uma página web capaz de solicitar em uma caixa primeiramente o primeiro nome do
usuário e, em seguida, em uma segunda caixa o seu sobrenome. Por último, exiba em uma
nova caixa seu nome completo da pessoa (nome + sobrenome). Deverá haver um espaço em
branco entre o primeiro nome e sobrenome.
 */

// Caixa de diálogo para exibir informações
alert("Seja, bem-vindo!");

// Caixa de diálogo para exibir uma mensagem de confirmação
confirm("Seja, bem-vindo!");

// Caixa de diálogo para receber um input do usuário (no caso, o nome)
// O segundo parâmetro do promt é um texto a ser exibido dentro da caixa)
prompt("Digite seu nome:", "Rafael"); 

// Solicita o primeiro nome do usuário
var firstName = prompt("Digite seu primeiro nome:", "Rafael");

// Solicita o sobrenome do usuário
var lastName = prompt("Digite seu sobrenome:", "Prado");

// Combina o primeiro nome e o sobrenome com um espaço em branco
var fullName = firstName + " " + lastName;

// Exibe o nome completo em uma caixa de diálogo
alert("Seu nome completo é: " + fullName);

// Segunda forma de resolver
alert("Seu nome completo é: " + firstName + " " + lastName);

// Terceira forma de resolver (melhor) - template string
// Nota: uso da crase
alert(`Seu nome completo é: ${firstName} ${lastName}`)
