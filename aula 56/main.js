//Factory function - (Função fábrica)
//Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando umas doidera") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Lucas", "Campos", 1.69, 85);
p1.nomeCompleto = "Maria Oliveira Silva";

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
