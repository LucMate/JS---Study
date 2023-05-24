const nome = "Lucas";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Campos";
  falaNome();
}
usaFalaNome();
