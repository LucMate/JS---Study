// IIFE --> Immediately invoked function expression.
(function(idade, peso, altura){
    const sobrenome = 'Campos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Lucas'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(25, 80, 1.7);