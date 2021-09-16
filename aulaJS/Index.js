//com o for
let listaDeEstudantes = ["João", "Otavio","Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

//------------------------------------------------//

//Com o do:
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;

do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);

//------------------------------------------------//

//Com o while:
while (inicio < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
}