//return
//retorna um valor
// pode retornar também outras funcoes
//termina a funcao

// function duplica(n){
//     return n *2
// }
// function triplica(n){
//     return n *3
// }
// function quadriplica(n){
//     return n *4
// }

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// function soma(a, b) {
//     return a + b;
// };

// console.log(soma(5,2))

// function criaPessoa(nome,sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Lucas', 'Campos');
// const p2 = {
//     nome:'Lukinhas',
//     sobrenome:'Campinhos'
// };
// console.log(typeof p1)
// console.log(typeof p2)

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + ' ' + resto;
//   }
//   return falaResto;
// }

// const olaMundo = falaFrase('olá')
// console.log(olaMundo('mundo'));
