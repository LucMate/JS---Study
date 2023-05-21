function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
   if (operador === '+') acumulador += numero;
   if (operador === '-') acumulador -= numero;
   if (operador === '/') acumulador /= numero;
   if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta("*", 1, 20, 30, 40, 50);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Kelly', sobrenome: 'Lan', idade: 26});

// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3, 4);

// // argumentos que sustentam todos os argumentos enviados
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, b);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);
