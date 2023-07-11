//                0       1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Push
// nomes.splice(nomes.length, 0, 'Carlos', 'Adalberto', 'Usufruidor');

//Unshift
nomes.splice(0, 0, 'Carlos', 'Adalberto', 'Usufruidor');
console.log(nomes);

// nomes.splice(índice, delete, elem1, elem2, elem3);
//pop
// const removidos = nomes.splice(-1, 1);

//shift 
// const removidos = nomes.splice(0, 1);




//Quando queremos remover a partir do índice até o final do array: Number.MAX_VALUE