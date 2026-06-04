//Array []
//Json {}

//Array
let listaNomes = ['José', 'Maria', 'João'];
console.log(listaNomes);
 //Acessar o primeiro elemento do array

 //Adiciona um elemento no final do array
listaNomes.push('Ana'); 
console.log(listaNomes);

//Adiciona um elemento no início do array
listaNomes.unshift('Carlos'); 
console.log(listaNomes);

//Remove o ultimo elemento do array
listaNomes.pop();
console.log(listaNomes);

//Remove o primeiro elemento do array
listaNomes.shift();
console.log(listaNomes);

//Acessar o primeiro elemento do array
let qtdeItens = listaNomes.length;
console.log(qtdeItens);

//While
let cont = 0;

while(cont < listaNomes.length)
{
    console.log('O nome do cliente é: ' + listaNomes[cont]);
    cont++; //se ão for colocado o cont++ ele entra em looping infinito
}

//For
console.log('\n Usando o for: \n');
for(let cont = 0; cont < listaNomes.length; cont++) {
    console.log('O nome do cliente é: ' + listaNomes[cont]);
}

//ForEach
console.log('\n Usando o forEach: \n');
listaNomes.forEach(function(item) {
    console.log('O nome do cliente é: ' + item);
});


//Retorna o indice do elemento, se não encontrar retorna -1
let indice = listaNomes.indexOf('Maria'); //Retorna o indice do elemento, se não encontrar retorna -1
console.log(indice);


let novoArray = listaNomes.slice(0, 1); //Copia os elementos do array a partir do indice 0 até o indice 2 (exclusivo)
console.log(novoArray);

novoArray.splice(1, 1); //Remove o elemento do indice 2 até o indice 3 (exclusivo)
console.log(novoArray);

//JSON
let listaProdutos = [
    { nome: 'Teclado', descricao: 'Teclado RGB', qtde: 200, valor: 100, cor: ['preto', 'branco']},
    { nome: 'Mouse', descricao: 'Mouse Gamer', qtde: 150, valor: 50, cor: ['preto', 'branco']},
    { nome: 'Monitor', descricao: 'Monitor 24 polegadas', qtde: 100, valor: 800, cor: ['preto', 'branco']}
];
console.log(listaProdutos);
console.log(listaProdutos[1].nome); //Acessar o nome do primeiro produto

listaProdutos.forEach(function(item) {
    console.log('O nome do produto é: ' + item.nome);
    item.cor.forEach(function(cor){
        console.log('*** Cor: ' + cor);
    })
});