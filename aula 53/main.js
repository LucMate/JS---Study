function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Campos')
console.dir(funcao);
console.dir(funcao2)

console.log(funcao())
console.log(funcao2())
